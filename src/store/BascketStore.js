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
            this._devices.push({id: device.id, device: {...device}, count: 1})
        }
    }

    get fullPrice() {
        this._full_price = this.countFullPrice();
        return this._full_price
    }

    countFullPrice() {
        let full_price = 0
        this._devices.forEach(item => {
            let temp_price = item.count * item.device.price;
            if (temp_price) {
                full_price = temp_price + full_price;
            }
        })
        return full_price;
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