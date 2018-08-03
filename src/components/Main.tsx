import * as React from "react"

export interface AppProps {
    name?: string
    LevelNum?: number
    onIncrement?: () => void
    onDecrement?: () => void
}

export default function Main({name, LevelNum = 1, onIncrement, onDecrement }: AppProps) {
    return (
        <div>
            <div>
                <h2>{ getExclamationMarks(LevelNum) }</h2>
            </div>
            <div>
                <button onClick={onDecrement}> 减少 </button>
                <button onClick={onIncrement}> 增加 </button>
            </div>
        </div>
    )
}


function getExclamationMarks(numChars: number) {
    return Array(numChars + 1).join('1');
}
