import React from "react";
import classnames from "classnames";
import Paragraph from "components/block/Paragraph";
import Caption from "components/block/Caption";

import style from "./Code.module.scss";
import colorStyle from "components/common/Color.module.scss";
const cx = classnames.bind(style, colorStyle);

const Code = ({ data }) => {
    if (!data?.id) return null;
    return (
        <div className={style.wrapper}>
            <code
                className={cx(style.code, colorStyle[data.format?.block_color])}
            >
                <Paragraph items={data.properties?.title} />
            </code>
            <Caption>{data.properties?.caption}</Caption>
        </div>
    );
};

export default Code;
