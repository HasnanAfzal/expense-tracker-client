import { VendorType } from './vendor-type.type';

export interface Vendor {
    name: string;
    address?: string;
    website?: string;
    vendorType?: VendorType;
    _id?: string
}