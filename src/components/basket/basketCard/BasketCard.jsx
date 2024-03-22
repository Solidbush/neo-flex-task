import React from 'react';
import {observer} from "mobx-react";
import plus from "../../../assets/svg/plus.svg"
import minus from "../../../assets/svg/minus.svg"
import removeIcon from "../../../assets/svg/remove.svg"
import style from "./BasketCard.module.css"
import {useProductContext} from "../../../index";

const BasketCard = observer(({basketItem}) => {
    const {basket} = useProductContext();
    const add = () => {
        basket.addDevice(basketItem.device)
    }
    const reduce = () => {
        basket.reduceDevice(basketItem.device)
    }

    const remove = () => {
        basket.removeDevice(basketItem);
        alert(basketItem.device.title)
    }

    return (
        <div className={style.card}>
            <div className={style.image}>
                <img src={basketItem.device.img} alt="Товар"/>
            </div>
            <button className={style.remove} onClick={remove}>
                <img src={removeIcon} alt="Remove"/>
            </button>
            <div className={style.name}>
                <b>{basketItem.device.title}</b>
            </div>
            <div className={style.price}>
                {`${basketItem.device.price} ₽`}
            </div>
            <button onClick={add} className={style.plus}>
                <img src={plus} alt="Plus"/>
            </button>
            <div className={style.count}>
                {basketItem.count}
            </div>
            <button className={style.mines} onClick={reduce}>
                <img src={minus} alt="Mines"/>
            </button>
            <div className={style.final_price}>
                {
                    `${basketItem.count * basketItem.device.price} Р`
                }
            </div>
        </div>
    );
});

export default BasketCard;