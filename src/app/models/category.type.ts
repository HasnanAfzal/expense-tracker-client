import { Item } from './Item.type';

export interface Category {
    name: string;
    _id: string;
    items?: Array<Item>;
}