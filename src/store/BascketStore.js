import {makeAutoObservable} from "mobx"

export default class BasketStore {
    constructor() {
        this._devices = []
        this._full_price = 0;
        makeAutoObservable(this)
    }

    get devices() {
        return this._devices
    }

    addDevice(device) {
        const foundItem = this._devices.find(item => item.id === device.id);
        if (foundItem) {
            foundItem.count = foundItem.count + 1;
        }
        else {
            this._devices.push({id: device.id, device, count: 1})
        }
    }

    get fullPrice() {
        this._full_price = this.countFullPrice();
        return this._full_price
    }

    get countDevices() {
        return this._devices.length;
    }

    countFullPrice() {
        return this._devices.reduce((acc, item) => {
            const temp_price = item.count * item.device.price;
            /*
            * Проверка на undefined в карточке товара
            */
            if (temp_price) {
                acc += temp_price;
            }

            return acc;
        }, 0)
    }

    removeDevice(device) {
        const foundIndex = this._devices.findIndex(item => item.id === device.id);
        if (foundIndex !== -1) {
            this._devices.splice(foundIndex, 1);
        }
    }

    reduceDevice(device) {
        const foundItem = this._devices.find(item => item.id === device.id);
        if (foundItem) {
            if (foundItem.count === 1) {
                this.removeDevice(device)
            }
            else {
                foundItem.count = foundItem.count - 1;
            }
        }
        return foundItem;
    }

    findDevice(device) {
        const foundItem = this._devices.find(item => item.id === device.id);
        return !!foundItem;
    }

    removeAllDevices() {
        this._devices = []
    }

}