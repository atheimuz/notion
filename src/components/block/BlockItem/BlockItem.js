import React from "react";
import Paragraph from "components/block/Paragraph";

import style from "./BlockItem.module.scss";

const BlockItem = ({ data }) => {
    if (!data?.type) return null;
    return (
        <div className={style.blockItem}>
            {(() => {
                switch (data.type) {
                    case "header":
                    case "sub_header":
                    case "sub_sub_header":
                    case "text":
                        return (
                            <Paragraph
                                type={data.type}
                                items={data.properties?.title}
                            />
                        );
                    default:
                        return null;
                }
            })()}
        </div>
    );
};

export default BlockItem;
