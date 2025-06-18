import { useState } from "react";
import dayjs from "dayjs";
import "dayjs/locale/es";
dayjs.locale("es");

export default function Calendario({ activeDay, setActiveDay, fechasConEntrada = [] }) {
  const [currentDate, setCurrentDate] = useState(dayjs());

  const startOfMonth = currentDate.startOf("month");
  const endOfMonth = currentDate.endOf("month");
  const startDayIndex = startOfMonth.day();
  const daysInMonth = currentDate.daysInMonth();

  const monthName = currentDate.format("MMMM");
  const year = currentDate.year();
  const today = dayjs();

  const handlePrevMonth = () => {
    setCurrentDate(currentDate.subtract(1, "month"));
  };

  const handleNextMonth = () => {
    setCurrentDate(currentDate.add(1, "month"));
  };

  return (
    <div className="calendar-card">
      <div className="calendar-title d-flex justify-content-between align-items-center">
        <button onClick={handlePrevMonth} className="btn btn-sm btn-light">←</button>
        <span>{monthName.charAt(0).toUpperCase() + monthName.slice(1)} {year}</span>
        <button onClick={handleNextMonth} className="btn btn-sm btn-light">→</button>
      </div>

      <div className="calendar-grid">
        {["D", "L", "M", "MI", "J", "V", "S"].map((d) => (
          <div className="calendar-day-header" key={d}>
            {d}
          </div>
        ))}

        {/* Padding al inicio */}
        {Array.from({ length: startDayIndex }).map((_, i) => (
          <div key={`pad-${i}`} className="calendar-day other-month"></div>
        ))}

        {/* Días del mes */}
        {Array.from({ length: daysInMonth }).map((_, i) => {
          const day = i + 1;
          const date = currentDate.date(day);
          const isoString = date.format("YYYY-MM-DD");

          const isToday = date.isSame(today, "day");
          const hasEntry = fechasConEntrada.includes(isoString);
          const index = i + startDayIndex;

          return (
            <div
              key={index}
              className={`calendar-day ${
                isToday ? "today" : ""
              } ${hasEntry ? "has-entry" : ""} ${
                activeDay === index ? "active" : ""
              }`}
              onClick={() => setActiveDay(index)}
            >
              {day}
            </div>
          );
        })}
      </div>
    </div>
  );
}
