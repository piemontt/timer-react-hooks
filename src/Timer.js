import React, { useState, useEffect } from 'react';

export function Timer() {
            const localStorageTime = parseInt(localStorage.getItem("time"));
            const [count, setCount] = useState(localStorageTime || 0);
            const [automatic, setAutomatic] = useState(false);
            const [isActive, setIsActive] = useState(false);

            useEffect(() => {
                if (!automatic) return;

                    const interval = setInterval(() => {
                        setCount(c => c + 1);
                    }, 1000);

                    return () => clearInterval(interval);
            }, [automatic]);

            const hour = count / 60 / 60 % 60;
            const minute = count / 60 % 60;
            const second = count % 60;
	
            localStorage.setItem("time", JSON.stringify(count));

            const handleReset = function() {
                localStorage.setItem("time", JSON.stringify(0));
                setCount(c => c = 0)
            };

            const handleClick = event => {
                setIsActive(current => !current);
                setAutomatic(!automatic)
            };

            return (

                <div className="container-fluid mt-5 d-flex justify-content-center align-items-center flex-column">
                    <span className="fs-1">{`${Math.trunc(hour)} hours : ${Math.trunc(minute)} ${minute === 1 ? "minute" : "minutes"} : ${Math.trunc(second)} ${second === 1 ? "second" :"seconds"}`}  left </span>
                            <div className="buttons mt-5 d-flex ">
                        <button type="button" className={isActive ? 'btn-danger btn btn-success d-block m-1' : 'btn-success btn btn-success d-block m-1'} onClick={handleClick}>
                            turn {automatic ? 'off' : 'on'}
                        </button>
                        <button type="button" className="btn btn-secondary d-block m-1" onClick={handleReset}>
                            reset
                        </button>
                            </div>
                        </div>
                )
}

