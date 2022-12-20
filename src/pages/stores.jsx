import React, { useState, useEffect } from "react";
import {SideBar} from '../components/sidebar'
import { useHistory } from 'react-router-dom';
import { StoreList } from "../api/store";
import { Card } from 'antd';
const { Meta } = Card;

export function Stores() {
    const history = useHistory();
    const [stores, setStores] = useState([])

    useEffect(() => {
        getStores()
    }, []);

    const getStores = () => { StoreList().then(response => {setStores(response.data)}) }


    return (
        <div className="grid grid-flow-row grid-cols-7 grid-rows-6 gap-1 h-screen">
        <SideBar className="col-span-1 row-span-6" />
        <header className="col-start-2 col-span-6 row-span-1">
          <h1 className="text-2xl font-semibold ">Produtos</h1>
        </header>
           
         
        <div className="col-span-6 row-span-1">
            <Card style={{ width: "80vw" }} loading={stores.length === 0}>
            <Meta
                title="Lojas Cadastradas"
                description={stores.length}
            />
             <button className="border-2" onClick={()=>history.push('store')}> Cadastrar Loja </button>
            </Card>
        </div>
        <div className="col-span-6 row-span-4 grid grid-cols-6 gap-4">
          {stores && stores.map( (el,i) => {
            return(
              <div key={i} className="col-span-1 row-span-1">
              <Card
              hoverable
              style={{ width: '13vw' }}
              cover={
                <img 
                  // src={el.img_url} 
                  src="https://d26eb5y2jukpbz.cloudfront.net/ebs/archive/2019/large/DEN19_078_1.jpg" 
                  alt="img"
                />
              }
              >
                <p className="font-bold">{el.name.substring(0,20)}</p><br/>
                <p>{el.url}</p>
              </Card>
              </div>
            )
          })}
        </div>
      </div>
    );
}