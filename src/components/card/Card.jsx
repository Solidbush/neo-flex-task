import React, {useContext} from 'react';
import {ReactComponent as Star} from '../../assets/svg/star.svg'
import {observer} from "mobx-react";
import style from "./Card.module.css"
import {Context} from "../../index";

const Card = observer((props) => {
    const {basket} = useContext(Context);
    const addDevice = () => {
        basket.addDevice(props.device)
    }

    const removeDevice = () => {
        basket.removeDevice(props.device);
    }

    return (
        <div className={style.card}>
            <div className={style.image}>
                <img src={props.device.img} alt="Картинка товара"/>
            </div>
            <div className={style.description}>
                <div className={style.title}>
                    <b>{props.device.title}</b>
                </div>
                <div className={style.price}>
                    {props.device.price} ₽
                    <div className={style.old_price}>
                        {
                            props.device.old_price ? `${props.device.old_price} ₽` : null
                        }
                    </div>
                </div>
                <div className={style.rating}>
                    <Star></Star>
                    <div className={style.rating_count}>
                        {props.device.rating}
                    </div>
                </div>
                <button className={style.button} onClick={basket.findDevice(props.device)  ? removeDevice : addDevice}>
                    {basket.findDevice(props.device) ?
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