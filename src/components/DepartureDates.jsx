import React, { useMemo, useState } from "react";
import { CalendarDays, RefreshCw, Check } from "lucide-react";

/* ---------------------------------------------------------
   New departure data — dates are plain strings like
   "06 Sept 2026". We parse them into day/date/month/year
   for the tile rendering.
--------------------------------------------------------- */
const RAW_DEPARTURES = [
  { id: 1, date: "06 Sept 2026", price: 11999, seats: 44 },
  { id: 2, date: "13 Sept 2026", price: 11999, seats: 44 },
  { id: 3, date: "20 Sept 2026", price: 11999, seats: 44 },
  { id: 4, date: "27 Sept 2026", price: 11999, seats: 44 },

  { id: 5, date: "04 Oct 2026", price: 11999, seats: 44 },
  { id: 6, date: "11 Oct 2026", price: 12499, seats: 44 },
  { id: 7, date: "18 Oct 2026", price: 13999, seats: 44 },
  { id: 8, date: "25 Oct 2026", price: 14999, seats: 44 },

  { id: 9, date: "01 Nov 2026", price: 15499, seats: 44 },
  { id: 10, date: "08 Nov 2026", price: 14499, seats: 44 },
  { id: 11, date: "15 Nov 2026", price: 13999, seats: 44 },
  { id: 12, date: "22 Nov 2026", price: 12999, seats: 44 },
  { id: 13, date: "29 Nov 2026", price: 12999, seats: 44 },

  { id: 14, date: "06 Dec 2026", price: 13499, seats: 44 },
  { id: 15, date: "13 Dec 2026", price: 13499, seats: 44 },
  { id: 16, date: "20 Dec 2026", price: 16999, seats: 44 },
  { id: 17, date: "27 Dec 2026", price: 18999, seats: 44 },

  { id: 18, date: "03 Jan 2027", price: 15999, seats: 44 },
  { id: 19, date: "10 Jan 2027", price: 13999, seats: 44 },
  { id: 20, date: "17 Jan 2027", price: 13999, seats: 44 },
  { id: 21, date: "24 Jan 2027", price: 15499, seats: 44 },
  { id: 22, date: "31 Jan 2027", price: 13499, seats: 44 },

  { id: 23, date: "07 Feb 2027", price: 13999, seats: 44 },
  { id: 24, date: "14 Feb 2027", price: 15499, seats: 44 },
  { id: 25, date: "21 Feb 2027", price: 14499, seats: 44 },
  { id: 26, date: "28 Feb 2027", price: 13999, seats: 44 },

  { id: 27, date: "07 Mar 2027", price: 12999, seats: 44 },
  { id: 28, date: "14 Mar 2027", price: 12499, seats: 44 },
  { id: 29, date: "21 Mar 2027", price: 12499, seats: 44 },
  { id: 30, date: "28 Mar 2027", price: 11999, seats: 44 },
];

const MONTH_MAP = {
  jan: "Jan", feb: "Feb", mar: "Mar", apr: "Apr", may: "May", jun: "Jun",
  jul: "Jul", aug: "Aug", sep: "Sep", sept: "Sep", oct: "Oct", nov: "Nov", dec: "Dec",
};

const DAY_LABELS = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];

function parseDeparture(raw) {
  const [dayStr, monthStr, yearStr] = raw.date.trim().split(/\s+/);
  const monthKey = monthStr.toLowerCase();
  const monthAbbrev = MONTH_MAP[monthKey] || monthStr.slice(0, 3);
  const monthIndex = Object.keys(MONTH_MAP).indexOf(monthKey);
  // Build a real Date to derive the weekday (fall back safely if parsing fails)
  const jsDate = new Date(`${monthAbbrev} ${parseInt(dayStr, 10)}, ${yearStr}`);
  const day = isNaN(jsDate) ? "" : DAY_LABELS[jsDate.getDay()];

  return {
    id: raw.id,
    day,
    date: parseInt(dayStr, 10),
    month: monthAbbrev,
    year: parseInt(yearStr, 10),
    price: raw.price,
    seatsLeft: raw.seats,
  };
}

