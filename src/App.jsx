import React, { useState, useEffect, useCallback } from "react";

// ==========================
// THEMATIC MONTH IMAGES
// ==========================
const MONTH_IMAGES = [
  "https://images.unsplash.com/photo-1467062497047-975949dc490f?w=1080&auto=format&fit=crop", // Jan
  "https://images.unsplash.com/photo-1518199266791-5375a83190b7?w=1080&auto=format&fit=crop", // Feb
  "https://images.unsplash.com/photo-1553698188-724e5ce3339d?w=1080&auto=format&fit=crop", // Mar
  "https://images.unsplash.com/photo-1500829243541-74b67eecdf65?w=1080&auto=format&fit=crop", // Apr
  "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=1080&auto=format&fit=crop", // May
  "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=1080&auto=format&fit=crop", // Jun
  "https://images.unsplash.com/photo-1515694346937-94d85e41e6f0?w=1080&auto=format&fit=crop", // Jul
  "https://images.unsplash.com/photo-1532375810565-98bf157e1085?w=1080&auto=format&fit=crop", // Aug
  "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=1080&auto=format&fit=crop", // Sep
  "https://images.unsplash.com/photo-1574883495147-3ce9e31d4590?w=1080&auto=format&fit=crop", // Oct
  "https://images.unsplash.com/photo-1472162072942-cd5147eb3902?w=1080&auto=format&fit=crop", // Nov
  "https://images.unsplash.com/photo-1512474932049-78ac69ede12c?w=1080&auto=format&fit=crop"  // Dec
];

// ==========================
// MONTH THEMES
// ==========================
const MONTH_THEMES = [
  { primary: "from-orange-500 to-pink-600", light: "from-orange-50 to-pink-50", text: "text-orange-900", today: "from-orange-400 to-orange-600", yesterday: "from-orange-300 to-orange-400", tomorrow: "from-orange-500 to-orange-700" },
  { primary: "from-pink-500 to-red-600", light: "from-pink-50 to-red-50", text: "text-pink-900", today: "from-pink-400 to-pink-600", yesterday: "from-pink-300 to-pink-400", tomorrow: "from-pink-500 to-pink-700" },
  { primary: "from-emerald-500 to-teal-600", light: "from-emerald-50 to-teal-50", text: "text-emerald-900", today: "from-emerald-400 to-emerald-600", yesterday: "from-emerald-300 to-emerald-400", tomorrow: "from-emerald-500 to-emerald-700" },
  { primary: "from-blue-500 to-cyan-600", light: "from-blue-50 to-cyan-50", text: "text-blue-900", today: "from-blue-400 to-blue-600", yesterday: "from-blue-300 to-blue-400", tomorrow: "from-blue-500 to-blue-700" },
  { primary: "from-amber-500 to-yellow-600", light: "from-amber-50 to-yellow-50", text: "text-amber-900", today: "from-amber-400 to-amber-600", yesterday: "from-amber-300 to-amber-400", tomorrow: "from-amber-500 to-amber-700" },
  { primary: "from-indigo-500 to-purple-600", light: "from-indigo-50 to-purple-50", text: "text-indigo-900", today: "from-indigo-400 to-indigo-600", yesterday: "from-indigo-300 to-indigo-400", tomorrow: "from-indigo-500 to-indigo-700" },
  { primary: "from-red-500 to-orange-600", light: "from-red-50 to-orange-50", text: "text-red-900", today: "from-red-400 to-red-600", yesterday: "from-red-300 to-red-400", tomorrow: "from-red-500 to-red-700" },
  { primary: "from-teal-500 to-cyan-600", light: "from-teal-50 to-cyan-50", text: "text-teal-900", today: "from-teal-400 to-teal-600", yesterday: "from-teal-300 to-teal-400", tomorrow: "from-teal-500 to-teal-700" },
  { primary: "from-violet-500 to-purple-600", light: "from-violet-50 to-purple-50", text: "text-violet-900", today: "from-violet-400 to-violet-600", yesterday: "from-violet-300 to-violet-400", tomorrow: "from-violet-500 to-violet-700" },
  { primary: "from-orange-500 to-yellow-600", light: "from-orange-50 to-yellow-50", text: "text-orange-900", today: "from-orange-400 to-orange-600", yesterday: "from-orange-300 to-orange-400", tomorrow: "from-orange-500 to-orange-700" },
  { primary: "from-blue-500 to-indigo-600", light: "from-blue-50 to-indigo-50", text: "text-blue-900", today: "from-blue-400 to-blue-600", yesterday: "from-blue-300 to-blue-400", tomorrow: "from-blue-500 to-blue-700" },
  { primary: "from-red-500 to-green-600", light: "from-red-50 to-green-50", text: "text-red-900", today: "from-red-400 to-red-600", yesterday: "from-red-300 to-red-400", tomorrow: "from-red-500 to-red-700" }
];

