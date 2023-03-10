import React, { useState, useEffect } from "react";
import {SideBar} from '../components/sidebar'
import { useHistory } from 'react-router-dom';
import { StoreList } from "../api/store";
import { ProductGetSales } from "../api/product";

import { Card } from 'antd';

const { Meta } = Card;

export function Dashboard() {
  const history = useHistory();
  const[stores, setStores] = useState([])
  const[products, setProducts] = useState([])

  useEffect(() => {
    getProducts()
    getStores()
  }, []);

  const getProducts = () => { ProductGetSales().then(response => {setProducts(response.result) }) }
  const getStores = () => { StoreList().then(response => {setStores(response.data) }) }

  const formatter = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'BRL',
  
    //minimumFractionDigits: 0, // (this suffices for whole numbers, but will print 2500.10 as $2,500.1)
    //maximumFractionDigits: 0, // (causes 2500.99 to be printed as $2,501)
  });

  return (
    <div className="grid grid-flow-row grid-cols-7 grid-rows-6 gap-1 h-screen">
      <SideBar className="col-span-1 row-span-6" />
      <header className="col-start-2 col-span-6 row-span-1">
        <h1 className="text-2xl font-semibold ">Home Page</h1>
      </header>
         
      <div className="col-span-3 row-span-1">
        <Card style={{ width: "40vw" }} loading={stores.length === 0}>
          <Meta
            title="Lojas Cadastradas"
            description={stores.length}
          />
        </Card>
      </div>
      <div className="col-span-3 row-span-1">
        <Card style={{ width: "40vw" }} loading={products.length === 0}>
          <Meta
            title="Produtos cadastrados"
            description={products.length}
          />
        </Card>
      </div>
      <div className="col-span-6 row-span-4  grid grid-cols-6 grid-rows-2 gap-4">
        {products && products.map( (el,i) => {
          console.log(el)
          return(
            <div key={i} className="col-span-1 row-span-1">
            <Card
            hoverable
            style={{ width: '13vw' }}
            cover={<img alt="example" src={el.img_url} />}
            >
              <p className="font-bold">{el.name.substring(0,20)}</p><br/>
              <p>Total de Vendas: {el.totalsale}</p>
              <p>Pre??o M??dio: {formatter.format(el.price)}</p>
              <p>Faturamento: <strong>{formatter.format(el.invoice)}</strong></p>
            </Card>
            </div>
          )
        })}
      </div>
    </div>
  );
}