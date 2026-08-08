import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  products: [
    {
      id: 1,
      title: "iPhone 15 Pro",
      price: 999,
      category: "Mobile",
      image: "https://via.placeholder.com/200?text=iPhone+15+Pro",
      description: "Apple iPhone 15 Pro with A17 Pro chip.",
      stock: 10,
    },
    {
      id: 2,
      title: "Samsung Galaxy S24",
      price: 899,
      category: "Mobile",
      image: "https://via.placeholder.com/200?text=Samsung+S24",
      description: "Samsung flagship smartphone.",
      stock: 15,
    },
    {
      id: 3,
      title: "MacBook Air M3",
      price: 1299,
      category: "Laptop",
      image: "https://via.placeholder.com/200?text=MacBook+Air+M3",
      description: "Apple MacBook Air with M3 chip.",
      stock: 8,
    },
    {
      id: 4,
      title: "Dell XPS 13",
      price: 1199,
      category: "Laptop",
      image: "https://via.placeholder.com/200?text=Dell+XPS+13",
      description: "Dell premium ultrabook.",
      stock: 6,
    },
    {
      id: 5,
      title: "Sony WH-1000XM5",
      price: 399,
      category: "Headphones",
      image: "https://via.placeholder.com/200?text=Sony+XM5",
      description: "Noise cancelling wireless headphones.",
      stock: 20,
    },
    {
      id: 6,
      title: "Apple Watch Series 9",
      price: 499,
      category: "Smart Watch",
      image: "https://via.placeholder.com/200?text=Apple+Watch+S9",
      description: "Smart watch with health tracking.",
      stock: 12,
    },
  ],
};

const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {},
});

export default productsSlice.reducer;