import React from "react";
import styles from './Cell.module.css';

//пошел на этот хак со стилями просто не найдя другого решения, ради скорости.
const stylesArray: string[] = [
    styles.b1,
    styles.b2,
]

// инлайном стили задал, поскольку лучше выхода не нашел, перепробовал более техничные подходы но не подошли.
const Cell: React.ElementType = (props: Record<string, string | number>) => {
    return(
        <>
            <div className="cell">
                <div className={stylesArray[1]} style={{width: "200px", height: "250px", backgroundSize: "cover"}}></div>
            </div>
        </>
    )
};

export default Cell;
