import React, { useMemo } from "react";
import classnames from "classnames";
import Text from "components/block/Text";

import style from "./Paragraph.module.scss";
const cx = classnames.bind(style);
const TextWrapper = ({ type, children, ...rest }) => {
    switch (type) {
        // case "title":
        case "header":
        case "heading_1":
            return <h1 {...rest}>{children}</h1>;
        case "sub_header":
        case "heading_2":
            return <h2 {...rest}>{children}</h2>;
        case "sub_sub_header":
        case "heading_3":
            return <h3 {...rest}>{children}</h3>;
        default:
            return <p {...rest}>{children}</p>;
    }
};

const Paragraph = ({ items, type, className }) => {
    if (!items?.length) return null;
    return (
        <TextWrapper
            type={type}
            className={cx(`paragraph`, style.paragraph, className)}
        >
            {items.map((item, itemIndex) => (
                <Text data={item} key={itemIndex} />
            ))}
        </TextWrapper>
    );
};

export default Paragraph;