const DEFAULT_DEPARTURES = RAW_DEPARTURES.map(parseDeparture);

const FILTERS = [
  { id: "all", label: "All departures" },
  { id: "Pune", label: "Pune" },
  { id: "joinleave", label: "Joining / Leaving" },
];

function currency(n) {
  return "₹" + Math.round(n).toLocaleString("en-IN");
}

/* -------------------------- Tiles -------------------------- */

function MonthTile({ month, year }) {
  return (
    <div className="w-[84px] h-[112px] flex-shrink-0 rounded-lg bg-[#3a3a3a] text-white flex flex-col items-center justify-center gap-0.5">
      <span className="text-[12px] font-semibold leading-none">{month}</span>
      <span className="text-[12px] leading-none">{year}</span>
    </div>
  );
}

function DateTile({ departure, isSelected, isLowest, onClick }) {
  const { day, date, month, price, seatsLeft } = departure;
  const fewLeft = typeof seatsLeft === "number" && seatsLeft <= 10;

  return (
    <div
      onClick={() => onClick(departure)}
      className={`
        relative w-[112px] h-[112px] flex-shrink-0 rounded-lg border overflow-visible
        transition-all duration-200 select-none cursor-pointer flex flex-col
        ${isLowest
          ? "bg-emerald-600 border-emerald-600"
          : isSelected
          ? "border-blue-700 ring-2 ring-blue-700 shadow-md bg-white"
          : "bg-white border-gray-200 hover:border-blue-400 hover:shadow-md"
        }
      `}
    >
      {fewLeft && (
        <div className="absolute -top-2 -right-2 z-10 bg-red-600 text-white text-[10px] font-bold px-2 py-1 rounded-md shadow whitespace-nowrap">
          {seatsLeft} seats
        </div>
      )}

      <div className={`text-center pt-2 text-[11px] font-semibold tracking-widest uppercase ${isLowest ? "text-white/90" : "text-gray-400"}`}>
        {day}
      </div>

      <div className="text-center leading-none mt-1.5">
        <div className={`text-[26px] font-extrabold leading-none ${isLowest ? "text-white" : "text-gray-900"}`}>
          {date}
        </div>
      </div>

      <div className={`text-center text-[13px] font-semibold mt-1.5 ${isLowest ? "text-white" : "text-gray-800"}`}>
        {currency(price)}
      </div>

      <div className="flex-1 flex items-end justify-center pb-2 px-1">
        {isLowest && <span className="text-[10.5px] text-white font-semibold">Lowest Price</span>}
      </div>
    </div>
  );
}

/* ----------------------------- Main ----------------------------- */

