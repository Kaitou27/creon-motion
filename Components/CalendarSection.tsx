'use client';

import React, { useState, useMemo, useEffect, useRef } from 'react';
import { useRouter } from 'next/navigation';
import {
  Calendar as CalendarIcon,
  Clock,
  ArrowRight,
  ChevronLeft,
  ChevronRight,
  CheckCircle2,
  AlertCircle,
  Search,
  Globe,
  Settings2
} from 'lucide-react';
import { supabase } from '@/app/lib/supabase';

// --- Types ---
interface BookingSlot {
  local: string;
  pht: string;
  startISO: string;
  endISO: string;
  isBooked: boolean;
}

interface ThinSlot {
  isBooked: boolean;
}

// --- Helpers ---
const getTimezoneLabel = (iana: string) => {
  try {
    const formatter = new Intl.DateTimeFormat('en-US', {
      timeZone: iana,
      timeZoneName: 'shortOffset'
    });
    const parts = formatter.formatToParts(new Date());
    const offset = parts.find(p => p.type === 'timeZoneName')?.value || 'GMT';
    const city = iana.split('/').pop()?.replace(/_/g, ' ') || iana;
    return `(${offset}) ${city}`;
  } catch (e) {
    return iana;
  }
};

const FloatingElement = ({ delay, duration, className, size = "w-3 h-3" }: { delay: number, duration: number, className: string, size?: string }) => (
  <div
    className={`absolute ${className} animate-bounce opacity-40`}
    style={{
      animationDelay: `${delay}s`,
      animationDuration: `${duration}s`
    }}
  >
    <div className={`${size} bg-[#00E0FF] rounded-full shadow-lg shadow-[#00E0FF]/30`}></div>
  </div>
);

const AnimatedLine = ({ delay, className }: { delay: number, className: string }) => (
  <div
    className={`absolute ${className} w-0.5 h-16 bg-gradient-to-b from-[#00E0FF] to-transparent animate-pulse opacity-60`}
    style={{ animationDelay: `${delay}s` }}
  ></div>
);

const SlotSkeleton = () => (
  <div className="w-full p-4 rounded-xl border border-white/5 bg-white/[0.02] flex items-center justify-between animate-pulse">
    <div className="space-y-2">
      <div className="w-24 h-4 bg-white/10 rounded"></div>
      <div className="w-16 h-2 bg-white/5 rounded"></div>
    </div>
    <div className="w-4 h-4 bg-white/10 rounded"></div>
  </div>
);

