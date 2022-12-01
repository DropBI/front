import React, { useState, useEffect } from "react";
import {SideBar} from '../components/sidebar'
import { useHistory, useParams } from 'react-router-dom';
import { ProductGet, ProductGetJson } from "../api/product";

export function Product() {
    const history = useHistory();
    let { id } = useParams();
    // initial state
    const [product, setProduct] = useState()
    const [json, setJson] = useState()

    useEffect(() => {
        getProduct()
    }, []);

    const getProduct = () => { 
        ProductGet(id)
        .then(response => {
            setProduct(response.result)
            ProductGetJson(' https://titams.com' + response.result.url + '.json')
            .then(data =>{
                setJson(data)
                console.log(data)
            })
        }) 
    }

    return (
        <div className="flex">
        <SideBar />
        <div className="h-screen flex-1 p-7">
            <div className="h-10 m-0 px-1">
                <h1 className="text-2xl font-semibold ">Produto</h1>
            </div>
            <hr/>
            <br/>
            <div className="">
                {product && 
                <div>
                    Id: {product.id}  
                    <br/>
                    Nome: {product.name}
                    <br/>
                    Url: {product.url}  
                    <br/>
                    Preço: {product.price}  
                    <br/>
                    Store id: {product.store_id}  
                </div>
                }
                {json &&
                <div>
                    <br/><hr/><br/>
                    {JSON.stringify(json)}
                </div>
                }

            </div>
        </div>
    </div>
    );
}