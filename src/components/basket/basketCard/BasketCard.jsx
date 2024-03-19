import React, {useContext} from 'react';
import {observer} from "mobx-react";
import plus from "../../../assets/svg/plus.svg"
import minus from "../../../assets/svg/minus.svg"
import removeIcon from "../../../assets/svg/remove.svg"
import style from "./BasketCard.module.css"
import {Context} from "../../../index";

const BasketCard = observer((props) => {
    const {basket} = useContext(Context);
    const add = () => {
        basket.addDevice(props.device.device)
    }
    const reduce = () => {
        basket.reduceDevice(props.device.device)
    }

    const remove = () => {
        basket.removeDevice(props.device);
        alert(props.device.device.title)
    }

    return (
        <div className={style.card}>
            <div className={style.image}>
                <img src={props.device.device.img} alt="Товар"/>
            </div>
            <button className={style.remove} onClick={remove}>
                <img src={removeIcon} alt="Remove"/>
            </button>
            <div className={style.name}>
                <b>{props.device.device.title}</b>
            </div>
            <div className={style.price}>
                {`${props.device.device.price} ₽`}
            </div>
            <button onClick={add} className={style.plus}>
                <img src={plus} alt="Plus"/>
            </button>
            <div className={style.count}>
                {props.device.count}
            </div>
            <button className={style.mines} onClick={reduce}>
                <img src={minus} alt="Mines"/>
            </button>
            <div className={style.final_price}>
                {
                    `${props.device.count * props.device.device.price} Р`
                }
            </div>
        </div>
    );
});

export default BasketCard;