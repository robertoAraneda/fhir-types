import { IElement, IResource } from '../base';
import { IIdentifier, ISignature } from '../datatypes';
import { IBundleLink, IBundleEntry } from '../backbones';
import { BundleTypeEnum } from '../enums';
import { BundleTypeType } from '../types';
export interface IBundle extends IResource {
    resourceType: 'Bundle';
    identifier?: IIdentifier;
    type?: BundleTypeEnum | BundleTypeType;
    timestamp?: string;
    total?: number;
    link?: IBundleLink[];
    entry?: IBundleEntry[];
    signature?: ISignature;
    _type?: IElement;
    _timestamp?: IElement;
    _total?: IElement;
}
