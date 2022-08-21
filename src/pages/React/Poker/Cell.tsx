import React, { useState } from "react";
import cardMap from "./CardMap";

//пошел на этот хак со стилями просто не найдя другого решения, ради скорости.

// инлайном стили задал, поскольку лучше выхода не нашел, перепробовал более техничные подходы но не подошли.
const Cell: React.ElementType = (props: Record<string, string | number>) => {
  return (
    <>
      <div
        className={cardMap.get(props.cardName.toString())}
        style={{
          width: "200px",
          height: "250px",
          backgroundSize: "cover",
          flex: "1 1 auto",
          margin: "0 5px",
        }}
      ></div>
    </>
  );
};

export default Cell;
