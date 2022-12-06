import React, { useState, useEffect } from "react";
import {SideBar} from '../components/sidebar'
import { useHistory } from 'react-router-dom';
import { ProductGetSales } from "../api/product";
import { Button, Dropdown, Space, Card } from 'antd';
import { ChevronDownIcon } from "@radix-ui/react-icons";
const { Meta } = Card;

  

export function Products() {
    // initial state
    const [products, setProducts] = useState([])
    const [orderby, setOrderby] = useState()
    const [orderFlow, setOrderFlow] = useState('desc')

    const items = [
        {
          key: '1',
          label: (
            <span onClick={()=>{ setOrderby('invoice'); setOrderFlow('desc')}}>Faturamento</span>
          ),
        },
        {
          key: '2',
          label: (
            <span onClick={()=>{ setOrderby('totalSale'); setOrderFlow('desc')}}>Numero de vendas</span>
          ),
        },
        {
          key: '3',
          label: (
            <span onClick={()=>{ setOrderby('name'); setOrderFlow('asc')}}>Ordem alfabeitca</span>
          ),
        },
    ];

    useEffect(() => {
        getProducts()
    }, []);

    useEffect(() => {
        getProducts(orderby, orderFlow)
    }, [orderby, orderFlow]);

    const getProducts = (orderby, orderFlow) => { ProductGetSales(orderby, orderFlow).then(response => {setProducts(response.result)}) }
   
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
           
         
        <div className="col-span-6 row-span-1">
            <Card style={{ width: "80vw" }} loading={products.length === 0}>
                <Space>
                    <Space wrap>
                    <Dropdown
                        menu={{
                        items,
                        }}
                        placement="bottomLeft"
                    >
                        <Space>{orderby ?? 'Ordenar'} <ChevronDownIcon/></Space>
                    </Dropdown>
                    </Space>
                </Space>
            </Card>
        </div>
        <div className="col-span-6 row-span-4  grid grid-cols-6 grid-rows-2 gap-4">
          {products && products.map( (el,i) => {
            return(
              <div key={i} className="col-span-1 row-span-1">
              <Card
              hoverable
              style={{ width: '13vw' }}
              cover={<img alt="example" src={el.img_url} />}
              >
                <p className="font-bold">{el.name.substring(0,20)}</p><br/>
                <p>Total de Vendas: {el.totalsale}</p>
                <p>Preço Médio: {formatter.format(el.price)}</p>
                <p>Faturamento: <strong>{formatter.format(el.invoice)}</strong></p>
              </Card>
              </div>
            )
          })}
        </div>
      </div>
    );
}