export const returnImgUrl = (image, block) => {
    const url = new URL(
        `https://www.notion.so${
            image.startsWith("/image")
                ? image
                : `/image/${encodeURIComponent(image)}`
        }`
    );

    if (block && !image.includes("/images/page-cover/")) {
        const table =
            block.parent_table === "space" ? "block" : block.parent_table;
        url.searchParams.set("table", table);
        url.searchParams.set("id", block.id);
        url.searchParams.set("cache", "v2");
    }

    return url.toString();
};
