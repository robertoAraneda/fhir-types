import { IElement } from '../base';
import { IIdentifier } from './IIdentifier';
export interface IReference extends IElement {
    reference?: string;
    type?: string;
    identifier?: IIdentifier;
    display?: string;
    _display?: IElement;
    _type?: IElement;
    _reference?: IElement;
}
