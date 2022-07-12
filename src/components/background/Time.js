import React, { useState, useEffect } from 'react'

// Updates the time/day/greeting at set intervals
const UseDate = () => {
    const locale = 'en';
    const [date, setDate] = useState(new Date());

    // Time: assigning function to the variable 
    // useEffect/setInterval: calling function and telling it to do smth within it...?
    useEffect(() => {
        const timer = setInterval(() => {
            setDate(new Date());
        }, 1000);
        return () => {
            clearInterval(timer);
        }
    }, []);

    const hour = date.getHours();
    const wish = `good ${(hour < 12 && 'morning') || (hour < 17 && 'afternoon') || 'evening'}`;

    const time_opt = {hour: 'numeric', hour12: false, minute: 'numeric'};
    const time = date.toLocaleTimeString(locale, time_opt);

    const day_opt = { weekday: 'long', year: 'numeric', month: 'long', day:'numeric'};
    const day = date.toLocaleDateString(locale, day_opt);

    return {
        wish, time, day,
    };
}

const Time = () => {   
    const { wish, time, day } = UseDate();

  return (
    <div className='greetings'>
        <h6>{wish}</h6>
        <h1>{time}</h1>
        <p>{day}</p>
    </div>
  )
}

export default Time