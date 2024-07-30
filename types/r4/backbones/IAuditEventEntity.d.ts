import { IBackboneElement, IElement } from '../base';
import { ICoding, IReference } from '../datatypes';
import { IAuditEventEntityDetail } from './IAuditEventEntityDetail';
export interface IAuditEventEntity extends IBackboneElement {
    what?: IReference;
    type?: ICoding;
    role?: ICoding;
    lifecycle?: ICoding;
    securityLabel?: ICoding[];
    name?: string;
    description?: string;
    query?: string;
    detail?: IAuditEventEntityDetail[];
    _name?: IElement;
    _description?: IElement;
    _query?: IElement;
}