// ==========================
// HOLIDAYS
// ==========================
const HOLIDAYS = {
  "1-1": "New Year", "1-26": "Republic Day",
  "2-14": "Valentine's", "2-28": "Science Day",
  "3-8": "Women's Day", "3-22": "World Water Day",
  "4-22": "Earth Day", "5-1": "Labour Day", 
  "6-5": "Environment Day", "6-21": "Yoga Day",
  "7-1": "Doctor's Day", "7-11": "Population Day", 
  "8-15": "Independence Day", "8-29": "Sports Day",
  "9-5": "Teacher's Day", "10-2": "Gandhi Jayanti", 
  "11-14": "Children's Day", "12-25": "Christmas"
};

// ==========================
// RANGE COLORS
// ==========================
const RANGE_COLORS = [
  { primary: "from-blue-500 to-blue-600", light: "bg-blue-100", text: "text-blue-900", border: "border-blue-300" },
  { primary: "from-green-500 to-green-600", light: "bg-green-100", text: "text-green-900", border: "border-green-300" },
  { primary: "from-purple-500 to-purple-600", light: "bg-purple-100", text: "text-purple-900", border: "border-purple-300" },
  { primary: "from-orange-500 to-orange-600", light: "bg-orange-100", text: "text-orange-900", border: "border-orange-300" },
  { primary: "from-pink-500 to-pink-600", light: "bg-pink-100", text: "text-pink-900", border: "border-pink-300" }
];

