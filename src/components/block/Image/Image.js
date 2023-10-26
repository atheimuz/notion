import React, { useMemo } from "react";
import classnames from "classnames";
import { returnImgUrl } from "utils/utils";
import Caption from "components/block/Caption";

import style from "./Image.module.scss";

// type: ["text", "link"]
const ImageWrapper = ({ data, captionLink, children }) => {
    const type = useMemo(
        () => (!!captionLink ? "link" : "text"),
        [captionLink]
    );
    const captionText = useMemo(
        () => data.properties?.caption?.[0]?.[0],
        [data]
    );

    return (
        <div
            className={cx(style.wrapper, [
                style[data.format.block_alignment || "center"],
            ])}
        >
            {type === "link" ? (
                <a
                    className={style.inner}
                    style={{
                        width: `${
                            data.format?.block_page_width
                                ? "100%"
                                : `${data.format.block_width}px`
                        }`,
                    }}
                    href={captionLink}
                    target="_blank"
                    rel="noreferrer"
                    disabled={!captionLink}
                >
                    {children}
                </a>
            ) : (
                <div
                    className={style.inner}
                    style={{
                        width: `${
                            data.format?.block_page_width
                                ? 100
                                : 100 / (800 / data.format.block_width)
                        }%`,
                    }}
                >
                    {children}
                    <Caption>{captionText}</Caption>
                </div>
            )}
        </div>
    );
};

const cx = classnames.bind(style);
const Image = ({ data }) => {
    const captionLink = useMemo(
        () =>
            data.properties?.caption?.[0]?.[1]?.[0]?.[0] === "a"
                ? data.properties?.caption?.[0]?.[1]?.[0]?.[1]
                : null,
        [data]
    );
    if (!data?.properties?.source?.[0]?.[0]) return null;
    return (
        <ImageWrapper captionLink={captionLink} data={data}>
            <img
                className={style.image}
                src={returnImgUrl(data.properties.source[0][0], data)}
            />
        </ImageWrapper>
    );
};

export default Image;
