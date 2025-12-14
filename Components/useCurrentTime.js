import {useState, useEffect} from "react";

const useCurrentTime = (T = 1000) => {
    const [currentDateTime, setCurrentDateTime] = useState(() => new Date());

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentDateTime(new Date());
        }, T);

        return () => clearInterval(timer);
    }, [T]);

    return currentDateTime;
        };

export default useCurrentTime;


// import { useEffect, useState } from 'react';

// export default function useCurrentTime(intervalMs = 1000) {
//   const [now, setNow] = useState(() => new Date());

//   useEffect(() => {
//     const id = setInterval(() => {
//       setNow(new Date());
//     }, intervalMs);

//     // Cleanup: stop the interval when the component using this hook unmounts
//     return () => clearInterval(id);
//   }, [intervalMs]);

//   return now;
// }
