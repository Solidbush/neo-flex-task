import React from 'react';
import {observer} from "mobx-react";
import style from "./BasketList.module.css";
import BasketCard from "../basketCard/BasketCard";
import Result from "../result/Result";
import {useProductContext} from "../../../index";


const BasketList = observer(() => {
    const {basket} = useProductContext();
    return (
        <div>
            <div className={style.page}>
                <div className={style.column}>
                    <h2>Корзина</h2>
                    {basket.devices.map(device => {
                        return <BasketCard key={device.id} basketItem={device}/>
                    })}
                </div>
                <Result/>
            </div>
        </div>
    );
});

export default BasketList;