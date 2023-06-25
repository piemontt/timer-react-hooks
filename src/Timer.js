import React, { useState, useEffect} from 'react';


export function ResultList(props) {
 
    return (
        <div className="container mt-5">
            <div class="alert alert-info" role="alert">
                it is {props.time}
            </div>
        </div>
        )
}

export function Timer() {
            const localStorageTime = parseInt(localStorage.getItem("time"));
            const [count, setCount] = useState(localStorageTime || 0);
            const [isTurned, setTurned] = useState(false);
            
            useEffect(() => {
                if (!isTurned) return;

                    const interval = setInterval(() => {
                        setCount(c => c + 1);
                    }, 1000);

                    return () => clearInterval(interval);
            }, [isTurned]); // ��� ������

            const hour = count / 60 / 60 % 60;
            const minute = count / 60 % 60;
            const second = count % 60; // ������� �� ����, �������, ������
	
            localStorage.setItem("time", JSON.stringify(count)); // �������� ������������ � localStorage

            const reset = function() {
                localStorage.setItem("time", 0);
                setCount(0);
            }; // �������� �������� �� �������� � � localStorage

            const startTimer = function (event) {
                setTurned(!isTurned)
            }; // �������, ����������� ������

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
                        <button type="button" className="btn btn-info d-block m-1" >
                            poka tak
                        </button>
                    </div>
                    <ResultList time={`${Math.trunc(hour)} hours : ${Math.trunc(minute)} ${minute === 1 ? "minute" : "minutes"} : ${Math.trunc(second)} ${second === 1 ? "second" : "seconds"}`} />
                </div>

                )
}

