import { IBackboneElement, IElement } from '../base';
export interface IAuditEventEntityDetail extends IBackboneElement {
    type: string;
    valueString?: string;
    valueBase64Binary?: string;
    _type?: IElement;
    _valueString?: IElement;
    _valueBase64Binary?: IElement;
}
