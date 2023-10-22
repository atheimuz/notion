import React from "react";
import classnames from "classnames";
import Paragraph from "components/block/Paragraph";

import style from "./Quote.module.scss";
import colorStyle from "components/common/Color.module.scss";
const cx = classnames.bind(style, colorStyle);

const Quote = ({ data }) => {
    if (!data?.id) return null;
    return (
        <blockquote
            className={cx(style.quote, colorStyle[data.format?.block_color])}
        >
            <div className={style.textArea}>
                <Paragraph items={data.properties.title} />
            </div>
        </blockquote>
    );
};

export default Quote;
