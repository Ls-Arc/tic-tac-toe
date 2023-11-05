export function Buttonreset({children, resetGame,setBoard,setWinner}){
    const resetGameclick = ()=> {
        resetGame(setBoard,setWinner)
    }
    return (
        <button onClick={resetGameclick}>{children}</button>
    )
}