import {makeAutoObservable} from "mobx";
import Apple_BYZ_S852I from "../assets/Apple BYZ S852I.png";
import Apple_EarPods from "../assets/Apple EarPods.png";
import Apple_EarPods_Case from "../assets/Apple EarPodsCase.png";
import Apple_AirPods from "../assets/Apple AirPods.png";
import GERLAX_GH_04 from "../assets/GERLAX GH-04.png";
import BOROFONE_BO4 from "../assets/BOROFONE BO4.png";

export default class ShopStore {
    constructor() {
        this._wireless_headphones = [
            {id: 4, img: Apple_AirPods, title: 'Apple AirPods', price: 9527, rating: 4.7},
            {id: 5, img: GERLAX_GH_04, title: 'GERLAX GH-04', price: 6527, rating: 4.7},
            {id: 6, img: BOROFONE_BO4, title: 'BOROFONE BO4', price: 7527, rating: 4.7},
        ]

        this._headphones = [
            {id: 1, img: Apple_BYZ_S852I, title: 'Apple BYZ S852I', price: 2927, old_price: 3527, rating: 4.7},
            {id: 2, img: Apple_EarPods, title: 'Apple EarPods', price: 2327, rating: 4.5},
            {id: 3, img: Apple_EarPods_Case, title: 'Apple EarPods', price: 2327, rating: 4.5},
            {id: 1, img: Apple_BYZ_S852I, title: 'Apple BYZ S852I', price: 2927, rating: 4.7},
            {id: 2, img: Apple_EarPods, title: 'Apple EarPods', price: 2327, rating: 4.5},
            {id: 3, img: Apple_EarPods_Case, title: 'Apple EarPods', price: 2327, rating: 4.5},
        ]

        this._languages = [
            {id: 0, name: "Рус"},
            {id: 1, name: "Eng"}
        ]

        this._language_name = "Рус";
        makeAutoObservable(this)
    }

    get languageName() {
        return this._language_name;
    }

    get languages() {
        return this._languages;
    }

    changeLanguageName(name) {
        this._language_name = name;
    }
    get wirelessHeadphones() {
        return this._wireless_headphones;
    }

    get headphones() {
        return this._headphones;
    }

    setWirelessHeadphones(wirelessHeadphones) {
        this._wireless_headphones = wirelessHeadphones;
    }

    setHeadphones(headphones) {
        this._headphones = headphones;
    }
}

