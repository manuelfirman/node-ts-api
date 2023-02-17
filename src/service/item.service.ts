import { Car } from "../interfaces/car.interface"
import ItemModel from "../models/item.model"


const getCars = async () => {
    const responseGet = await ItemModel.find({});
    return responseGet;
}

const getCar = async (id: string) => {
    const responseGet = await ItemModel.findOne({ _id: id })
    return responseGet;
}

const insertCar = async (item: Car) => {
    const responseInsert = await ItemModel.create(item);
    return responseInsert;
}

const updateCar = async (id: string, data: Car) => {
    const responseUpdate = await ItemModel.findByIdAndUpdate({ _id: id }, data, { new: true });
    return responseUpdate;
}

const deleteCar = async (id: string) => {
    const responseDelete = await ItemModel.deleteOne({ _id: id });
    return responseDelete;
}

export {
    getCars,
    getCar,
    insertCar,
    updateCar,
    deleteCar
};