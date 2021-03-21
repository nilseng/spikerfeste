export interface IReport {
    id: string;
    title: string;
    description: string[];
    products: string[];
    rating: keyof typeof Rating;
    reportDate: number;
    createdAt: number;
    updatedAt: number;
    user: IUser;
    area: string;
}

export const Rating = {
    1: "Spikerfeste",
    2: "Greit feste",
    3: "Bakglatt",
    4: "Katastrofeski"
}

export interface IUser {
    sub: string,
    name: string,
    level: keyof typeof Level,
    [key: string]: any
}

export const Level = {
    1: "Smøresjef",
    2: "Smøreassistent",
    3: "Danske"
}