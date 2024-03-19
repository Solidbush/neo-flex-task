import React, {useContext} from 'react';
import Category from "../components/category/Category";
import {Context} from "../index";

const MainPage = () => {
    const {shop} = useContext(Context)

    return (
        <div>
            <Category
                name={"Наушники"}
                devices={shop.headphones}
            />
            <Category
                name={"Беспроводные наушники"}
                devices={shop.wirelessHeadphones}
            />
        </div>
    );
};

export default MainPage;