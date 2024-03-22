import React from 'react';
import {observer} from "mobx-react";
import Card from "../card/Card";
import style from "./Category.module.css"


const Category = observer(({name, devices}) => {

    return (
        <div className={style.category}>
            <div className={style.title}>
                <p>{name}</p>
            </div>
            <div className={style.cards}>
                {devices.map(device => {
                    return <Card key={device.id} device={device}/>
                })
                }
            </div>
        </div>
    );
});

export default Category;