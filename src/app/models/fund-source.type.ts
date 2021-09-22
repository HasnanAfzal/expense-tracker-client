import { FundSourceType } from './fund-source-type.type';

export interface FundSource {
    name: string,
    _id: string,
    fundSourceType: FundSourceType
}