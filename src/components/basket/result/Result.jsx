import React, {useContext} from 'react';
import {observer} from "mobx-react";
import {Context} from "../../../index";
import style from "./Result.module.css"
const Result = observer((props) => {
    const {basket} = useContext(Context)
    const removeAll = () => {
        alert("Заказ успешно оформлен")
        basket.removeAllDevices();
    }
    const fullPrice = () => {
        let temp_price = basket.fullPrice;
        if (temp_price) {
            return temp_price;
        }
        return 0;
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
                    ₽ {fullPrice()}
                </b>
            </div>
            <button className={style.confirm} onClick={removeAll}>
                Перейти к оформлению
            </button>
        </div>
    );
});

export default Result;