import React, { useState, useEffect} from 'react';



export function Timer() {
            const localStorageTime = parseInt(localStorage.getItem("time"));
            const [count, setCount] = useState(localStorageTime || 0);
            const [isTurned, setTurned] = useState(false);

            const [arr, setArr] = useState([]);
            const result = arr.map((element, index) => {
                return <div className="alert alert-dark" role="alert" key={index}> <p> {element} </p> </div>;
            });  // 10-13 строки это добавление элеманта с результатами отсчета

            useEffect(() => {
                if (!isTurned) return;

                    const interval = setInterval(() => {
                        setCount(c => c + 1);
                    }, 1000);

                    return () => clearInterval(interval);
            }, [isTurned]); // Сам таймер

            const hour = count / 60 / 60 % 60;
            const minute = count / 60 % 60;
            const second = count % 60; // Делится на часы, секунды, минуты
	
            localStorage.setItem("time", JSON.stringify(count)); // Значение записывается в localStorage

            const reset = function() {
                localStorage.setItem("time", 0);
                setCount(0);
            }; // Обнуляет значение на странице и в localStorage

            const startTimer = function (event) {
                setTurned(!isTurned)
            }; // Функция, запускающая таймер

           
            return (
                <div className="container-fluid mt-5 d-flex justify-content-center align-items-center flex-column">
                    <span className="fs-1">{`${Math.trunc(hour)} hours : ${Math.trunc(minute)} ${minute === 1 ? "minute" : "minutes"} : ${Math.trunc(second)} ${second === 1 ? "second" : "seconds"}`}  left
                    </span>
                    <div className="buttons mt-5 d-flex ">
                        <button type="button" className={isTurned ? 'btn-danger btn btn-success d-block m-1' : 'btn-success btn btn-success d-block m-1'} onClick={startTimer}>
                            turn {isTurned ? 'off' : 'on'}
                        </button>
                        <button type="button" className="btn btn-secondary d-block m-1" onClick={reset}>
                            reset
                        </button>
                        <button type="button" className="btn btn-primary d-block m-1" onClick={event => setArr([...arr, `${Math.trunc(hour)} hours : ${Math.trunc(minute)} ${minute === 1 ? "minute" : "minutes"} : ${Math.trunc(second)} ${second === 1 ? "second" : "seconds"}`])}>
                            compare result
                        </button>
                    </div>
                    <div className="container mt-5 ml-5">
                        {result} {/* Список результатов */}
                    </div>
                </div>

                )
}

