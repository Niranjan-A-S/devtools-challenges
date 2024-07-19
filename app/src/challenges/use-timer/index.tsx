import { FC, memo, useCallback } from "react";
import { useTimer } from "./use-timer";

const TOTAL_TIME = 5;

export const Timer: FC = memo(() => {

    const { isRunning, seconds, start, stop } = useTimer(TOTAL_TIME);

    const getButtonClassName = useCallback((isRunning: boolean) => `border border-gray-600 p-2 rounded-md hover:bg-black hover:text-white transition-all ${!isRunning && 'cursor-not-allowed opacity-[0.3] hover:bg-white hover:text-black'}`, [])

    return <div className="flex flex-col gap-2">
        <h3 className="text-2xl">{(isRunning && seconds >= 1) ? seconds : 'No timer running'}</h3>
        <div className="flex gap-2">
            <button
                onClick={start}
                className={getButtonClassName(!isRunning)}
            >
                Start Timer
            </button>
            <button
                onClick={stop}
                className={getButtonClassName(isRunning)}
                disabled={!isRunning}
            >
                Stop Timer
            </button>
        </div>
    </div>
})