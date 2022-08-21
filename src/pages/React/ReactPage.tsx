import { Typography } from "@mui/material";
import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const ReactPage: React.FunctionComponent = () => {
    return(
        <>
            <Typography variant="h2">
                <Link to="/poker">Poker machine app &#127805;</Link>
            </Typography>
        </>
    )
};

export default ReactPage;