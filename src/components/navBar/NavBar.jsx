import React from 'react';
import style from './NavBar.module.css'
import heart from '../../assets/svg/heart.svg'
import basket from '../../assets/svg/basket.svg'
import heartActive from '../../assets/svg/heart-active.svg'
import basketActive from '../../assets/svg/basket-active.svg'
import {NavLink} from "react-router-dom";
import {BASKET_ROUTE, FAVORITES_ROUTE, MAIN_PAGE_ROUTE} from "../../utils/consts";
import {useLocation} from 'react-router-dom';


const NavBar = () => {
    const location = useLocation();
    return (
        <div className={style.navbar}>
            <div className={style.navbarBlock}>
                <div className={style.title}>
                    <NavLink className={style.navLink} to={MAIN_PAGE_ROUTE}><b>QPICK</b></NavLink>
                </div>
                <NavLink to={FAVORITES_ROUTE}>
                    {location.pathname === FAVORITES_ROUTE ?
                        <img className={style.iconHeart} src={heartActive} alt="Избранное"/>
                        :
                        <img className={style.iconHeart} src={heart} alt="Избранное"/>
                    }
                </NavLink>
                <NavLink to={BASKET_ROUTE}>
                    {location.pathname === BASKET_ROUTE ?
                        <img className={style.iconBasket} src={basketActive} alt="Корзина"/>
                        :
                        <img className={style.iconBasket} src={basket} alt="Корзина"/>
                    }
                </NavLink>
            </div>
        </div>
    );
};

export default NavBar;