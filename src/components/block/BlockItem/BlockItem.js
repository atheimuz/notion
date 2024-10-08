import React from "react";
import Paragraph from "components/block/Paragraph";
import ListItem from "components/block/ListItem";
import Quote from "components/block/Quote";
import Callout from "components/block/Callout";
import Code from "components/block/Code";
import Divider from "components/block/Divider";
import Page from "components/block/Page";
import Bookmark from "components/block/Bookmark";
import Image from "components/block/Image";

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
                    case "quote":
                        return <Quote data={data} />;
                    case "callout":
                        return <Callout data={data} />;
                    case "code":
                        return <Code data={data} />;
                    case "to_do":
                    case "numbered_list":
                    case "bulleted_list":
                        return <ListItem data={data} />;
                    case "divider":
                        return <Divider />;
                    case "page":
                        return <Page data={data} />;
                    case "bookmark":
                        return <Bookmark data={data} />;
                    case "image":
                        return <Image data={data} />;
                    default:
                        return null;
                }
            })()}
        </div>
    );
};

export default BlockItem;
