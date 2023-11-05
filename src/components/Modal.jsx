export function Modal ({children, isWinner, winner}){
    const className = 'winner' 
    return (
        <section className={className}>
            <div className="text">
            <h2>
            {
            winner === false
            ?'Empate'
            : 'El ganador es'
            }
            </h2>
                {children}
            </div>
        </section>
    )
}