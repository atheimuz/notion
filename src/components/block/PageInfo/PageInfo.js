import React, { useMemo } from "react";
import Property from "components/block/Property";

import style from "./PageInfo.module.scss";

const PageInfo = ({ data }) => {
    const coverImg = useMemo(() => data.cover?.[data.cover?.type].url, [data]);
    // console.log(data);
    if (!data?.id) return null;
    return (
        <div className={style.pageInfo}>
            {coverImg && (
                <div
                    className={style.backgroundImg}
                    style={{
                        backgroundImage: `url(${coverImg})`,
                    }}
                />
            )}
            <div className={style.textArea}>
                {data.icon && (
                    <span className={style.icon}>
                        {data.icon?.[data.icon?.type]}
                    </span>
                )}
                {Object.keys(data.properties).map((key) => {
                    const item = data.properties[key];
                    if (item.type === "title") {
                        item.type = "header";
                        item.header = item.title;
                    }

                    return (
                        <Property
                            data={item}
                            key={key}
                            className={`${style.property} ${style[item.type]}`}
                        />
                    );
                })}
            </div>
        </div>
    );
};

export default PageInfo;
