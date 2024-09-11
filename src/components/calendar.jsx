import React, { useState, useEffect, useCallback } from 'react';
import { Helmet } from 'react-helmet';
import "../css/calendar.css";

function Calendar() {
    const [currentDate] = useState(new Date());
    const [currYear, setCurrYear] = useState(currentDate.getFullYear());
    const [currMonth, setCurrMonth] = useState(currentDate.getMonth());
    const [days, setDays] = useState([]);

    const months = [
        "January", "February", "March", "April", "May", "June",
        "July", "August", "September", "October", "November", "December"
    ];

    const renderCalendar = useCallback(() => {
        const firstDayOfMonth = new Date(currYear, currMonth, 1).getDay();
        const lastDateOfMonth = new Date(currYear, currMonth + 1, 0).getDate();
        const lastDayOfMonth = new Date(currYear, currMonth, lastDateOfMonth).getDay();
        const lastDateOfLastMonth = new Date(currYear, currMonth, 0).getDate();

        const daysArray = [];

        for (let i = firstDayOfMonth; i > 0; i--) {
            daysArray.push(
                <li className="inactive" key={`prev-${i}`}>
                    {lastDateOfLastMonth - i + 1}
                </li>
            );
        }

        for (let i = 1; i <= lastDateOfMonth; i++) {
            const isToday =
                i === currentDate.getDate() &&
                currMonth === currentDate.getMonth() &&
                currYear === currentDate.getFullYear()
                    ? "active"
                    : "";

            daysArray.push(
                <li className={isToday} key={`curr-${i}`}>
                    {i}
                </li>
            );
        }

        for (let i = 1; i <= 6 - lastDayOfMonth; i++) {
            daysArray.push(
                <li className="inactive" key={`next-${i}`}>
                    {i}
                </li>
            );
        }

        setDays(daysArray);
    }, [currYear, currMonth, currentDate]);

    useEffect(() => {
        renderCalendar();
    }, [renderCalendar]);

    const handlePrevNext = (direction) => {
        const newDate = new Date(currYear, currMonth + (direction === 'prev' ? -1 : 1));
        setCurrYear(newDate.getFullYear());
        setCurrMonth(newDate.getMonth());
    };

    return (
        <>
            <Helmet>
                <link
                    href="https://fonts.googleapis.com/icon?family=Material+Icons+Round"
                    rel="stylesheet"
                />
            </Helmet>
            <h2 className="diary-heading">Select a Date to View Your Past Entries</h2>
            <div className="wrapper1">
                <header>
                    <h4 className="curr-date">{`${months[currMonth]} ${currYear}`}</h4>
                    <div className="icons">
                        <span
                            id="prev"
                            className="material-icons-round"
                            onClick={() => handlePrevNext('prev')}
                        >
                            chevron_left
                        </span>
                        <span
                            id="next"
                            className="material-icons-round"
                            onClick={() => handlePrevNext('next')}
                        >
                            chevron_right
                        </span>
                    </div>
                </header>
                <div className="calendar">
                    <ul className="weeks">
                        <li>Sun</li>
                        <li>Mon</li>
                        <li>Tue</li>
                        <li>Wed</li>
                        <li>Thu</li>
                        <li>Fri</li>
                        <li>Sat</li>
                    </ul>
                    <ul className="days">{days}</ul>
                </div>
            </div>
        </>
    );
}

export default Calendar;
