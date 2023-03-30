import React, { useState, useEffect } from 'react';

export function Timer() {
            let isPaused = true;
            const [count, setCount] = useState(0);
            const [isMounted, setIsMounted] = useState(true);

            useEffect(() => {
        
                    const interval = setInterval(() => {
                        setCount(count => isPaused === false ? count + 1 : count);
                    }, 1000);

                    return () => clearInterval(interval);
            }, []);

            const handleUnmount = () => {
                    setIsMounted(false);
            }
            if (!isMounted) {
                    return null;
            }
            return (
                        <div className="container-fluid mt-5 d-flex justify-content-center align-items-center flex-column">
                            <span className="fs-1">{ count } seconds left </span>
                            <div className="buttons mt-5 d-flex ">
                                <button type="button" className="btn btn-success d-block m-1" onClick={ () => isPaused = false }>
                                    Go
                                </button>
                                <button type="button" className="btn btn-danger d-block m-1" onClick={ handleUnmount }>
                                    Clear
                                </button>
                            </div>
                        </div>
                )
}

