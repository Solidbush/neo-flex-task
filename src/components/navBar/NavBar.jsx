import React from 'react';
import style from './NavBar.module.css'
import heart from '../../assets/svg/heart.svg'
import basketImg from '../../assets/svg/basket.svg'
import heartActive from '../../assets/svg/heart-active.svg'
import basketActive from '../../assets/svg/basket-active.svg'
import {NavLink} from "react-router-dom";
import {BASKET_ROUTE, FAVORITES_ROUTE, MAIN_PAGE_ROUTE} from "../../routes";
import {observer} from "mobx-react";
import {useProductContext} from "../../index";


export const NavBar = observer(() => {
    const {basket} = useProductContext()

    const countDevices = basket.countDevices;

    return (
        <div className={style.navbar}>
            <div className={style.navbarBlock}>
                <div className={style.title}>
                    <NavLink className={style.navLink} to={MAIN_PAGE_ROUTE}><b>QPICK</b></NavLink>
                </div>
                <NavLink to={FAVORITES_ROUTE}>
                    {({isActive}) => isActive
                        ?
                        <div data-count={2} className={style.iconContainer}>
                            <img src={heartActive} alt="Избранное"/>
                        </div>
                        :
                        <div data-count={2} className={style.iconContainer}>
                            <img src={heart} alt="Избранное"/>
                        </div>
                    }
                </NavLink>
                <NavLink to={BASKET_ROUTE}>
                    {({isActive}) => isActive
                        ?
                        <div data-count={countDevices} className={style.iconContainer}>
                            <img src={basketActive} alt="Корзина"/>
                        </div>
                        :
                        <div data-count={countDevices} className={style.iconContainer}>
                            <img src={basketImg} alt="Корзина"/>
                        </div>
                    }
                </NavLink>
            </div>
        </div>
    );
});