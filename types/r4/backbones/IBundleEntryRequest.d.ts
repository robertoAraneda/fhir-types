import { IBackboneElement, IElement } from '../base';
import { BundleEntryRequestMethodEnum } from '../enums';
import { BundleEntryRequestMethodType } from '../types';
declare type BundleEntryRequestMethod = BundleEntryRequestMethodEnum | BundleEntryRequestMethodType;
export interface IBundleEntryRequest extends IBackboneElement {
    method: BundleEntryRequestMethod;
    url: string;
    ifNoneMatch?: string;
    ifModifiedSince?: string;
    ifMatch?: string;
    ifNoneExist?: string;
    _method?: IElement;
    _url?: IElement;
    _ifNoneMatch?: IElement;
    _ifModifiedSince?: IElement;
    _ifMatch?: IElement;
    _ifNoneExist?: IElement;
}
export {};
