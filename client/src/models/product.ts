export interface Product {
    id: string;
    name: string;
    producer?: Manufacturer;
    producerId: string;
}

export interface Manufacturer {
    id: string;
    name: string;
}