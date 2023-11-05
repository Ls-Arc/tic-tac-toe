export function Table({children,upclass}) { 
    return(
        <section className={upclass}>
            {children}
        </section>
    )
}