import React from 'react';
import {observer} from "mobx-react";
import Card from "../card/Card";
import style from "./Category.module.css"


const Category = observer((props) => {

    return (
        <div className={style.category}>
            <div className={style.title}>
                <p>{props.name}</p>
            </div>
            <div className={style.cards}>
                {props.devices.map(device => {
                    return <Card device={device}/>
                })
                }
            </div>
        </div>
    );
});

export default Category;