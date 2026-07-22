import React, { useMemo, useState } from "react";
import { CalendarDays, RefreshCw } from "lucide-react";

/* ---------------------------------------------------------
   Departure data
--------------------------------------------------------- */

const TOTAL_SLOTS = 44;

const RAW_DEPARTURES = [
  { id: 1, date: "06 Sept 2026", price: 11999 },
  { id: 2, date: "13 Sept 2026", price: 11999 },
  { id: 3, date: "20 Sept 2026", price: 11999 },
  { id: 4, date: "27 Sept 2026", price: 11999 },

  { id: 5, date: "04 Oct 2026", price: 11999 },
  { id: 6, date: "11 Oct 2026", price: 12499 },
  { id: 7, date: "18 Oct 2026", price: 13999 },
  { id: 8, date: "25 Oct 2026", price: 14999 },

  { id: 9, date: "01 Nov 2026", price: 15499 },
  { id: 10, date: "08 Nov 2026", price: 14499 },
  { id: 11, date: "15 Nov 2026", price: 13999 },
  { id: 12, date: "22 Nov 2026", price: 12999 },
  { id: 13, date: "29 Nov 2026", price: 12999 },

  { id: 14, date: "06 Dec 2026", price: 13499 },
  { id: 15, date: "13 Dec 2026", price: 13499 },
  { id: 16, date: "20 Dec 2026", price: 16999 },
  { id: 17, date: "27 Dec 2026", price: 18999 },

  { id: 18, date: "03 Jan 2027", price: 15999 },
  { id: 19, date: "10 Jan 2027", price: 13999 },
  { id: 20, date: "17 Jan 2027", price: 13999 },
  { id: 21, date: "24 Jan 2027", price: 15499 },
  { id: 22, date: "31 Jan 2027", price: 13499 },

  { id: 23, date: "07 Feb 2027", price: 13999 },
  { id: 24, date: "14 Feb 2027", price: 15499 },
  { id: 25, date: "21 Feb 2027", price: 14499 },
  { id: 26, date: "28 Feb 2027", price: 13999 },

  { id: 27, date: "07 Mar 2027", price: 12999 },
  { id: 28, date: "14 Mar 2027", price: 12499 },
  { id: 29, date: "21 Mar 2027", price: 12499 },
  { id: 30, date: "28 Mar 2027", price: 11999 },
];

const MONTH_MAP = {
  jan: "Jan",
  feb: "Feb",
  mar: "Mar",
  apr: "Apr",
  may: "May",
  jun: "Jun",
  jul: "Jul",
  aug: "Aug",
  sep: "Sep",
  sept: "Sep",
  oct: "Oct",
  nov: "Nov",
  dec: "Dec",
};

const DAY_LABELS = [
  "SUN",
  "MON",
  "TUE",
  "WED",
  "THU",
  "FRI",
  "SAT",
];

function parseDeparture(raw) {
  const [dayStr, monthStr, yearStr] = raw.date.trim().split(/\s+/);

  const monthKey = monthStr.toLowerCase();

  const monthAbbrev =
    MONTH_MAP[monthKey] || monthStr.slice(0, 3);

  const jsDate = new Date(
    `${monthAbbrev} ${parseInt(dayStr, 10)}, ${yearStr}`
  );

  const day = isNaN(jsDate)
    ? ""
    : DAY_LABELS[jsDate.getDay()];

  return {
    id: raw.id,
    day,
    date: parseInt(dayStr, 10),
    month: monthAbbrev,
    year: parseInt(yearStr, 10),
    price: raw.price,
    totalSlots: TOTAL_SLOTS,
  };
}

const DEFAULT_DEPARTURES =
  RAW_DEPARTURES.map(parseDeparture);

const FILTERS = [
  { id: "all", label: "All departures" },
  { id: "Pune", label: "Pune" },
  { id: "joinleave", label: "Joining / Leaving" },
];

function currency(n) {
  return "₹" + Math.round(n).toLocaleString("en-IN");
}

/* -------------------------- Date Tile -------------------------- */

