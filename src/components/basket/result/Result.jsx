import React from 'react';
import {observer} from "mobx-react";
import {useProductContext} from "../../../index";
import style from "./Result.module.css"
const Result = observer(() => {
    const {basket} = useProductContext();
    const removeAll = () => {
        alert("Заказ успешно оформлен")
        basket.removeAllDevices();
    }
    const getFullPrice = () => {
        return basket.fullPrice ?? 0;
    }

    return (
        <div className={style.result}>
            <div>
                <b>
                    ИТОГО
                </b>
            </div>
            <div>
                <b>
                    ₽ {getFullPrice()}
                </b>
            </div>
            <button className={style.confirm} onClick={removeAll}>
                Перейти к оформлению
            </button>
        </div>
    );
});

export default Result;