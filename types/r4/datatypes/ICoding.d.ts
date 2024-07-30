import { IElement } from '../base';
export interface ICoding extends IElement {
    system?: string;
    version?: string;
    code?: string;
    display?: string;
    userSelected?: boolean;
    _system?: IElement;
    _version?: IElement;
    _code?: IElement;
    _display?: IElement;
    _userSelected?: IElement;
}
