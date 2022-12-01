import { BrowserRouter, Route } from 'react-router-dom';
import ProtectedRoutes from "./middleware/ProtectedRoutes";

import { Login } from './pages/login'
import { Dashboard } from './pages/dashboard'
import { Stores } from './pages/stores'
import { Store } from './pages/store'
import { Products } from './pages/products'
import { Product } from './pages/product'

export const Router = () => {
    return (
        <BrowserRouter>
            <Route path="/login" component={Login} />

            <ProtectedRoutes exact path="/dashboard" component={Dashboard} />
            <ProtectedRoutes exact path="/stores" component={Stores} />
            <ProtectedRoutes exact path="/store" component={Store} />
            <ProtectedRoutes exact path="/products" component={Products} />
            <ProtectedRoutes exact path="/product/:id" component={Product} />

        </BrowserRouter>
    );
}