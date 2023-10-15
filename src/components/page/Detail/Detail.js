import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import client from "lib/client";
import PageInfo from "components/block/PageInfo";
import BlockItem from "components/block/BlockItem";

import style from "./Detail.module.scss";

const Detail = () => {
    const { pageId } = useParams();
    const [blockList, setBlockList] = useState([]);
    const [blockObj, setBlockObj] = useState({});
    const [pageInfo, setPageInfo] = useState({});
    const onGetDetail = async () => {
        const { data } = await client.get(`/works/block/${pageId}`);
        // setBlockList(data);
        const newBlockObj = { ...data.blockObj };
        const pageKey = Object.keys(newBlockObj)[0];
        const pageObj = newBlockObj[pageKey]?.value;
        setBlockList(pageObj?.content || []);
        setBlockObj(newBlockObj || {});
        setPageInfo({ ...data.page });
    };

    useEffect(() => {
        if (pageId) {
            onGetDetail();
        }
    }, [pageId]);

    return (
        <div className={style.wrapper}>
            <PageInfo data={pageInfo} />
            {blockList?.map((itemKey) => {
                const item = blockObj[itemKey];
                switch (item.value.type) {
                    default:
                        return (
                            <div className={style.block} key={itemKey}>
                                <BlockItem data={item.value} />
                            </div>
                        );
                }
            })}
        </div>
    );
};

export default Detail;
