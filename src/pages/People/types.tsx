export interface IState {
    filterCity?: boolean;
    filterInterest?: boolean;
    cities: [];
    interests?: [];
}

export interface ICity {
    region: string;
    city: string;
}