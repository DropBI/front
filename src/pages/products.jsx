import React, { useState, useEffect } from "react";
import {SideBar} from '../components/sidebar'
import { useHistory } from 'react-router-dom';
import { ProductList } from "../api/product";

export function Products() {
    const history = useHistory();
    // initial state
    const [products, setProducts] = useState([])

    useEffect(() => {
        getProducts()
    }, []);

    const getProducts = () => { ProductList().then(response => {setProducts(response.data)}) }

    return (
        <div className="flex">
        <SideBar />
        <div className="h-screen flex-1 p-7">
            <div className="h-10 m-0 px-1">
                <h1 className="text-2xl font-semibold ">Produtos</h1>
            </div>
            <hr/>
            <br/>
            <div className="">
                {products && products.map((el,i) => {
                    console.log("el",el)
                    return (
                        <div key={i} className={"m-3 border-2 cursor-pointer"} onClick={()=>history.push('/product/'+el.id)} >
                            <p>{el.id} {el.name} {el.price} {el.url}</p>
                        </div>
                    )
                })}
            </div>
        </div>
    </div>
    );
}