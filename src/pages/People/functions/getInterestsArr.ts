import {InterestDto} from "../../../types";

export const getInterestsArr = (arr: InterestDto[]) => {
    return arr.map((el) => el.title);
};

export const getAutoCompleteInterests = (arr: InterestDto[]) => {
    return arr.map((el) => el.title).slice(0, 5);
};