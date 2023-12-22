import React, { useMemo } from "react";
import Paragraph from "components/block/Paragraph";
import Tag from "components/block/Tag";

import style from "./Property.module.scss";

const Property = ({ data, className }) => {
    const value = useMemo(() => data?.[data?.type], [data]);

    if (!value || !value?.length) return null;
    if (["title", "header", "select", "multi_select"].indexOf(data.type) === -1)
        return null;
    return (
        <div className={`${style.wrapper} ${style[data.type]} ${className}`}>
            {(() => {
                switch (data.type) {
                    case "header":
                    case "title":
                        return <Paragraph items={value} type={data.type} />;
                    case "select":
                        return <Tag data={value} />;
                    case "multi_select":
                        return value.map((item) => <Tag data={item} />);
                    default:
                        return null;
                }
            })()}
        </div>
    );
};

// const Property = ({ data, propertyInfo, className }) => {
//     const value = useMemo(() => data?.[0], [data]);
//     if (!value) return null;
//     if (["title", "select", "multi_select"].indexOf(propertyInfo?.type) === -1)
//         return null;

//     return (
//         <div
//             className={`${style.wrapper} ${
//                 style[propertyInfo.type]
//             } ${className}`}
//         >
//             {(() => {
//                 switch (propertyInfo.type) {
//                     case "title":
//                         return <Paragraph items={[value]} />;
//                     case "select":
//                         return <Tag data={value[0]} />;
//                     case "multi_select":
//                         return value[0]
//                             .split(",")
//                             .map((item) => (
//                                 <Tag
//                                     text={item}
//                                     options={propertyInfo.options}
//                                 />
//                             ));
//                     default:
//                         return null;
//                 }
//             })()}
//         </div>
//     );
// };

export default Property;
