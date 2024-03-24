import React from "react";
import classnames from "classnames";
import Paragraph from "components/block/Paragraph";

import style from "./Table.module.scss";
import colorStyle from "components/common/Color.module.scss";

const cx = classnames.bind(style, colorStyle);
const Table = ({ rows, dataKeyArray, hasHeader }) => {
    if (!rows.length) return null;
    // console.log(rows);
    return (
        <table className={style.table}>
            <tbody>
                {rows.map((row, rowIndex) => {
                    return (
                        <tr
                            className={cx(
                                style.row,
                                colorStyle[row.format?.block_color],
                                {
                                    [style.header]: hasHeader && rowIndex === 0,
                                }
                            )}
                            key={rowIndex}
                        >
                            {dataKeyArray.map((dataKey) => {
                                const item = row.properties?.[dataKey];
                                return (
                                    <td className={style.td} key={dataKey}>
                                        <Paragraph items={item} />
                                    </td>
                                );
                            })}
                        </tr>
                    );
                })}
            </tbody>
        </table>
    );
};

export default Table;