const DepartureDates = ({
  departures = DEFAULT_DEPARTURES,
  onSelect,
}) => {
  const [selectedId, setSelectedId] = useState(null);
  const [refreshKey, setRefreshKey] = useState(0);
  const [filter, setFilter] = useState("all");

  const lowestPrice = useMemo(
    () => Math.min(...departures.map((d) => d.price)),
    [departures]
  );

  const handleSelect = (departure) => {
    setSelectedId(departure.id);
    if (onSelect) onSelect(departure);
  };

  // Build a flat render list, inserting a month tile whenever the month changes
  const tiles = useMemo(() => {
    const items = [];
    let lastKey = null;
    departures.forEach((d) => {
      const key = `${d.month}-${d.year}`;
      if (key !== lastKey) {
        items.push({ type: "month", key: `m-${key}`, month: d.month, year: d.year });
        lastKey = key;
      }
      items.push({ type: "date", key: d.id, departure: d });
    });
    return items;
  }, [departures]);

  return (
    <section className="max-w-5xl mx-auto px-4 py-8">
      <div className="bg-white rounded-2xl border border-gray-200 shadow-sm p-6">
        <div className="flex items-center justify-between flex-wrap gap-3">
          <h2 className="text-xl font-bold text-gray-900">
            All departure dates ({departures.length})
          </h2>
          <div className="flex items-center gap-2 text-xs text-gray-400">
            <CalendarDays size={15} />
            <span>Multiple departures available</span>
          </div>
        </div>
        <div className="h-px bg-gray-200 mt-4 mb-5" />

        {/* Filters */}
        <div className="flex flex-wrap gap-3 mb-6">
          {FILTERS.map((f) => {
            const active = filter === f.id;
            return (
              <button
                key={f.id}
                onClick={() => setFilter(f.id)}
                className={`flex items-center gap-2 pl-2 pr-4 py-1.5 rounded-full text-sm font-medium border transition-colors ${
                  active
                    ? "border-blue-700 text-gray-900 bg-white"
                    : "border-gray-300 text-gray-600 bg-white hover:border-gray-400"
                }`}
              >
                <span
                  className={`w-5 h-5 rounded-full border flex items-center justify-center ${
                    active ? "border-blue-900 bg-blue-950" : "border-gray-300"
                  }`}
                >
                  {active && <Check size={12} className="text-white" strokeWidth={3} />}
                </span>
                {f.label}
              </button>
            );
          })}
        </div>

        <div className="flex flex-wrap gap-4" key={refreshKey}>
          {tiles.map((t) =>
            t.type === "month" ? (
              <MonthTile key={t.key} month={t.month} year={t.year} />
            ) : (
              <DateTile
                key={t.key}
                departure={t.departure}
                isSelected={selectedId === t.departure.id}
                isLowest={t.departure.price === lowestPrice}
                onClick={handleSelect}
              />
            )
          )}
        </div>

        <div className="flex justify-center mt-10">
          <button
            onClick={() => setRefreshKey((k) => k + 1)}
            className="flex items-center gap-2 bg-slate-900 text-white px-5 py-3 rounded-xl text-sm font-medium shadow-lg hover:bg-slate-800 transition-colors"
          >
            <RefreshCw size={15} />
            Refresh for fresh content
          </button>
        </div>

        <p className="text-[11px] text-gray-400 mt-6 text-center">
          Terms and Conditions apply. 5% GST is applicable on given tour price. Mentioned tour prices are per person for Indian Nationals only.
        </p>
      </div>
    </section>
  );
};

export default DepartureDates;



// import React, { useMemo, useState } from "react";
// import { CalendarDays, RefreshCw } from "lucide-react";

// /* ---------------------------------------------------------
//    New departure data — dates are plain strings like
//    "06 Sept 2026". We parse them into day/date/month/year
//    for the tile rendering.
// --------------------------------------------------------- */
// const RAW_DEPARTURES = [
//   { id: 1, date: "06 Sept 2026", price: 11999, seats: 44 },
//   { id: 2, date: "13 Sept 2026", price: 11999, seats: 44 },
//   { id: 3, date: "20 Sept 2026", price: 11999, seats: 44 },
//   { id: 4, date: "27 Sept 2026", price: 11999, seats: 44 },

//   { id: 5, date: "04 Oct 2026", price: 11999, seats: 44 },
//   { id: 6, date: "11 Oct 2026", price: 12499, seats: 44 },
//   { id: 7, date: "18 Oct 2026", price: 13999, seats: 44 },
//   { id: 8, date: "25 Oct 2026", price: 14999, seats: 44 },

//   { id: 9, date: "01 Nov 2026", price: 15499, seats: 44 },
//   { id: 10, date: "08 Nov 2026", price: 14499, seats: 44 },
//   { id: 11, date: "15 Nov 2026", price: 13999, seats: 44 },
//   { id: 12, date: "22 Nov 2026", price: 12999, seats: 44 },
//   { id: 13, date: "29 Nov 2026", price: 12999, seats: 44 },

//   { id: 14, date: "06 Dec 2026", price: 13499, seats: 44 },
//   { id: 15, date: "13 Dec 2026", price: 13499, seats: 44 },
//   { id: 16, date: "20 Dec 2026", price: 16999, seats: 44 },
//   { id: 17, date: "27 Dec 2026", price: 18999, seats: 44 },

