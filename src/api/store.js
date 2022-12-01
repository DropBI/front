import axios from 'axios';
import Cookies from "universal-cookie";
const cookies = new Cookies();


export async function StoreList() {
    const token = cookies.get("TOKEN");
    const { data } = await axios.get(
        '/store/list',
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


