import { Car } from "../interfaces/car.interface"
import ItemModel from "../models/item.model"


const getOrders = async () => {
    const responseGet = await ItemModel.find({});
    return responseGet;
}

export { getOrders };