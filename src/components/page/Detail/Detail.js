import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import client from "lib/client";
import PageInfo from "components/block/PageInfo";
import Database from "components/block/Database";
import ColumnList from "components/block/ColumnList";
import Table from "components/block/Table";
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
                    case "collection_view":
                        return <Database data={item} />;
                    case "column_list":
                        return (
                            <div className={style.block} key={itemKey}>
                                <ColumnList
                                    data={item.value}
                                    columns={item.value.content.map(
                                        (columnKey) => {
                                            const obj = {
                                                ...blockObj[columnKey]?.value,
                                            };
                                            obj.content = obj.content.map(
                                                (contentKey) => {
                                                    return blockObj[contentKey]
                                                        ?.value;
                                                }
                                            );
                                            return obj;
                                        }
                                    )}
                                />
                            </div>
                        );
                    case "table":
                        return (
                            <div className={style.block} key={itemKey}>
                                <Table
                                    data={item.value}
                                    rows={item.value.content.map((rowKey) => {
                                        return blockObj[rowKey]?.value;
                                    })}
                                    hasHeader={
                                        item.value.format
                                            ?.table_block_column_header
                                    }
                                    dataKeyArray={
                                        item.value.format
                                            ?.table_block_column_order
                                    }
                                />
                            </div>
                        );
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
