import React, { useEffect, useState } from "react";
import client from "lib/client";
import Paragraph from "components/block/Paragraph";
import Page from "components/block/Page";

import style from "./Database.module.scss";

const Database = ({ data }) => {
    const [propertyObj, setPropertyObj] = useState({});
    // const [pageInfo, setPageInfo] = useState({});
    const [blockList, setBlockList] = useState([]);
    const onGetDatabase = async () => {
        const res = await client.get(`/works/database/${data.value.id}`);
        // setPageInfo(res.data.page);
        setBlockList(res.data);
    };

    useEffect(() => {
        if (data?.value?.id) {
            onGetDatabase();
        }
    }, [data]);

    useEffect(() => {
        if (data?.collection?.schema) {
            const newPropertyObj = {};
            Object.keys(data.collection.schema).forEach((key) => {
                const property = data.collection.schema[key];
                newPropertyObj[property.name] = { ...property };
            });
            setPropertyObj(newPropertyObj);
        }
    }, []);
    // console.log(data.collection.data, blockList);
    if (!data.collection) return null;
    return (
        <div className={style.wrapper}>
            <Paragraph items={data.collection.title} className={style.title} />
            <div className={style.pageList}>
                {/* {data.collection.data.map((item) => (
                    <Page data={item} key={item.id} propertyObj={propertyObj} />
                ))} */}
                {blockList.map((item) => (
                    <Page
                        data={item}
                        key={item.id}
                        propertyObj={propertyObj}
                        view={data.collection?.types?.[0]?.type}
                    />
                ))}
            </div>
        </div>
    );
};

export default Database;
