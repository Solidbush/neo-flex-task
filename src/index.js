import React, {createContext, useContext} from "react";
import ShopStore from "./store/ShopStore";
import BasketStore from "./store/BascketStore";
import App from "./App";
import ReactDOM from 'react-dom/client';


export const Context = createContext({shop: null, basket: null});

export const useProductContext = () => {
    return useContext(Context);
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <Context.Provider value={{
        shop: new ShopStore(),
        basket: new BasketStore()
    }}>
        <React.StrictMode>
            <App/>
        </React.StrictMode>
    </Context.Provider>
);