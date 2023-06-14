import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

function DatePickerComponent() {
  const [startDate, setStartDate] = useState(null);

  return (
    <div>
      <DatePicker
      placeholderText= "Select a date"
        selected={startDate}
        onChange={(date) => setStartDate(date)}
      />
    </div>
  );
}

export default DatePickerComponent;