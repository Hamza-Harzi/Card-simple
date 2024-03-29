// eslint-disable-next-line import/no-anonymous-default-export
const productsArray = [{
        id: 1,
        name: "My First ",
        date: "25 April 2018",
        price: 89,
        img: "https://m.media-amazon.com/images/I/810OOg88LoL._AC_UY327_FMwebp_QL65_.jpg",
    },
    {
        id: 2,
        name: "108 Panchatantra Stories",
        date: " 1 September 2020",
        price: 98,
        img: "https://m.media-amazon.com/images/I/71rmxx8P2qL._AC_UY327_FMwebp_QL65_.jpg",
    },
    {
        id: 3,
        name: "Amazing Questions & Answers Science",
        date: "25 November 2018",
        price: 143,
        img: "https://m.media-amazon.com/images/I/81Gbz0XnW7L._AC_UY327_FMwebp_QL65_.jpg",
    },
    {
        id: 4,
        name: "My First Book of Pencil Control",
        date: "25 April 2018",
        price: 57,
        img: "https://m.media-amazon.com/images/I/81Gbz0XnW7L._AC_UY327_FMwebp_QL65_.jpg",
    },
    {
        id: 5,
        name: "My First 1000 Words",
        date: " 1 January 2018",
        price: 149,
        img: "https://m.media-amazon.com/images/I/71O-FI7QApL._AC_UY327_FMwebp_QL65_.jpg",
    },
    {
        id: 6,
        name: "101 Panchatantra Stories for Children",
        date: "30 September 2020",
        price: 135,
        img: "https://m.media-amazon.com/images/I/9173YBkMIsL._AC_UY327_FMwebp_QL65_.jpg",
    },
    {
        id: 7,
        name: "Pre-School Activities Pack ",
        date: "1 January 2021",
        price: 693,
        img: "https://m.media-amazon.com/images/I/913sv4sex3L._AC_UY327_FMwebp_QL65_.jpg",
    },
    {
        id: 8,
        name: "Early Learning Library Pack 1",
        date: "6 December 2020",
        price: 289,
        img: "https://m.media-amazon.com/images/I/71xMttNhr7L._AC_UY327_FMwebp_QL65_.jpg",
    },
    {
        id: 9,
        name: "Blossom Moral Story Book for Kids ",
        date: "7 December 2020",
        price: 80,
        img: "https://m.media-amazon.com/images/I/7122h3jWvEL._AC_UY327_FMwebp_QL65_.jpg",
    },
    {
        id: 10,
        name: "Brain Activity Book for Kids",
        date: "1 September 2021",
        price: 86,
        img: "https://m.media-amazon.com/images/I/7175YpTSa7L._AC_UY327_FMwebp_QL65_.jpg",
    },
    {
        id: 11,
        name: "Willy the Silly Panda",
        date: "14 December 2021",
        price: 120,
        img: "https://m.media-amazon.com/images/I/71-ocPGQIJL._AC_UY327_FMwebp_QL65_.jpg",
    },
    {
        id: 12,
        name: "Grandma's Bag of Stories",
        date: "1 January 2015",
        price: 157,
        img: "https://m.media-amazon.com/images/I/81jv44QdNwL._AC_UY327_FMwebp_QL65_.jpg",
    },
];

function getProductData(id) {
    let productData = productsArray.find((product) => product.id === id);

    if (productData === undefined) {
        console.log("Product data does not exist for ID: " + id);
        return undefined;
    }

    return productData;
}

export { productsArray, getProductData };