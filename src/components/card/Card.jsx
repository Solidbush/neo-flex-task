import React from 'react';
import {ReactComponent as Star} from '../../assets/svg/star.svg'
import {observer} from "mobx-react";
import style from "./Card.module.css"
import {useProductContext} from "../../index";

const Card = observer(({device}) => {
    const {basket} = useProductContext();
    const addDevice = () => {
        basket.addDevice(device)
    }

    const removeDevice = () => {
        basket.removeDevice(device);
    }

    return (
        <div className={style.card}>
            <div className={style.image}>
                <img src={device.img} alt="Картинка товара"/>
            </div>
            <div className={style.description}>
                <div className={style.title}>
                    <b>{device.title}</b>
                </div>
                <div className={style.price}>
                    {device.price} ₽
                    {!!device.old_price && <div className={style.old_price}>
                        {device.old_price} ₽

                    </div>}
                </div>
                <div className={style.rating}>
                    <Star></Star>
                    <div className={style.rating_count}>
                        {device.rating}
                    </div>
                </div>
                <button className={style.button} onClick={basket.findDevice(device)  ? removeDevice : addDevice}>
                    {basket.findDevice(device) ?
                        <b>Убрать</b>
                        :
                        <b>Купить</b>
                    }
                </button>
            </div>
        </div>
    );
});

export default Card;