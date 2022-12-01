import React, { useState, useEffect } from "react";
import {SideBar} from '../components/sidebar'
import { useHistory } from 'react-router-dom';
import { StoreList } from "../api/store";

export function Stores() {
    const history = useHistory();
    const [stores, setStores] = useState([])

    useEffect(() => {
        getStores()
    }, []);

    const getStores = () => { StoreList().then(response => {setStores(response.data)}) }


    return (
        <div className="flex">
            <SideBar />
            <div className="h-screen flex-1 flex-col p-7">
                <h1 className="text-2xl font-semibold ">Lojas</h1>
                <hr/>
                <br/>
                <button className="border-2" onClick={()=>history.push('store')}> Cadastrar Loja </button>
                <div className="">
                    {stores && stores.map((el,i) => {
                        console.log("el",el)
                        return (
                            <div key={i}>
                            <p>{el.id} {el.name} {el.url}</p>
                            </div>
                        )
                    })}
                </div>
            </div>
        </div>
    );
}