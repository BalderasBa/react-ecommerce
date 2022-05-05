export const sliderItems = [
  {
    id: 1,
    img: "https://i.ibb.co/LCZJSms/RG-B-A-1800x1800.jpg",
    title: "RG BA",
    desc: "DON'T COMPROMISE ON STYLE! GET FLAT 30% OFF FOR NEW ARRIVALS.",
    bg: "f5fafd",
  },
  {
    id: 2,
    img: "https://i.ibb.co/NpJzHCV/Origen-Sahara-Date-V2-1800x1800.jpg",
    title: "Origen Sahara V2",
    desc: "DON'T COMPROMISE ON STYLE! GET FLAT 30% OFF FOR NEW ARRIVALS.",
    bg: "fcf1ed",
  },
  {
    id: 3,
    img: "https://i.ibb.co/kSXRtWf/N200-BND2021-gray-1-1800x1800.jpg",
    title: "N200 BND 2021",
    desc: "DON'T COMPROMISE ON STYLE! GET FLAT 30% OFF FOR NEW ARRIVALS.",
    bg: "fbf0f4",
  },
];

export const categories = [
  {
    id: 1,
    img: "https://i.ibb.co/SQKhYrJ/Origen-Midnight-v2-1800x1800.jpg",
    title: "Watchs",
    cat: "watchs",
  },
  {
    id: 2,
    img: "https://i.ibb.co/Lv0qrJy/Origen-white-v2-1800x1800.jpg",
    title: "sunglasses",
    cat: "sunglasses",
  },
  {
    id: 3,
    img: "https://i.ibb.co/4fGTsQn/Oman-LEn200-0003-IMG-00191-1800x1800.jpg",
    title: "smartwatchs",
    cat: "smartwatchs",
  },
];

export const popularProducts = [
  {
    id: 1,
    img: "https://i.ibb.co/kq7K1Zj/S-G-A-1800x1800.jpg",
  },
  {
    id: 2,
    img: "https://i.ibb.co/LCZJSms/RG-B-A-1800x1800.jpg",
  },
  {
    id: 3,
    img: "https://i.ibb.co/NpJzHCV/Origen-Sahara-Date-V2-1800x1800.jpg",
  },
  {
    id: 4,
    img: "https://i.ibb.co/kSXRtWf/N200-BND2021-gray-1-1800x1800.jpg",
  },
  {
    id: 5,
    img: "https://i.ibb.co/Lv0qrJy/Origen-white-v2-1800x1800.jpg",
  },
  {
    id: 6,
    img: "https://i.ibb.co/SQKhYrJ/Origen-Midnight-v2-1800x1800.jpg",
  },
  {
    id: 7,
    img: "https://i.ibb.co/C2CnmnQ/N200-BND2021-2-1800x1800.png",
  },
  {
    id: 8,
    img: "https://i.ibb.co/MDJJMYR/Origen-Dawn-v2-1800x1800.jpg",
  },
];
//
//
//
export const users = [
  {
    id: 1,
    username: "yehya",
    email: "yehya@gmail.com",
    password: "1234",
    isAdmin: true,
    img: "https://i.ibb.co/1Rbwz5K/user.png",
  },
  {
    id: 2,
    username: "user",
    email: "user@gmail.com",
    password: "123",
    isAdmin: false,
    img: "https://i.ibb.co/1Rbwz5K/user.png",
  },
];
export const products = [
  {
    id: 1,
    title: "product 1",
    desc: "desc 1",
    img: "https://i.ibb.co/WF5tVV1/bg-2.jpg",
    categories: ["cat1", "cat2"],
    size: ["size1", "size2"],
    color: ["green", "red"],
    price: { $numberInt: "321" },
    inStock: true,
  },
  {
    id: 2,
    title: "product 2",
    desc: "desc 2",
    img: "https://i.ibb.co/WF5tVV1/bg-2.jpg",
    categories: ["cat1", "cat2"],
    size: ["size1", "size2"],
    color: ["green", "red"],
    price: { $numberInt: "321" },
    inStock: true,
  },
];
export const cart = {
  products: [
    {
      id: 1,
      title: "product 1",
      desc: "desc 1",
      img: "https://i.ibb.co/WF5tVV1/bg-2.jpg",
      size: "L",
      color: "red",
      price: 123,
      quantity: 2,
    },
    {
      id: 2,
      title: "product 2",
      desc: "desc 2",
      img: "https://i.ibb.co/WF5tVV1/bg-2.jpg",
      size: "M",
      color: "green",
      price: 321,
      quantity: 4,
    },
  ],
  total: 444,
};
