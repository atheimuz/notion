import React, { useMemo } from "react";
import classnames from "classnames";
import Paragraph from "components/block/Paragraph";

import style from "./ListItem.module.scss";
import colorStyle from "components/common/Color.module.scss";
const cx = classnames.bind(style, colorStyle);

const ListItem = ({ data }) => {
    const isChecked = useMemo(
        () => data.properties?.checked?.[0]?.[0] === "Yes",
        [data]
    );
    if (!data?.id) return null;
    return (
        <div
            className={cx(
                style.listItem,
                style[data.type],
                colorStyle[data.format?.block_color],
                {
                    [style.checked]: isChecked,
                }
            )}
        >
            {data.type === "to_do" && <span className={style.checkbox} />}
            {data.type === "numbered_list" && (
                <span className={style.number}>
                    {data.format?.list_start_index || 1}.
                </span>
            )}
            {data.type === "bulleted_list" && <span className={style.bullet} />}
            <div className={style.inner}>
                <Paragraph items={data.properties?.title} />
            </div>
        </div>
    );
};

export default ListItem;
