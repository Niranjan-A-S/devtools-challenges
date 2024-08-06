import { FC, memo, useCallback, useState } from "react";
import "./index.css";

/**
 * Create the grid of squares from the 2D array where the square should be empty when value is 0
 */

const BOX_DATA = [
    [1, 1, 1],
    [1, 0, 0],
    [1, 1, 1],
];

const data = BOX_DATA.flat();

interface ISquareProps {
    value: number;
}

export const Square: FC<ISquareProps> = memo(({ value }) => {
    const [isSelected, setIsSelected] = useState(false);

    const markAsSelected = useCallback(() => {
        setIsSelected(true);
    }, []);

    return <div
        className={`square${value === 0 ? ' hidden' : ''}${isSelected ? ' selected' : ''}`}
        onClick={markAsSelected}
    />;
})

export default memo(function App() {

    const [grid, setGrid] = useState<Array<number>>(data);

    const onClick = useCallback(() => {

    }, []);

    const renderSquares = useCallback((value: number, index: number) => {
        return <Square key={index} value={value} />
    }, [])

    return <div className="grid">
        {grid.map(renderSquares)}
    </div>
})