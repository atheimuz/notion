import React, { useMemo } from "react";
import classnames from "classnames";

import style from "./Text.module.scss";
import colorStyle from "components/common/Color.module.scss";
const cx = classnames.bind(style, colorStyle);

const Text = ({ data }) => {
    const annotations = useMemo(() => data.annotations || {}, [data]);
    const property = useMemo(() => {
        const newProperty = {};

        if (data?.length > 0) {
            data.forEach((item, index) => {
                if (index === 0) {
                    newProperty.text = item;
                } else {
                    item.forEach((sub) => {
                        newProperty[sub[0]] = sub[1] || true;
                    });
                }
            });
        }
        return newProperty;
    }, [data]);

    const commonClassName = cx(style.text, colorStyle[property.h], {
        [style.bold]: property.b || annotations.bold,
        [style.code]: property.c || annotations.code,
        [style.italic]: property.i || annotations.italic,
        [style.strikethrough]: property.s || annotations.strikethrough,
        [style.underline]: property._ || annotations.underline,
    });

    if (!data.length && !data.type) return null;

    if (property.a) {
        return (
            <a className={commonClassName} href={property.a}>
                {property.text || data.text?.content}
            </a>
        );
    }

    return (
        <span className={commonClassName}>
            {property.text || data.text?.content}
        </span>
    );
};

export default Text;
