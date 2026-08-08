import React from 'react'
import { useSelector, useDispatch } from 'react-redux'

import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';


const productsScreen = () => {
    const products = useSelector((state) => state.products.products);
    console.log(products);
    return (
        <>
            <main className="p-8" >
                <div className="products-grid grid grid-cols-3 gap-4">

                    {products.map((product) => (

                        <div className="product flex flex-col">
                            <img className="h-[100px] w-[100px]" src='product.image' alt="" />
                            <p>{product.title}</p>
                            <button className="bg-red-400 p-2 text-white" >Add to cart</button>
                        </div>
                    ))}
                </div>
            </main>
        </>
    )
}

export default productsScreen