//   { id: 18, date: "03 Jan 2027", price: 15999, seats: 44 },
//   { id: 19, date: "10 Jan 2027", price: 13999, seats: 44 },
//   { id: 20, date: "17 Jan 2027", price: 13999, seats: 44 },
//   { id: 21, date: "24 Jan 2027", price: 15499, seats: 44 },
//   { id: 22, date: "31 Jan 2027", price: 13499, seats: 44 },

//   { id: 23, date: "07 Feb 2027", price: 13999, seats: 44 },
//   { id: 24, date: "14 Feb 2027", price: 15499, seats: 44 },
//   { id: 25, date: "21 Feb 2027", price: 14499, seats: 44 },
//   { id: 26, date: "28 Feb 2027", price: 13999, seats: 44 },

//   { id: 27, date: "07 Mar 2027", price: 12999, seats: 44 },
//   { id: 28, date: "14 Mar 2027", price: 12499, seats: 44 },
//   { id: 29, date: "21 Mar 2027", price: 12499, seats: 44 },
//   { id: 30, date: "28 Mar 2027", price: 11999, seats: 44 },
// ];

// const MONTH_MAP = {
//   jan: "Jan", feb: "Feb", mar: "Mar", apr: "Apr", may: "May", jun: "Jun",
//   jul: "Jul", aug: "Aug", sep: "Sep", sept: "Sep", oct: "Oct", nov: "Nov", dec: "Dec",
// };

// const DAY_LABELS = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];

// function parseDeparture(raw) {
//   const [dayStr, monthStr, yearStr] = raw.date.trim().split(/\s+/);
//   const monthKey = monthStr.toLowerCase();
//   const monthAbbrev = MONTH_MAP[monthKey] || monthStr.slice(0, 3);
//   const monthIndex = Object.keys(MONTH_MAP).indexOf(monthKey);
//   // Build a real Date to derive the weekday (fall back safely if parsing fails)
//   const jsDate = new Date(`${monthAbbrev} ${parseInt(dayStr, 10)}, ${yearStr}`);
//   const day = isNaN(jsDate) ? "" : DAY_LABELS[jsDate.getDay()];

//   return {
//     id: raw.id,
//     day,
//     date: parseInt(dayStr, 10),
//     month: monthAbbrev,
//     year: parseInt(yearStr, 10),
//     price: raw.price,
//     seatsLeft: raw.seats,
//   };
// }

// const DEFAULT_DEPARTURES = RAW_DEPARTURES.map(parseDeparture);

// function currency(n) {
//   return "₹" + Math.round(n).toLocaleString("en-IN");
// }

// /* -------------------------- Tiles -------------------------- */

// function MonthTile({ month, year }) {
//   return (
//     <div className="w-[76px] h-[100px] flex-shrink-0 rounded-lg bg-slate-700 text-white flex flex-col items-center justify-center">
//       <span className="text-[11px] font-semibold leading-none">{month}</span>
//       <span className="text-[11px] leading-none mt-1">{year}</span>
//     </div>
//   );
// }

// function DateTile({ departure, isSelected, isLowest, onClick }) {
//   const { day, date, month, price, seatsLeft } = departure;
//   const fewLeft = typeof seatsLeft === "number" && seatsLeft <= 10;

//   return (
//     <div
//       onClick={() => onClick(departure)}
//       className={`
//         relative w-[110px] h-[150px] flex-shrink-0 rounded-lg border overflow-hidden
//         transition-all duration-200 select-none cursor-pointer
//         ${isLowest
//           ? "bg-emerald-600 border-emerald-600"
//           : isSelected
//           ? "border-blue-700 ring-2 ring-blue-700 shadow-md bg-white"
//           : "bg-white border-gray-200 hover:border-blue-400 hover:shadow-md"
//         }
//       `}
//     >
//       {fewLeft && (
//         <div className="absolute -top-1 -right-1 z-10 bg-red-600 text-white text-[10px] font-bold px-2 py-1 rounded-bl-lg rounded-tr-lg shadow">
//           {seatsLeft} seats
//         </div>
//       )}

