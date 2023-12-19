import React, { useEffect } from 'react'
import { useState } from 'react';

export default function WatchItem(props) {
    const {id, title, timeZone, removeWatch} = props;
    const [time, setTime] = useState('');
    let interval; 

    useEffect( () => {
        interval = setInterval( () => {            
            const newDate = new Date();        
            const curTimeZone = newDate.getTimezoneOffset();            
            const curOffset = curTimeZone + timeZone * 60; // min
            newDate.setMilliseconds(curOffset * 60 * 1000);                        
            setTime(newDate.toLocaleTimeString(), 1000)
        });
    },[]);

    useEffect( () => {
        return (
            () => {
                if (interval) {
                    clearInterval(interval);
                }
            }
        )
    },[]);

    return (
    <div className='watch-data'>
        <span>{title}</span>                
        <span>{time}</span>        
        <button 
            onClick={() => removeWatch(id)}            
        >x</button>
    </div>
  )
}