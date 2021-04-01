
export type IReport = IReportMeta & IReportContent
export interface IReportMeta {
    id: string;
    createdAt?: number;
    updatedAt?: number;
    user?: IUser;
    userId: string;
}
export interface IReportContent {
    title: string;
    description: string;
    products: string[];
    rating: keyof typeof Rating;
    reportDate: number;
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