//       <div className={`text-center py-1.5 text-[11px] font-semibold tracking-widest ${isLowest ? "text-white/90" : "text-gray-400"}`}>
//         {day}
//       </div>

//       <div className="text-center">
//         <div className={`text-3xl font-extrabold leading-none ${isLowest ? "text-white" : "text-gray-900"}`}>
//           {date}
//         </div>
//         <div className={`text-[11px] mt-1 ${isLowest ? "text-white/80" : "text-gray-400"}`}>{month}</div>
//       </div>

//       <div className={`text-center text-[13px] font-semibold mt-1 ${isLowest ? "text-white" : "text-gray-700"}`}>
//         {currency(price)}
//       </div>

//       <div className="text-center mt-1 px-1">
//         {isLowest && <span className="text-[10.5px] text-white font-semibold">Lowest Price</span>}
//       </div>
//     </div>
//   );
// }

// /* ----------------------------- Main ----------------------------- */

// const DepartureDates = ({
//   departures = DEFAULT_DEPARTURES,
//   onSelect,
// }) => {
//   const [selectedId, setSelectedId] = useState(null);
//   const [refreshKey, setRefreshKey] = useState(0);

//   const lowestPrice = useMemo(
//     () => Math.min(...departures.map((d) => d.price)),
//     [departures]
//   );

//   const handleSelect = (departure) => {
//     setSelectedId(departure.id);
//     if (onSelect) onSelect(departure);
//   };

//   // Build a flat render list, inserting a month tile whenever the month changes
//   const tiles = useMemo(() => {
//     const items = [];
//     let lastKey = null;
//     departures.forEach((d) => {
//       const key = `${d.month}-${d.year}`;
//       if (key !== lastKey) {
//         items.push({ type: "month", key: `m-${key}`, month: d.month, year: d.year });
//         lastKey = key;
//       }
//       items.push({ type: "date", key: d.id, departure: d });
//     });
//     return items;
//   }, [departures]);

//   return (
//     <section className="max-w-5xl mx-auto px-4 py-8">
//       <div className="bg-white rounded-2xl border border-gray-200 shadow-sm p-6">
//         <div className="flex items-center justify-between flex-wrap gap-3">
//           <h2 className="text-xl font-bold text-gray-900">
//             All departure dates ({departures.length})
//           </h2>
//           <div className="flex items-center gap-2 text-xs text-gray-400">
//             <CalendarDays size={15} />
//             <span>Multiple departures available</span>
//           </div>
//         </div>
//         <div className="h-px bg-gray-200 mt-4 mb-5" />

//         <div className="flex flex-wrap gap-4" key={refreshKey}>
//           {tiles.map((t) =>
//             t.type === "month" ? (
//               <MonthTile key={t.key} month={t.month} year={t.year} />
//             ) : (
//               <DateTile
//                 key={t.key}
//                 departure={t.departure}
//                 isSelected={selectedId === t.departure.id}
//                 isLowest={t.departure.price === lowestPrice}
//                 onClick={handleSelect}
//               />
//             )
//           )}
//         </div>

//         <div className="flex justify-center mt-8">
//           <button
//             onClick={() => setRefreshKey((k) => k + 1)}
//             className="flex items-center gap-2 bg-slate-900 text-white px-5 py-2.5 rounded-full text-sm font-medium hover:bg-slate-800 transition-colors"
//           >
//             <RefreshCw size={15} />
//             Refresh for fresh content
//           </button>
//         </div>

//         <p className="text-[11px] text-gray-400 mt-6">
//           Tax and Conditions apply. 5% GST is applicable on tour packages. Multiple departure cities available. Prices are per person, twin sharing.
//         </p>
//       </div>
//     </section>
//   );
// };

// export default DepartureDates;