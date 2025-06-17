export default function Calendario({ activeDay, setActiveDay }) {
  const handleDayClick = (index) => {
    setActiveDay(index);
  };

  return (
    <div className="calendar-card">
      <div className="calendar-title">Calendario de bienestar</div>
      <div className="calendar-grid">
        {["D", "L", "M", "MI", "J", "V", "S"].map((d) => (
          <div className="calendar-day-header" key={d}>
            {d}
          </div>
        ))}
        {[...["29", "30", "31"].map((d) => ({ day: d, other: true })),
          ...Array.from({ length: 31 }, (_, i) => ({ day: i + 1 })),
          ...["1", "2"].map((d) => ({ day: d, other: true })),
        ].map((obj, idx) => (
          <div
            key={idx}
            className={`calendar-day ${obj.other ? "other-month" : ""} ${
              activeDay === idx ? "active" : ""
            }`}
            onClick={() => handleDayClick(idx)}
          >
            {obj.day}
          </div>
        ))}
      </div>
    </div>
  );
}
