import React, { useState } from 'react';
import BpkButton from '@skyscanner/backpack-web/bpk-component-button';
import BpkCalendar, {
  CALENDAR_SELECTION_TYPE,
} from '@skyscanner/backpack-web/bpk-component-calendar';
import './App.css';

const daysOfWeek = [
  { name: 'Sunday', nameAbbr: 'Sun', index: 0, isWeekend: true },
  { name: 'Monday', nameAbbr: 'Mon', index: 1, isWeekend: false },
  { name: 'Tuesday', nameAbbr: 'Tue', index: 2, isWeekend: false },
  { name: 'Wednesday', nameAbbr: 'Wed', index: 3, isWeekend: false },
  { name: 'Thursday', nameAbbr: 'Thu', index: 4, isWeekend: false },
  { name: 'Friday', nameAbbr: 'Fri', index: 5, isWeekend: false },
  { name: 'Saturday', nameAbbr: 'Sat', index: 6, isWeekend: true },
];

const formatDateFull = date =>
  date.toLocaleDateString('en-GB', {
    weekday: 'long',
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  });

const formatMonth = date =>
  date.toLocaleDateString('en-GB', {
    month: 'long',
    year: 'numeric',
  });

function App() {
  const [selectedDate, setSelectedDate] = useState(null);
  const [currentMonth, setCurrentMonth] = useState(new Date());

  return (
    <main className="app">
      <section className="card">
        <h1>Flight Schedule</h1>

        <BpkCalendar
          id="flight-schedule-calendar"
          daysOfWeek={daysOfWeek}
          weekStartsOn={1}
          formatDateFull={formatDateFull}
          formatMonth={formatMonth}
          changeMonthLabel="Change month"
          nextMonthLabel="Next month"
          previousMonthLabel="Previous month"
          month={currentMonth}
          onMonthChange={(event, { month }) => setCurrentMonth(month)}
          onDateSelect={setSelectedDate}
          selectionConfiguration={{
            type: CALENDAR_SELECTION_TYPE.single,
            date: selectedDate,
          }}
        />

        <BpkButton onClick={() => {}}>Continue</BpkButton>
      </section>
    </main>
  );
}

export default App;