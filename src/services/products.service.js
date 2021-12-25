export const getProducts = async () => {
    const rawData = await fetch('https://fakestoreapi.com/products');

    return await rawData.json();
}

export const getProduct = async (id) => {
    const rawData = await fetch('https://fakestoreapi.com/products/' + id);

    return await rawData.json();
}