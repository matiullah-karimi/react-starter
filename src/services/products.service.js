export const getProducts = async () => {
    const rawData = await fetch('https://fakestoreapi.com/products');

    return await rawData.json();
}