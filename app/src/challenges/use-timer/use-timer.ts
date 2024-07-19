import { useCallback, useMemo, useRef, useState } from "react"

export const useTimer = (totalTime: number) => {

    const [isRunning, setIsRunning] = useState<boolean>(false);
    const [seconds, setSeconds] = useState<number>(totalTime);

    const intervalRef = useRef<NodeJS.Timeout | null>(null);

    const start = useCallback(() => {
        if (intervalRef.current !== null) return;

        setIsRunning(true);
        intervalRef.current = setInterval(() => {
            setSeconds(prev => {
                if (prev === 1) {
                    intervalRef.current && clearInterval(intervalRef.current);
                    intervalRef.current = null;
                    setIsRunning(false);
                    setSeconds(totalTime);
                }
                return prev - 1
            });
        }, 1000)
    }, [totalTime]);

    const stop = useCallback(() => {
        if (intervalRef.current && isRunning) {
            clearInterval(intervalRef.current);
            intervalRef.current = null;
            setIsRunning(false);
            setSeconds(totalTime);
        }
    }, [isRunning, totalTime]);

    return useMemo(() => ({
        isRunning,
        seconds,
        start,
        stop
    }), [isRunning, seconds, start, stop]);
}