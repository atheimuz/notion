import React from "react";
import classnames from "classnames";

import style from "./Divider.module.scss";
const cx = classnames.bind(style);

const Divider = () => {
    return <hr className={style.divider} />;
};

export default Divider;