// ==========================
// COMPONENT
// ==========================
export default function App() {
  const [currentDate, setCurrentDate] = useState(new Date());
  const [image, setImage] = useState("");
  const [ranges, setRanges] = useState([]); 
  const [notes, setNotes] = useState({}); 
  const [selectedQuickDate, setSelectedQuickDate] = useState(null);
  const [flipDirection, setFlipDirection] = useState('');

  const year = currentDate.getFullYear();
  const month = currentDate.getMonth();
  const theme = MONTH_THEMES[month];

  const daysInMonth = new Date(year, month + 1, 0).getDate();
  const firstDay = new Date(year, month, 1).getDay();

  const today = new Date();
  const yesterday = new Date(today); yesterday.setDate(yesterday.getDate() - 1);
  const tomorrow = new Date(today); tomorrow.setDate(tomorrow.getDate() + 1);

  useEffect(() => {
    setImage(MONTH_IMAGES[month]);
  }, [month]);

  const getRangeIndex = useCallback((day) => {
    const testDate = new Date(year, month, day);
    for (let i = 0; i < ranges.length; i++) {
      const range = ranges[i];
      if (!range.start) continue;
      
      if (range.end) {
        const min = range.start < range.end ? range.start : range.end;
        const max = range.start > range.end ? range.start : range.end;
        if (testDate >= min && testDate <= max) return i;
      } else if (!range.end && testDate.getTime() === range.start.getTime()) {
        return i;
      }
    }
    return -1;
  }, [ranges, year, month]);

  const handleSelect = (day) => {
    const selected = new Date(year, month, day);
    const pendingRangeIndex = ranges.findIndex(r => r.start && !r.end);

    if (pendingRangeIndex >= 0) {
      const newRanges = [...ranges];
      const start = newRanges[pendingRangeIndex].start;
      
      if (selected < start) {
        newRanges[pendingRangeIndex] = { ...newRanges[pendingRangeIndex], start: selected, end: start };
      } else {
        newRanges[pendingRangeIndex] = { ...newRanges[pendingRangeIndex], end: selected };
      }
      setRanges(newRanges);
    } else {
      const newRangeId = Date.now();
      setRanges([...ranges, { start: selected, end: null, id: newRangeId }]);
    }
  };

  const handleNoteChange = (rangeId, text) => {
    setNotes(prev => ({ ...prev, [rangeId]: text }));
  };

  const flipPage = (direction) => {
    setFlipDirection(direction);
    setTimeout(() => {
      if (direction === 'left') {
        setCurrentDate(new Date(year, month - 1, 1));
      } else {
        setCurrentDate(new Date(year, month + 1, 1));
      }
      setFlipDirection('');
    }, 400);
  };

  const handleQuickDate = (date) => {
    setSelectedQuickDate(date);
    setCurrentDate(new Date(date.getFullYear(), date.getMonth(), 1));
    const newRangeId = Date.now();
    setRanges([{ start: date, end: date, id: newRangeId }]); 
  };

  const isToday = (day) => today.getDate() === day && today.getMonth() === month && today.getFullYear() === year;
  const isYesterday = (day) => yesterday.getDate() === day && yesterday.getMonth() === month && yesterday.getFullYear() === year;
  const isTomorrow = (day) => tomorrow.getDate() === day && tomorrow.getMonth() === month && tomorrow.getFullYear() === year;

  return (
    <div className={`min-h-screen bg-gradient-to-br ${theme.light} p-4 sm:p-6 lg:p-8 transition-colors duration-700 flex items-center justify-center`}>
      
      {/* MAIN WRAPPER: 
        Uses flex-row and items-stretch so left (Image) and right (Calendar) always match height. 
      */}
      <div className={`w-full max-w-7xl mx-auto flex flex-col md:flex-row items-stretch gap-6 transform transition-all duration-400 ${
        flipDirection === 'left' ? '-translate-x-full opacity-0' :
        flipDirection === 'right' ? 'translate-x-full opacity-0' : 'translate-x-0 opacity-100'
      }`}>
        
        {/* =======================================
            LEFT COLUMN: HERO IMAGE 
            ======================================= */}
        <div className="w-full md:w-5/12 bg-slate-900 rounded-3xl overflow-hidden shadow-2xl relative min-h-[300px] flex flex-col justify-end p-6 sm:p-8">
          
          <img 
            key={image}
            src={image} 
            alt={`${currentDate.toLocaleString("default", { month: "long" })} theme`} 
            className="absolute inset-0 w-full h-full object-cover opacity-80"
            onError={(e) => {
              e.target.onerror = null;
              e.target.src = `https://picsum.photos/seed/${month + year}/800/800`; 
            }}
          />
          
          <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent"></div>
          
          <div className="relative z-10 text-white">
            <h2 className="text-5xl sm:text-6xl font-black mb-1 drop-shadow-lg tracking-tight">
              {currentDate.toLocaleString("default", { month: "long" })}
            </h2>
            <p className="text-2xl sm:text-3xl font-bold opacity-90 drop-shadow-md">
              {year}
            </p>
          </div>
        </div>


        {/* =======================================
            RIGHT COLUMN: CONTROLS & CALENDAR 
            ======================================= */}
        <div className="w-full md:w-7/12 flex flex-col gap-4">
          
          {/* TOP CONTROLS: Locked to the width of the right column */}
          <div className="flex flex-col lg:flex-row gap-4 w-full">
            
            <div className="flex gap-2 bg-white/90 backdrop-blur-xl p-3 sm:p-4 rounded-2xl shadow-xl border border-white/50 w-full lg:w-auto">
              <button
                onClick={() => handleQuickDate(today)}
                className={`px-4 py-3 rounded-xl font-bold transition-all shadow-sm flex-1 lg:flex-none min-w-[90px] ${
                  selectedQuickDate?.getTime() === today.getTime() ? `bg-gradient-to-r ${theme.today} text-white shadow-md` : `bg-white hover:bg-slate-50 text-slate-700`
                }`}
              >
                Today
              </button>
              <button
                onClick={() => handleQuickDate(yesterday)}
                className={`px-4 py-3 rounded-xl font-bold transition-all shadow-sm flex-1 lg:flex-none min-w-[90px] ${
                  selectedQuickDate?.getTime() === yesterday.getTime() ? `bg-gradient-to-r ${theme.yesterday} text-white shadow-md` : `bg-white hover:bg-slate-50 text-slate-700`
                }`}
              >
                Yesterday
              </button>
              <button
                onClick={() => handleQuickDate(tomorrow)}
                className={`px-4 py-3 rounded-xl font-bold transition-all shadow-sm flex-1 lg:flex-none min-w-[90px] ${
                  selectedQuickDate?.getTime() === tomorrow.getTime() ? `bg-gradient-to-r ${theme.tomorrow} text-white shadow-md` : `bg-white hover:bg-slate-50 text-slate-700`
                }`}
              >
                Tomorrow
              </button>
            </div>

            {selectedQuickDate && (
              <div className={`bg-white/95 p-4 rounded-2xl shadow-xl border border-white/50 backdrop-blur-xl flex-1 flex flex-col justify-center ${theme.text}`}>
                <h3 className="font-bold text-sm mb-1 flex items-center gap-2 opacity-80">
                  📍 Selected Date
                </h3>
                <div className="text-xl sm:text-2xl font-black leading-tight">
                  {selectedQuickDate.toLocaleDateString("en-US", { weekday: "long", year: "numeric", month: "long", day: "numeric" })}
                </div>
              </div>
            )}
          </div>

          {/* BOTTOM CALENDAR: The actual grid and notes */}
          <div className="bg-white/95 backdrop-blur-2xl rounded-3xl shadow-2xl p-6 sm:p-8 flex-1 flex flex-col">
            
            <div className="flex justify-between items-center mb-6">
              <button onClick={() => flipPage('left')} className="text-2xl p-3 rounded-2xl bg-slate-100 hover:bg-slate-200 text-slate-700 font-bold">←</button>
              <h3 className={`text-2xl sm:text-3xl font-black ${theme.text} uppercase tracking-wider`}>
                {currentDate.toLocaleString("default", { month: "short" })} {year}
              </h3>
              <button onClick={() => flipPage('right')} className="text-2xl p-3 rounded-2xl bg-slate-100 hover:bg-slate-200 text-slate-700 font-bold">→</button>
            </div>

            <div className="grid grid-cols-7 gap-1 mb-2 text-center text-xs sm:text-sm font-black text-slate-400 uppercase tracking-wider">
              {["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].map((day) => (
                <div key={day}>{day}</div>
              ))}
            </div>

            <div className="grid grid-cols-7 gap-1">
              {[...Array(firstDay)].map((_, i) => (
                <div key={`empty-${i}`} className="p-2 sm:p-3" />
              ))}
              
              {[...Array(daysInMonth)].map((_, i) => {
                const day = i + 1;
                const rangeIndex = getRangeIndex(day);
                const isSelected = rangeIndex !== -1;
                const activeColor = isSelected ? RANGE_COLORS[rangeIndex % RANGE_COLORS.length] : null;
                
                const isTd = isToday(day);
                const isYd = isYesterday(day);
                const isTm = isTomorrow(day);
                
                let dayClass = `relative flex flex-col items-center justify-center p-2 rounded-xl sm:rounded-2xl cursor-pointer font-bold transition-all duration-300 min-h-[60px] sm:min-h-[70px] `;
                
                if (isSelected) {
                  dayClass += `bg-gradient-to-br ${activeColor.primary} text-white shadow-lg z-10 `;
                  if (isTd) dayClass += `ring-2 ring-offset-2 ring-white scale-105 `; 
                } else if (isTd) {
                  dayClass += `bg-gradient-to-br ${theme.today} text-white shadow-md border-2 border-white scale-105 z-10 `;
                } else if (isYd) {
                  dayClass += `bg-gradient-to-br ${theme.yesterday} text-white opacity-90 `;
                } else if (isTm) {
                  dayClass += `bg-gradient-to-br ${theme.tomorrow} text-white shadow-sm `;
                } else {
                  dayClass += `bg-slate-50 hover:bg-slate-100 hover:shadow-md text-slate-700 `;
                }

                const holidayKey = `${month + 1}-${day}`;
                const holiday = HOLIDAYS[holidayKey];

                return (
                  <div key={day} onClick={() => handleSelect(day)} className={dayClass}>
                    <span className="text-base sm:text-lg z-10">{day}</span>
                    {holiday && (
                      <span className={`text-[9px] sm:text-[10px] text-center leading-tight mt-1 px-1 rounded-md z-10 w-full truncate ${isSelected || isTd || isYd || isTm ? 'text-white/90 bg-black/20' : theme.text + ' bg-black/5'}`}>
                        {holiday}
                      </span>
                    )}
                  </div>
                );
              })}
            </div>

            {/* RANGE LEGEND & NOTES UI */}
            {ranges.length > 0 && ranges[0].start && (
              <div className="mt-8 bg-slate-50 p-4 rounded-2xl border border-slate-100 shadow-inner">
                <div className="flex justify-between items-center mb-4">
                  <h4 className="font-bold text-slate-700 flex items-center gap-2">📝 Range Notes</h4>
                  <button onClick={() => setRanges([])} className="text-xs font-bold text-slate-400 hover:text-red-500 transition-colors">Clear All</button>
                </div>
                
                <div className="flex flex-col gap-3 max-h-48 overflow-y-auto pr-2">
                  {ranges.map((range, idx) => {
                    if (!range.start) return null;
                    const color = RANGE_COLORS[idx % RANGE_COLORS.length];
                    const startStr = range.start.toLocaleDateString("en-US", {month:"short", day:"numeric"});
                    const endStr = range.end ? range.end.toLocaleDateString("en-US", {month:"short", day:"numeric"}) : "Select end...";
                    
                    return (
                      <div key={range.id} className={`p-3 rounded-xl ${color.light} ${color.text} border ${color.border} flex flex-col gap-2 shadow-sm`}>
                        <div className="flex justify-between items-center text-sm font-black">
                          <span>Range {idx + 1}: {startStr} {range.end && `→ ${endStr}`}</span>
                          {!range.end && <span className="animate-pulse text-xs bg-white/50 px-2 py-1 rounded-md">Pending...</span>}
                        </div>
                        <input
                          type="text"
                          placeholder="Add a note for this range..."
                          value={notes[range.id] || ""}
                          onChange={(e) => handleNoteChange(range.id, e.target.value)}
                          className={`w-full bg-white/60 focus:bg-white text-sm px-3 py-2 rounded-lg outline-none transition-all placeholder:text-slate-400 text-slate-800 ${color.border}`}
                        />
                      </div>
                    );
                  })}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}