function DateTile({
  departure,
  isSelected,
  isLowest,
  onClick,
}) {
  const { day, date, month, price } = departure;

  return (
    <div
      onClick={() => onClick(departure)}
      className={`
        relative
        w-full
        sm:w-[170px]
        h-[165px]
        flex-shrink-0
        rounded-xl
        border
        overflow-hidden
        transition-all
        duration-200
        cursor-pointer
        flex
        flex-col
        ${
          isLowest
            ? "bg-emerald-600 border-emerald-600"
            : isSelected
            ? "border-blue-700 ring-2 ring-blue-700 shadow-md bg-white"
            : "bg-white border-gray-200 hover:border-blue-400 hover:shadow-md"
        }
      `}
    >
      <div
        className={`text-center pt-3 text-xs font-semibold tracking-widest uppercase ${
          isLowest
            ? "text-white/90"
            : "text-gray-400"
        }`}
      >
        {day}
      </div>

      <div className="text-center mt-2">
        <div
          className={`text-3xl sm:text-[34px] font-extrabold ${
            isLowest
              ? "text-white"
              : "text-gray-900"
          }`}
        >
          {date}
        </div>

        <div
          className={`text-xs mt-1 ${
            isLowest
              ? "text-white/90"
              : "text-gray-400"
          }`}
        >
          {month}
        </div>
      </div>

      <div
        className={`text-center text-lg font-bold mt-2 ${
          isLowest
            ? "text-white"
            : "text-gray-800"
        }`}
      >
        {currency(price)}
      </div>

      <div
        className={`text-center text-xs mt-1 ${
          isLowest
            ? "text-white/90"
            : "text-gray-500"
        }`}
      >
        {departure.totalSlots} slots available
      </div>

      <div className="flex-1 flex items-end justify-center pb-3">
        {isLowest && (
          <span className="text-xs font-semibold text-white">
            Lowest Price
          </span>
        )}
      </div>
    </div>
  );
}

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

    if (onSelect) {
      onSelect(departure);
    }
  };

  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8">

      <div className="bg-white rounded-2xl border border-gray-200 shadow-sm p-4 sm:p-6">

        {/* Header */}

        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">

          <h2 className="text-xl sm:text-2xl font-bold text-gray-900">
            All Departure Dates ({departures.length})
          </h2>

          <div className="flex items-center gap-2 text-xs sm:text-sm text-gray-500">

            <CalendarDays size={16} />

            <span>Multiple departures available</span>

          </div>

        </div>

        <div className="h-px bg-gray-200 mt-5 mb-6" />

        {/* Filters */}

        <div className="flex flex-wrap gap-3 sm:gap-6 mb-8">

          {FILTERS.map((f) => {

            const active = filter === f.id;

            return (

              <button
                key={f.id}
                onClick={() => setFilter(f.id)}
                className="flex items-center gap-2 text-sm font-medium text-gray-700"
              >

                <span
                  className={`w-5 h-5 rounded-full border flex items-center justify-center transition ${
                    active
                      ? "border-blue-900 bg-blue-900"
                      : "border-gray-300 bg-white"
                  }`}
                >
                  {active && (
                    <span className="w-2 h-2 rounded-full bg-white" />
                  )}
                </span>

                {f.label}

              </button>

            );

          })}

        </div>

        {/* Date Grid */}

        <div
          className="
            grid
            grid-cols-1
            sm:grid-cols-2
            md:grid-cols-3
            lg:grid-cols-4
            xl:grid-cols-5
            gap-5
          "
          key={refreshKey}
        >
          {departures.map((departure) => (

            <DateTile
              key={departure.id}
              departure={departure}
              isSelected={selectedId === departure.id}
              isLowest={departure.price === lowestPrice}
              onClick={handleSelect}
            />

          ))}
        </div>

                {/* Refresh Button */}

        <div className="flex justify-center mt-10">

          <button
            onClick={() => setRefreshKey((k) => k + 1)}
            className="
              w-full
              sm:w-auto
              flex
              items-center
              justify-center
              gap-2
              bg-slate-900
              text-white
              px-6
              py-3
              rounded-xl
              text-sm
              font-medium
              shadow-lg
              hover:bg-slate-800
              transition-colors
            "
          >
            <RefreshCw size={16} />

            Refresh for fresh content

          </button>

        </div>

        {/* Terms */}

        <p className="text-xs text-gray-400 leading-6 mt-6 text-center">

          Terms and Conditions apply. 5% GST is applicable on the given tour
          price. Mentioned tour prices are per person for Indian Nationals
          only.

        </p>

      </div>

    </section>

  );
};

export default DepartureDates;