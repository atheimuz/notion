import React from "react";
import classnames from "classnames";

import style from "./Bookmark.module.scss";
const cx = classnames.bind(style);

const Bookmark = ({ data, view }) => {
    if (!data.id) return null;

    return (
        <a className={cx(style.bookmark)} href={data.properties?.link?.[0]}>
            <div className={style.textBox}>
                <p className={style.title}>{data.properties?.title?.[0]}</p>
                <p className={style.desc}>
                    {data.properties?.description?.[0]}
                </p>
            </div>
            <div className={style.coverWrapper}>
                <img
                    src={data.format?.bookmark_cover}
                    className={style.cover}
                />
            </div>
        </a>
    );
};

export default Bookmark;
