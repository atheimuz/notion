import React from "react";

import style from "./Caption.module.scss";

const Caption = ({ children }) => {
    if (!children) return null;

    return <p className={style.caption}>{children}</p>;
};

export default Caption;
