import React, {useContext} from 'react';
import {observer} from "mobx-react";
import style from "./BasketList.module.css";
import BasketCard from "../basketCard/BasketCard";
import Result from "../result/Result";
import {Context} from "../../../index";


const BasketList = observer(() => {
    const {basket} = useContext(Context);
    return (
        <div className={style.page}>
            <div className={style.title}>
                <b>Корзина</b>
            </div>
            <div>
                {basket.devices.map(device => {
                    return <BasketCard device={device}/>
                })
                }
            </div>
            <div className={style.summary}>
                <Result />
            </div>
        </div>
    );
});

export default BasketList;