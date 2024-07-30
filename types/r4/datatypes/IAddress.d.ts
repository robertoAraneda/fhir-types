import { IElement } from '../base';
import { AddressTypeEnum, AddressUseEnum } from '../enums';
import { AddressTypeType, AddressUseType } from '../types';
import { IPeriod } from './IPeriod';
declare type AddressType = AddressTypeEnum | AddressTypeType;
declare type AddressUse = AddressUseEnum | AddressUseType;
/**
 * @description FHIR R4
 */
export interface IAddress extends IElement {
    use?: AddressUse;
    type?: AddressType;
    text?: string;
    line?: string[];
    city?: string;
    district?: string;
    state?: string;
    postalCode?: string;
    country?: string;
    period?: IPeriod;
    _use?: IElement;
    _type?: IElement;
    _text?: IElement;
    _line?: IElement[];
    _city?: IElement;
    _district?: IElement;
    _state?: IElement;
    _postalCode?: IElement;
    _country?: IElement;
}
export {};
