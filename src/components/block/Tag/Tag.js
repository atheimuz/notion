import React from "react";
import classnames from "classnames";

import style from "./Tag.module.scss";
const cx = classnames.bind(style);

const Tag = ({ data, className }) => {
    if (!data.id) return null;
    return (
        <span className={cx("tag", style.tag, style[data.color], className)}>
            {data.name}
        </span>
    );
};

export default Tag;
