import React from 'react';
import langs from '../../assets/svg/langs.svg'
import vk from '../../assets/svg/vk.svg'
import telegram from '../../assets/svg/tel.svg'
import whatsup from '../../assets/svg/whatsup.svg'
import style from './Footer.module.css'
import {NavLink} from "react-router-dom";
import {BASKET_ROUTE, CONTACTS_ROUTE, FAVORITES_ROUTE, MAIN_PAGE_ROUTE} from "../../routes";
import {observer} from "mobx-react";
import {useProductContext} from "../../index";

const Footer = observer(() => {
    const {shop} = useProductContext();
    const temp_language = shop.languageName;
    const setLanguage = (name) => {
        shop.changeLanguageName(name);
    }
    return (
        <div className={style.footer}>
            <div className={style.container}>
                <div className={style.title}>
                    <NavLink className={style.navLink} to={MAIN_PAGE_ROUTE}><b>QPICK</b></NavLink>
                </div>
                <div className={style.info}>
                    <div>
                        <NavLink
                            className={({isActive}) => isActive ? style.linkActive : style.link}
                            to={FAVORITES_ROUTE}>
                            <p>Избранное</p>
                        </NavLink>
                        <NavLink
                            className={({isActive}) => isActive ? style.linkActive : style.link}
                            to={BASKET_ROUTE}>
                            <p>Корзина</p>
                        </NavLink>
                        <NavLink
                            className={({isActive}) => isActive ? style.linkActive : style.link}
                            to={CONTACTS_ROUTE}>
                            <p>Контакты</p>
                        </NavLink>
                    </div>
                    <div>
                        <p className={style.service}>Условия сервиса</p>
                        <div className={style.langs}>
                            <img src={langs} alt="Языки"/>
                            {shop.languages.map(language => {
                                return <button
                                    key={language.name}
                                    disabled={temp_language === language.name}
                                    onClick={() => setLanguage(language.name)}>
                                    <b>{language.name}</b>
                                </button>
                            })}
                        </div>
                    </div>
                </div>
                <div className={style.socialLinks}>
                    <a href="http://surl.li/rusyw" target="_blank" rel="noreferrer" title="Вконтакте">
                        <img src={vk} alt="Вконтакте"/>
                    </a>
                    <a href="http://surl.li/rusyz" target="_blank" rel="noreferrer" title="Телеграмм">
                        <img src={telegram}  alt="Телеграмм"/>
                    </a>
                    <a href="http://surl.li/ruszn" target="_blank" rel="noreferrer" title="What's up">
                        <img src={whatsup} alt="What's up"/>
                    </a>
                </div>
            </div>
        </div>
    );
});

export default Footer;