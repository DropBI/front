import React, { useState } from "react";
import {SideBar} from '../components/sidebar'
import { useHistory } from 'react-router-dom';
import { StoreCreate } from '../api/store'

export function Store() {
    const history = useHistory();
    const [name, setName] = useState()
    const [url, setUrl] = useState()

    
    const handleSubmit = (e) => {
        // prevent the form from refreshing the whole page
        e.preventDefault();

        StoreCreate(name,url)
        .then((result) => {
            // set the cookie
            history.push('/stores');
        })
    };

    return (
        <div className="flex">
            <SideBar />
            <div className="h-screen flex-1 flex-col p-7">
                <h1 className="text-2xl font-semibold ">Cadastrar Loja</h1>
                <hr/>
                <br/>
                <form onSubmit={(e) => handleSubmit(e)}>
                    <input
                        type="Name"
                        name="Name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        placeholder="Nome da Loja"
                    />

                    <input
                        type="url"
                        name="url"
                        value={url}
                        onChange={(e) => setUrl(e.target.value)}
                        placeholder="Site"
                    />

                    {/* submit button */}
                    <button
                    type="submit"
                    onClick={(e) => handleSubmit(e)}
                    >
                    Enter
                    </button>

                </form>
            </div>
        </div>
    );
}