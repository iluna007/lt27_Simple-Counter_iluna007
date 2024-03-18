import React, { useState, useEffect } from "react";

const SecondsCounter = () => {
  const [seconds, setSeconds] = useState(0);
  const [intervalId, setIntervalId] = useState(null);

  let unidades = seconds % 10;
  let decenas = Math.floor((seconds / 10) % 10);
  let centenas = Math.floor(seconds / 100);
  let unidadmillar = Math.floor(seconds / 1000);
  let decenamillar = Math.floor(seconds / 10000);
  let centenamillar = Math.floor(seconds / 100000);

  const start = () => {
    if (intervalId) return; 
    setIntervalId(setInterval(() => {
      setSeconds(prevSeconds => prevSeconds + 1);
    }, 1000));
  };

  const stop = () => {
    if (intervalId) {
      clearInterval(intervalId);
      setIntervalId(null);
    }
  };

  const reset = () => {
    stop();
    setSeconds(0);
  };

  useEffect(() => {
    return () => {
      if (intervalId) {
        clearInterval(intervalId);
      }
    };
  }, [intervalId]);

    return (
            <>
                <div className="container-sm bg-dark">
                    <div className="row">
                        <div className="col-sm">
                            <h1 className="display-1 text-white text-center bg-dark">
                                <i className="fa-regular fa-clock"></i>
                            </h1>
                        </div>
                        <div className="col-sm">
                            <h1 className="display-1 text-white text-center bg-dark">{centenamillar}</h1>
                        </div>
                        <div className="col-sm">
                            <h1 className="display-1 text-white text-center bg-dark">{decenamillar}</h1>
                        </div>
                        <div className="col-sm">
                            <h1 className="display-1 text-white text-center bg-dark">{unidadmillar}</h1>
                        </div>
                        <div className="col-sm">
                            <h1 className="display-1 text-white text-center bg-dark">{centenas}</h1>
                        </div>
                        <div className="col-sm">
                            <h1 className="display-1 text-white text-center bg-dark">{decenas}</h1>
                        </div>
                        <div className="col-sm">
                            <h1 className="display-1 text-white text-center bg-dark">{unidades}</h1>
                        </div>
                    </div>                
                </div>
                <div className="d-flex justify-content-center">
                    <button onClick={start} type="button" className="btn btn-primary btn-lg btn-block">Start</button>
                    <button onClick={stop} type="button" className="btn btn-secondary btn-lg btn-block">Stop</button>
                    <button onClick={reset} type="button" className="btn btn-danger btn-lg btn-block">Reset</button>
                </div>
            </>
  );
};

export default SecondsCounter;
