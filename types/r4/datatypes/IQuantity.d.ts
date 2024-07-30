import { IElement } from '../base';
import { QuantityComparatorEnum } from '../enums';
import { QuantityComparatorType } from '../types';
declare type QuantityComparator = QuantityComparatorEnum | QuantityComparatorType;
export interface IQuantity extends IElement {
    value?: number;
    _value?: IElement;
    comparator?: QuantityComparator;
    _comparator?: IElement;
    unit?: string;
    _unit?: IElement;
    system?: string;
    _system?: IElement;
    code?: string;
    _code?: IElement;
}
export {};