const CalendarSection = () => {
  const router = useRouter();
  const [step, setStep] = useState(1);
  const [currentDate, setCurrentDate] = useState(new Date());
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);
  const [selectedTime, setSelectedTime] = useState<BookingSlot | null>(null);
  const [allBookings, setAllBookings] = useState<{ start: string; end: string }[]>([]);
  const [isLoadingBookings, setIsLoadingBookings] = useState(false);
  const [userTimezone, setUserTimezone] = useState('UTC');
  const [tzSearch, setTzSearch] = useState('');
  const [isTzOpen, setIsTzOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  const tzRef = useRef<HTMLDivElement>(null);

  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    brand: '',
    socials: '',
    topic: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);

  // Detect Timezone on load
  useEffect(() => {
    setMounted(true);
    try {
      setUserTimezone(Intl.DateTimeFormat().resolvedOptions().timeZone);
    } catch (e) {
      setUserTimezone('Asia/Manila');
    }
  }, []);

  // Close timezone dropdown on click outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (tzRef.current && !tzRef.current.contains(event.target as Node)) {
        setIsTzOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  // Supported Timezones
  const availableTimezones = useMemo(() => {
    try {
      return (Intl as any).supportedValuesOf('timeZone') as string[];
    } catch (e) {
      return ['Asia/Manila', 'UTC', 'America/New_York', 'Europe/London', 'Asia/Tokyo'];
    }
  }, []);

  // Pre-calculate full labels for all timezones once to make searching instant
  const timezoneOptions = useMemo(() => {
    return availableTimezones.map(tz => ({
      value: tz,
      label: getTimezoneLabel(tz).toLowerCase(),
      display: getTimezoneLabel(tz)
    }));
  }, [availableTimezones]);

  const filteredTimezones = useMemo(() => {
    const aliases: { [key: string]: string } = {
      'japan': 'tokyo',
      'philippines': 'manila',
      'hawaii': 'honolulu',
      'california': 'los_angeles',
      'texas': 'chicago',
      'new york': 'new_york',
      'england': 'london',
      'usa': 'new_york',
      'uk': 'london',
      'australia': 'sydney',
      'china': 'shanghai',
      'korea': 'seoul',
      'uae': 'dubai',
      'singapore': 'singapore',
      'germany': 'berlin',
      'france': 'paris'
    };

    if (!tzSearch) {
      return [...timezoneOptions].sort((a, b) => {
        const cityA = a.value.split('/').pop() || '';
        const cityB = b.value.split('/').pop() || '';
        return cityA.localeCompare(cityB);
      }).slice(0, 100);
    }

    const search = tzSearch.toLowerCase();
    
    return timezoneOptions.filter(opt => {
      return opt.value.toLowerCase().includes(search) || 
             opt.label.includes(search) ||
             Object.entries(aliases).some(([country, city]) => 
               country.includes(search) && opt.value.toLowerCase().includes(city)
             );
    }).sort((a, b) => {
      if (a.label.startsWith(`(gmt${search}`)) return -1;
      if (b.label.startsWith(`(gmt${search}`)) return 1;
      return 0;
    }).slice(0, 100);
  }, [tzSearch, timezoneOptions]);

  // Fetch bookings for the entire visible month
  useEffect(() => {
    const fetchMonthlyBookings = async () => {
      setIsLoadingBookings(true);
      try {
        const year = currentDate.getFullYear();
        const month = currentDate.getMonth();
        
        const startOfMonth = new Date(`${year}-${String(month + 1).padStart(2, '0')}-01T00:00:00+08:00`).toISOString();
        const lastDay = new Date(year, month + 1, 0).getDate();
        const endOfMonth = new Date(`${year}-${String(month + 1).padStart(2, '0')}-${String(lastDay).padStart(2, '0')}T23:59:59+08:00`).toISOString();

        const { data, error } = await supabase
          .from('bookings')
          .select('start_iso, end_iso')
          .or('status.eq.pending,status.eq.approved')
          .gte('start_iso', startOfMonth)
          .lte('start_iso', endOfMonth);

        if (error) throw error;
        setAllBookings(data.map(b => ({ start: b.start_iso, end: b.end_iso })));
      } catch (err) {
        console.error('Error fetching monthly bookings:', err);
      } finally {
        setIsLoadingBookings(false);
      }
    };

    fetchMonthlyBookings();
  }, [currentDate]);

  // Calendar Logic
  const daysInMonth = useMemo(() => {
    const year = currentDate.getFullYear();
    const month = currentDate.getMonth();
    const firstDay = new Date(year, month, 1).getDay();
    const days = new Date(year, month + 1, 0).getDate();
    return { firstDay, days };
  }, [currentDate]);

  const monthNames = [
    "January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
  ];

  const prevMonth = () => {
    setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() - 1, 1));
    setSelectedDate(null);
  };

  const nextMonth = () => {
    setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 1));
    setSelectedDate(null);
  };

  // --- Optimized helper to generate slots ---
  function generateSlotsForDate(date: Date, bookings: { start: string; end: string }[], onlyCount: true): ThinSlot[];
  function generateSlotsForDate(date: Date, bookings: { start: string; end: string }[], onlyCount?: false): BookingSlot[];
  function generateSlotsForDate(date: Date, bookings: { start: string; end: string }[], onlyCount = false): (BookingSlot | ThinSlot)[] {
    const slots: (BookingSlot | ThinSlot)[] = [];
    const businessTz = 'Asia/Manila';
    const year = date.getFullYear();
    const month = date.getMonth();
    const day = date.getDate();
    const dateStr = `${year}-${String(month + 1).padStart(2, '0')}-${String(day).padStart(2, '0')}`;
    
    let current = new Date(`${dateStr}T07:00:00+08:00`);
    const tomorrow = new Date(current.getTime() + 24 * 60 * 60 * 1000);
    const tomorrowStr = `${tomorrow.getFullYear()}-${String(tomorrow.getMonth() + 1).padStart(2, '0')}-${String(tomorrow.getDate()).padStart(2, '0')}`;
    const endLimit = new Date(`${tomorrowStr}T00:00:00+08:00`);

    while (current < endLimit) {
      const slotStart = new Date(current);
      const slotEnd = new Date(current.getTime() + 15 * 60 * 1000);
      
      if (slotEnd > endLimit) break;

      const lunchStart = new Date(`${dateStr}T12:00:00+08:00`);
      const lunchEnd = new Date(`${dateStr}T13:00:00+08:00`);
      
      if (slotEnd > lunchStart && slotStart < lunchEnd) {
        current = new Date(lunchEnd.getTime());
        continue;
      }

      const isBooked = bookings.some(booked => {
        const bStart = new Date(booked.start);
        const bEnd = new Date(booked.end);
        return slotStart < bEnd && slotEnd > bStart;
      });

      if (onlyCount) {
        slots.push({ isBooked });
      } else {
        const phtString = slotStart.toLocaleTimeString('en-US', { timeZone: businessTz, hour: 'numeric', minute: '2-digit', hour12: true });
        const phtEndString = slotEnd.toLocaleTimeString('en-US', { timeZone: businessTz, hour: 'numeric', minute: '2-digit', hour12: true });
        const localString = slotStart.toLocaleTimeString('en-US', { timeZone: userTimezone, hour: 'numeric', minute: '2-digit', hour12: true });
        const localEndString = slotEnd.toLocaleTimeString('en-US', { timeZone: userTimezone, hour: 'numeric', minute: '2-digit', hour12: true });

        slots.push({
          local: `${localString} - ${localEndString}`,
          pht: `${phtString} - ${phtEndString}`,
          startISO: slotStart.toISOString(),
          endISO: slotEnd.toISOString(),
          isBooked
        });
      }

      current = new Date(slotEnd.getTime() + 10 * 60 * 1000);
    }
    return slots;
  }

  // Pre-calculate full days for the month
  const fullDays = useMemo(() => {
    const full: Set<number> = new Set();
    const year = currentDate.getFullYear();
    const month = currentDate.getMonth();
    const daysCount = new Date(year, month + 1, 0).getDate();

    for (let d = 1; d <= daysCount; d++) {
      const date = new Date(year, month, d);
      const slots = generateSlotsForDate(date, allBookings, true);
      if (slots.length > 0 && slots.every(s => s.isBooked)) {
        full.add(d);
      }
    }
    return full;
  }, [currentDate, allBookings]);

  // Current selected day slots
  const timeSlots = useMemo(() => {
    if (!selectedDate) return [];
    return generateSlotsForDate(selectedDate, allBookings);
  }, [selectedDate, allBookings, userTimezone]);

  const handleDateClick = (day: number) => {
    const newDate = new Date(currentDate.getFullYear(), currentDate.getMonth(), day);
    if (newDate < new Date(new Date().setHours(0, 0, 0, 0)) || fullDays.has(day)) return;
    setSelectedDate(newDate);
    setSelectedTime(null);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleConfirm = async () => {
    if (step === 1) {
      if (selectedDate && selectedTime) setStep(2);
      return;
    }

    if (!formData.fullName || !formData.email || !formData.brand) return;

    setIsSubmitting(true);

    try {
      const response = await fetch('/api/send-booking', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          ...formData,
          date: selectedDate?.toLocaleDateString(),
          timeLocal: selectedTime?.local,
          timePHT: selectedTime?.pht,
          startISO: selectedTime?.startISO,
          endISO: selectedTime?.endISO,
          timezone: userTimezone
        }),
      });

      if (!response.ok) throw new Error('Booking failed');

      setShowSuccess(true);
      setTimeout(() => {
        router.push('/thanks/brand');
      }, 2000);
    } catch (err) {
      console.error(err);
      alert('Something went wrong. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const isToday = (day: number) => {
    const today = new Date();
    return today.getDate() === day &&
      today.getMonth() === currentDate.getMonth() &&
      today.getFullYear() === currentDate.getFullYear();
  };

  const isSelected = (day: number) => {
    return selectedDate?.getDate() === day &&
      selectedDate?.getMonth() === currentDate.getMonth() &&
      selectedDate?.getFullYear() === currentDate.getFullYear();
  };

  const isPast = (day: number) => {
    const date = new Date(currentDate.getFullYear(), currentDate.getMonth(), day);
    return date < new Date(new Date().setHours(0, 0, 0, 0));
  };

  const inputStyle = "w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-white/20 focus:outline-none focus:border-[#00E0FF]/60 focus:bg-[#00E0FF]/5 transition-all duration-300 font-medium text-sm";
  const labelStyle = "block text-gray-400 text-[10px] font-black uppercase tracking-[0.2em] mb-2 ml-1";

  return (
    <div className="relative z-10 max-w-6xl mx-auto">
      {/* Progress Stepper */}
      <div className="flex items-center justify-center gap-4 mb-12">
        <div className={`flex items-center gap-2 transition-all duration-500 ${step >= 1 ? 'text-[#00E0FF]' : 'text-gray-500'}`}>
          <div className={`w-8 h-8 rounded-lg border flex items-center justify-center font-bold transition-all duration-500 ${step >= 1 ? 'border-[#00E0FF] bg-[#00E0FF]/10' : 'border-gray-500'}`}>1</div>
          <span className="text-xs font-bold uppercase tracking-widest hidden sm:inline">Selection</span>
        </div>
        <div className={`w-12 h-px transition-all duration-500 ${step >= 2 ? 'bg-[#00E0FF]' : 'bg-gray-800'}`} />
        <div className={`flex items-center gap-2 transition-all duration-500 ${step >= 2 ? 'text-[#00E0FF]' : 'text-gray-500'}`}>
          <div className={`w-8 h-8 rounded-lg border flex items-center justify-center font-bold transition-all duration-500 ${step >= 2 ? 'border-[#00E0FF] bg-[#00E0FF]/10' : 'border-gray-500'}`}>2</div>
          <span className="text-xs font-bold uppercase tracking-widest hidden sm:inline">Project Info</span>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">

        {/* Left Column */}
        <div className="lg:col-span-7 space-y-8" data-aos="fade-right">
          {step === 1 ? (
            <div className="bg-[#020D12]/60 backdrop-blur-3xl border border-white/5 rounded-[2rem] p-8 shadow-2xl relative overflow-hidden animate-in fade-in slide-in-from-left-4 duration-500">
              {/* Header */}
              <div className="flex items-center justify-between mb-8">
                <div className="flex items-center gap-4">
                  <div className="p-3 bg-[#00E0FF]/10 rounded-xl border border-[#00E0FF]/10 text-[#00E0FF]">
                    <CalendarIcon size={24} />
                  </div>
                  <h2 className="text-2xl font-bold uppercase tracking-tight text-white">
                    Select <span className="text-[#00E0FF]">Date</span>
                  </h2>
                </div>
                <div className="flex items-center gap-2">
                  <button
                    onClick={prevMonth}
                    className="p-2 hover:bg-white/5 rounded-lg transition-colors text-gray-400 hover:text-[#00E0FF]"
                  >
                    <ChevronLeft size={24} />
                  </button>
                  <span className="text-white font-bold uppercase tracking-wider min-w-[140px] text-center">
                    {monthNames[currentDate.getMonth()]} {currentDate.getFullYear()}
                  </span>
                  <button
                    onClick={nextMonth}
                    className="p-2 hover:bg-white/5 rounded-lg transition-colors text-gray-400 hover:text-[#00E0FF]"
                  >
                    <ChevronRight size={24} />
                  </button>
                </div>
              </div>

              {/* Calendar Grid */}
              <div className="grid grid-cols-7 gap-2 mb-4">
                {['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map(day => (
                  <div key={day} className="text-center text-[10px] font-black uppercase tracking-widest text-gray-500 py-2">
                    {day}
                  </div>
                ))}
                {Array.from({ length: daysInMonth.firstDay }).map((_, i) => (
                  <div key={`empty-${i}`} className="p-4" />
                ))}
                {Array.from({ length: daysInMonth.days }).map((_, i) => {
                  const day = i + 1;
                  const past = isPast(day);
                  const selected = isSelected(day);
                  const today = isToday(day);
                  const full = fullDays.has(day);

                  return (
                    <button
                      key={day}
                      disabled={past || full}
                      onClick={() => handleDateClick(day)}
                      className={`
                        relative p-4 rounded-xl text-sm font-bold transition-all duration-200 transform
                        ${(past || full)
                          ? 'text-white/10 cursor-not-allowed opacity-30 shadow-none'
                          : selected
                            ? 'bg-[#00E0FF] text-[#001A1F] shadow-[0_0_25px_rgba(0,224,255,0.5)] scale-105 z-10'
                            : 'text-white hover:bg-white/5 hover:text-[#00E0FF] hover:scale-105'}
                      `}
                    >
                      {day}
                      {full && <span className="absolute top-1 right-1 text-[6px] text-red-500 font-black uppercase">Full</span>}
                      {today && !selected && (
                        <div className="absolute bottom-2 left-1/2 -translate-x-1/2 w-1.5 h-1.5 bg-[#00E0FF] rounded-full shadow-[0_0_8px_#00E0FF]" />
                      )}
                    </button>
                  );
                })}
              </div>
            </div>
          ) : (
            <div className="bg-[#020D12]/60 backdrop-blur-3xl border border-white/5 rounded-[2rem] p-8 shadow-2xl relative overflow-hidden animate-in fade-in slide-in-from-left-4 duration-500">
              <div className="flex items-center gap-4 mb-8">
                <div className="p-3 bg-[#00E0FF]/10 rounded-xl border border-[#00E0FF]/10 text-[#00E0FF] cursor-pointer hover:bg-[#00E0FF]/20 transition-all font-bold" onClick={() => setStep(1)}>
                  <ChevronLeft size={24} />
                </div>
                <h2 className="text-2xl font-bold uppercase tracking-tight text-white">
                  Additional <span className="text-[#00E0FF]">Info</span>
                </h2>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className={labelStyle}>Full Name</label>
                  <input name="fullName" type="text" placeholder="John Doe" className={inputStyle} value={formData.fullName} onChange={handleInputChange} />
                </div>
                <div className="space-y-2">
                  <label className={labelStyle}>Email Address</label>
                  <input name="email" type="email" placeholder="john@brand.com" className={inputStyle} value={formData.email} onChange={handleInputChange} />
                </div>
                <div className="space-y-2">
                  <label className={labelStyle}>Brand / Company</label>
                  <input name="brand" type="text" placeholder="Your Brand Name" className={inputStyle} value={formData.brand} onChange={handleInputChange} />
                </div>
                <div className="space-y-2">
                  <label className={labelStyle}>Social / Channel Link</label>
                  <input name="socials" type="text" placeholder="youtube.com/@channel" className={inputStyle} value={formData.socials} onChange={handleInputChange} />
                </div>
                <div className="md:col-span-2 space-y-2">
                  <label className={labelStyle}>What would you like to discuss?</label>
                  <textarea name="topic" placeholder="Briefly describe your project or questions..." className={`${inputStyle} min-h-[120px] resize-none`} value={formData.topic} onChange={handleInputChange} />
                </div>
              </div>
            </div>
          )}

          {/* Booking Summary Box */}
          <div className="bg-gradient-to-r from-[#00E0FF]/5 to-transparent border-l-4 border-[#00E0FF] p-6 rounded-r-2xl transition-all duration-700 animate-in fade-in slide-in-from-bottom-4">
            <div className="flex gap-4">
              <div className="p-2 bg-[#00E0FF]/10 rounded-lg text-[#00E0FF]">
                <CheckCircle2 size={20} />
              </div>
              <div className="flex-1">
                <h4 className="text-white font-bold uppercase tracking-wider text-xs mb-1 opacity-60">Your Selected Time</h4>
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                  <p className="text-[#00E0FF] text-sm font-black transition-all">
                    {selectedDate ? selectedDate.toLocaleDateString('en-US', { weekday: 'long', month: 'long', day: 'numeric' }) : 'No date selected'}
                    {selectedTime ? ` @ ${selectedTime.local}` : ''}
                  </p>
                  <div className="px-3 py-1 bg-[#001A1F] border border-[#00E0FF]/30 rounded text-gray-400 font-bold tracking-tight flex items-center gap-1.5 overflow-hidden">
                    <Globe size={10} className="text-[#00E0FF] flex-shrink-0" />
                    <span 
                      className="truncate max-w-[150px] uppercase text-[9px]"
                      suppressHydrationWarning={true}
                    >
                      {mounted ? getTimezoneLabel(userTimezone) : 'Detecting...'}
                    </span>
                  </div>
                </div>
                {selectedTime && (
                  <p className="text-gray-500 text-[10px] mt-2 font-bold uppercase tracking-widest animate-in fade-in duration-700">
                    Equivalent to <span className="text-white">{selectedTime.pht}</span> in Philippines Time (PHT)
                  </p>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* Right Column: Time/Status Selection */}
        <div className="lg:col-span-5 space-y-6" data-aos="fade-left">
          <div className="bg-[#020D12]/60 backdrop-blur-3xl border border-white/5 rounded-[2rem] p-8 shadow-2xl relative h-full flex flex-col min-h-[550px]">
            {step === 1 ? (
              <>
                {/* Header with Timezone Selector */}
                <div className="flex flex-col gap-6 mb-6">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="p-2.5 bg-[#00E0FF]/10 rounded-xl border border-[#00E0FF]/10 text-[#00E0FF]">
                        <Clock size={20} />
                      </div>
                      <h2 className="text-xl font-bold uppercase tracking-tight text-white">
                        Select <span className="text-[#00E0FF]">Time</span>
                      </h2>
                    </div>
                  </div>

                  {/* Searchable Timezone Dropdown */}
                  <div className="relative group/tz" ref={tzRef}>
                    <button
                      onClick={() => setIsTzOpen(!isTzOpen)}
                      className={`
                        w-full flex items-center justify-between px-4 py-3 bg-white/[0.03] border rounded-xl transition-all duration-300
                        ${isTzOpen ? 'border-[#00E0FF] bg-white/[0.08]' : 'border-white/10 hover:border-white/20'}
                      `}
                    >
                      <div className="flex items-center gap-3 overflow-hidden text-left">
                        <Globe size={16} className={isTzOpen ? 'text-[#00E0FF]' : 'text-gray-500'} />
                        <div className="min-w-0">
                          <p className="text-[9px] font-black uppercase tracking-[0.2em] text-gray-500 mb-0.5">Booking Hours In:</p>
                          <p 
                            className="text-xs font-bold text-white truncate uppercase tracking-tight"
                            suppressHydrationWarning={true}
                          >
                            {mounted ? getTimezoneLabel(userTimezone) : 'Detecting...'}
                          </p>
                        </div>
                      </div>
                      <Settings2 size={16} className={`transition-transform duration-500 ${isTzOpen ? 'rotate-180 text-[#00E0FF]' : 'text-gray-500'}`} />
                    </button>

                    {/* Dropdown Menu */}
                    {isTzOpen && (
                      <div className="absolute top-[calc(100%+8px)] left-0 right-0 bg-[#020D12] border border-[#00E0FF]/20 rounded-2xl shadow-2xl shadow-black z-[100] animate-in fade-in slide-in-from-top-4 duration-300 overflow-hidden">
                        <div className="p-3 border-b border-white/5 bg-white/[0.02]">
                          <div className="relative">
                            <Search size={14} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500" />
                            <input
                              type="text"
                              autoFocus
                              placeholder="Search city, offset (e.g. +8, GMT)..."
                              className="w-full bg-white/5 border border-white/10 rounded-lg pl-9 pr-4 py-2 text-xs text-white placeholder-white/20 focus:outline-none focus:border-[#00E0FF]/50"
                              value={tzSearch}
                              onChange={(e) => setTzSearch(e.target.value)}
                            />
                          </div>
                        </div>
                        <div className="max-h-[300px] overflow-y-auto scrollbar-thin scrollbar-thumb-[#00E0FF]/20 scrollbar-track-transparent">
                          {filteredTimezones.length > 0 ? (
                            filteredTimezones.map((opt) => (
                              <button
                                key={opt.value}
                                onClick={() => {
                                  setUserTimezone(opt.value);
                                  setIsTzOpen(false);
                                  setSelectedTime(null);
                                }}
                                className={`
                                  w-full text-left px-4 py-3 text-[10px] font-bold transition-all uppercase tracking-tight flex items-center justify-between
                                  ${userTimezone === opt.value ? 'bg-[#00E0FF]/10 text-[#00E0FF]' : 'text-gray-400 hover:bg-white/5 hover:text-white'}
                                `}
                              >
                                <span suppressHydrationWarning={true}>{opt.display}</span>
                                {userTimezone === opt.value && <CheckCircle2 size={12} />}
                              </button>
                            ))
                          ) : (
                            <div className="p-6 text-center text-[10px] text-gray-500 font-bold uppercase tracking-widest">
                              No timezone found
                            </div>
                          )}
                        </div>
                      </div>
                    )}
                  </div>
                </div>

                <div className="flex-1 overflow-y-auto pr-2 scrollbar-thin scrollbar-thumb-[#00E0FF]/20 scrollbar-track-transparent max-h-[420px]">
                  {!selectedDate ? (
                    <div className="h-[400px] flex flex-col items-center justify-center text-center space-y-4 opacity-40 animate-in fade-in duration-700">
                      <CalendarIcon size={48} className="text-[#00E0FF]" />
                      <p className="text-gray-400 font-medium">Please select a date first<br />to see available times.</p>
                    </div>
                  ) : isLoadingBookings ? (
                    <div className="space-y-2 animate-in fade-in duration-300">
                      {Array.from({ length: 8 }).map((_, i) => (
                        <SlotSkeleton key={i} />
                      ))}
                    </div>
                  ) : (
                    <div className="space-y-2">
                      {timeSlots.map((slot, idx) => (
                        <button
                          key={idx}
                          disabled={slot.isBooked}
                          onClick={() => setSelectedTime(slot)}
                          style={{ animationDelay: `${idx * 40}ms` }}
                          className={`
                            w-full p-3.5 rounded-xl border text-xs font-bold uppercase tracking-widest transition-all duration-200 flex items-center justify-between
                            animate-in fade-in slide-in-from-top-2 fill-mode-both
                            ${slot.isBooked 
                              ? 'bg-red-500/5 border-red-500/10 text-gray-700 cursor-not-allowed opacity-40'
                              : selectedTime?.local === slot.local
                                ? 'bg-[#00E0FF]/10 border-[#00E0FF] text-[#00E0FF] shadow-[0_0_15px_rgba(0,224,255,0.15)] scale-[1.01]'
                                : 'border-white/5 text-gray-400 hover:border-[#00E0FF]/30 hover:text-white hover:bg-white/[0.02]'}
                          `}
                        >
                          <div className="flex flex-col items-start font-bold">
                            <div className="flex items-center gap-2">
                              <span suppressHydrationWarning={true}>{slot.local}</span>
                              {slot.isBooked && (
                                <span className="text-[8px] bg-red-500/20 text-red-400 px-1.5 py-0.5 rounded uppercase tracking-tighter font-black">Booked</span>
                              )}
                            </div>
                            <span className="text-[9px] opacity-40 lowercase tracking-normal">({slot.pht} PHT)</span>
                          </div>
                          {selectedTime?.local === slot.local && !slot.isBooked && <ArrowRight size={18} className="animate-in slide-in-from-left-2 duration-300" />}
                          {slot.isBooked && <AlertCircle size={14} className="text-red-500/40" />}
                        </button>
                      ))}
                    </div>
                  )}
                </div>
              </>
            ) : (
              <div className="flex-1 flex flex-col items-center justify-center text-center gap-6 p-4 animate-in fade-in zoom-in-95 duration-500">
                <div className="p-6 bg-[#00E0FF]/10 rounded-[2rem] border border-[#00E0FF]/20 text-[#00E0FF] shadow-[0_0_40px_rgba(0,224,255,0.1)]">
                  <CheckCircle2 size={64} className="animate-pulse" />
                </div>
                <div className="space-y-4">
                  <h3 className="text-2xl font-black uppercase tracking-tight text-white leading-tight">Ready to <span className="text-[#00E0FF]">Secure</span><br />Your Strategy Call?</h3>
                  <p className="text-gray-400 text-sm leading-relaxed max-w-[250px] mx-auto">
                    Review your details on the left. We'll reserve your slot instantly once you confirm.
                  </p>
                </div>
              </div>
            )}

            {/* Confirm Button */}
            <div className="mt-8 pt-8 border-t border-white/5">
              <button
                disabled={
                  (step === 1 && (!selectedDate || !selectedTime || selectedTime.isBooked)) ||
                  (step === 2 && (!formData.fullName || !formData.email || !formData.brand)) ||
                  isSubmitting || showSuccess
                }
                onClick={handleConfirm}
                className={`
                  w-full py-5 rounded-2xl font-black uppercase tracking-[0.2em] transition-all duration-300 flex items-center justify-center gap-3 group
                  ${(step === 1 && (!selectedDate || !selectedTime || selectedTime?.isBooked)) || (step === 2 && (!formData.fullName || !formData.email || !formData.brand))
                    ? 'bg-white/5 text-white/10 cursor-not-allowed border border-white/5'
                    : showSuccess
                      ? 'bg-green-500/10 border border-green-500/50 text-green-500'
                      : 'bg-gradient-to-r from-[#00E0FF] to-[#00B8CC] text-[#001A1F] shadow-[0_0_30px_rgba(0,224,255,0.3)] hover:scale-[1.02] hover:shadow-[0_0_40px_rgba(0,224,255,0.4)] active:scale-[0.98]'}
                `}
              >
                {isSubmitting ? (
                  <div className="w-6 h-6 border-2 border-[#001A1F]/30 border-t-[#001A1F] rounded-full animate-spin" />
                ) : showSuccess ? (
                  <>
                    <CheckCircle2 size={24} />
                    Booking Confirmed
                  </>
                ) : (
                  <>
                    {step === 1 ? 'Continue to Info' : 'Confirm Booking'}
                    <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform duration-300" />
                  </>
                )}
              </button>
              {step === 2 && (
                <button
                  onClick={() => setStep(1)}
                  className="w-full mt-4 text-[10px] font-black uppercase tracking-widest text-gray-500 hover:text-[#00E0FF] transition-colors"
                >
                  Change Date/Time
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CalendarSection;
