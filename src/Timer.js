import React, { useState, useEffect} from 'react';
import {
    OKShareButton,
    ViberShareButton,
    WhatsappShareButton,
    OKIcon,
    ViberIcon,
    WhatsappIcon,
} from "react-share";



export function Timer() {
            const localStorageTime = parseInt(localStorage.getItem("time"));
            const [count, setCount] = useState(localStorageTime || 0);
            const [isTurned, setTurned] = useState(false);

            const [arr, setArr] = useState([]);
            const result = arr.map((element, index) => {

                return <div className="alert alert-dark d-flex flex-row justify-content-between" role="alert" key={index}>
                            <p className= "mt-1 lh-lg">
                                        {element}
                            </p>
                    
                            <div name="d-flex flex-row justify-content-between">
                                <button type="button" className="btn btn-danger  me-4" onClick={() => remove(index)} >
                                     clear
                                </button>

                                <OKShareButton
                                    className="m-1"
                                    url={'https://www.example.com'}
                                    quote={element}
                                    hashtag="#overtake me"
                                >
                                    <OKIcon size={31} round />
                                </OKShareButton>

                                <ViberShareButton
                                    className="m-1"
                                    url={'https://www.example.com'}
                                    quote={element}
                                    hashtag="#overtake me"
                                >
                                    <ViberIcon size={31} round />
                                </ViberShareButton>

                                <WhatsappShareButton
                                    className="m-1"
                                    url={'https://www.example.com'}
                                    quote={element}
                                    hashtag="#overtake me"
                                >
                                    <WhatsappIcon size={31} round />
                                    </WhatsappShareButton>
                            </div>

                        </div>;
            });  // 19-60 строки это добавление элеманта с результатами отсчета

            function remove(index) {
                setArr([...arr.slice(0, index), ...arr.slice(index + 1)]);
            }   // функция удаляет элемент из списка 

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

