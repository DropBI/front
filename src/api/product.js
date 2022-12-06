import axios from 'axios';
import Cookies from "universal-cookie";
const cookies = new Cookies();


export async function ProductList() {
    const token = cookies.get("TOKEN");
    const { data } = await axios.get(
        '/product/list',
        {
        headers: {
            'Content-Type': 'application/json',
            Accept: 'application/json',
            'x-access-token':token
        },
        },
    );
    return data;
}

export async function ProductGet(id) {
    const token = cookies.get("TOKEN");
    const { data } = await axios.get(
        '/product/get/' + id,
        {
        headers: {
            'Content-Type': 'application/json',
            Accept: 'application/json',
            'x-access-token':token
        },
        },
    );
    return data;
}

export async function ProductGetSales(order = 'invoice',orderFlow = 'desc') {
    const token = cookies.get("TOKEN");
    const { data } = await axios.post(
        '/product/sales',
        {order,orderFlow},
        {
        headers: {
            'Content-Type': 'application/json',
            Accept: 'application/json',
            'x-access-token':token
        },
        },
    );
    return data;
}

export async function ProductGetJson(url) {
    const { data } = await axios.get(
        url,
        {
        headers: {
            'Content-Type': 'application/json',
            Accept: 'application/json',
        },
        },
    );
    return data;
}



