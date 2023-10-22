import React from "react";
import classnames from "classnames";
import Paragraph from "components/block/Paragraph";

import style from "./Callout.module.scss";
import colorStyle from "components/common/Color.module.scss";
const cx = classnames.bind(style, colorStyle);

const Callout = ({ data }) => {
    if (!data?.id) return null;
    return (
        <div
            className={cx(style.callout, colorStyle[data.format?.block_color])}
        >
            {data.format?.page_icon && (
                <span className={style.icon}>{data.format?.page_icon}</span>
            )}
            <div className={style.textArea}>
                <Paragraph items={data.properties?.title} />
            </div>
        </div>
    );
};

export default Callout;
