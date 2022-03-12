export interface IState {
    filterCity?: boolean;
    filterInterest?: boolean;
    filterSort: boolean;
    cities: [] | string[];
    autoComplete: [] | string[];
    interests?:[] | string[];
}

export interface ICity {
    region: string;
    city: string;
}

export interface IAutoCompleteProps {
    arr: string[];
    color?: boolean;
}

export interface IFilterBtn {
    func: () => void;
    textBtn: string;
    color?: string;
}
