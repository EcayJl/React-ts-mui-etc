import React from "react";
import Cell from "./Cell"


const PokerPage: React.FC = () => {
    return(
        <>
            <div className="poker-container">
                <Cell imgSrc={'../../../../static/cards/b/1.jpg'}/>
            </div>
        </>
    )
};

export default PokerPage;
