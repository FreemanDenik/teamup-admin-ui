import {ICity} from "../types";

export const getCitiesArr = (arr: ICity[]) => {
    return arr.map((el) => el.city);
};

export const getAutoCompleteCities = (arr: ICity[]) => {
    return arr.map((el) => el.city).slice(0, 5);
};

