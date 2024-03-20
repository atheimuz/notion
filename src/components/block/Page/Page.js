import React, { useMemo } from "react";
import { Link } from "react-router-dom";
import classnames from "classnames";
import Property from "components/block/Property";

import style from "./Page.module.scss";
import Paragraph from "../Paragraph/Paragraph";
const cx = classnames.bind(style);

// const Page = ({ data, propertyObj }) => {
//     const properties = useMemo(() => ({ ...data, id: undefined }), [data]);
//     if (!data.id) return null;
//     return (
//         <div className={style.wrapper}>
//             {data.cover?.type && (
//                 <div
//                     style={{
//                         backgroundImage: `url(${
//                             data.cover[data.cover.type].url
//                         })`,
//                     }}
//                     className={style.cover}
//                     alt="커버이미지"
//                 />
//             )}
//             {properties && (
//                 <div className={style.propertyItems}>
//                     {Object.keys(properties).map((key) => {
//                         const propertyInfo = { ...propertyObj[key] };
//                         const item = properties[key];

//                         if (propertyInfo?.options) {
//                             const propertyOptions = {};
//                             propertyInfo.options.forEach((option) => {
//                                 propertyOptions[option.value] = option.color;
//                             });
//                             propertyInfo.options = propertyOptions;
//                         }

//                         return (
//                             <Property
//                                 data={item}
//                                 propertyInfo={propertyInfo}
//                                 key={key}
//                                 className={style.property}
//                             />
//                         );
//                     })}
//                 </div>
//             )}
//         </div>
//     );
// };

const Page = ({ data, view }) => {
    if (!data.id) return null;
    console.log(data);
    // console.log(data.properties);
    return (
        <Link
            className={cx(style.wrapper, style[view])}
            to={`/page/${data.id}`}
        >
            <div className={style.background} />
            {data.properties && (
                <div className={style.propertyItems}>
                    {data.cover?.type && (
                        <div className={style.coverArea}>
                            <img
                                className={style.cover}
                                src={data.cover[data.cover.type].url}
                                alt="커버이미지"
                            />
                        </div>
                    )}
                    {Object.keys(data.properties).map((key) => {
                        const item = data.properties[key];

                        return (
                            <Property
                                data={item}
                                key={key}
                                className={`${style.property} ${
                                    style[item.type]
                                }`}
                            />
                        );
                    })}
                </div>
            )}
        </Link>
    );
};

export default Page;
