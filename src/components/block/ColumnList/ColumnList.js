import React from "react";
import BlockItem from "components/block/BlockItem";

import style from "./ColumnList.module.scss";

const ColumnList = ({ columns }) => {
    if (!columns.length) return null;
    return (
        <div className={style.columnList}>
            {columns.map((column, columnIndex) => (
                <div
                    className={style.column}
                    key={columnIndex}
                    style={{
                        maxWidth: `${column.format?.column_ratio * 100}%`,
                    }}
                >
                    {column.content.map((block) => (
                        <BlockItem data={block} key={block.id} />
                    ))}
                </div>
            ))}
        </div>
    );
};

export default ColumnList;
