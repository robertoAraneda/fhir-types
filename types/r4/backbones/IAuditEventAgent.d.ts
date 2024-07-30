import { IBackboneElement, IElement } from '../base';
import { ICodeableConcept, ICoding, IReference } from '../datatypes';
import { IAuditEventAgentNetwork } from './IAuditEventAgentNetwork';
export interface IAuditEventAgent extends IBackboneElement {
    type?: ICodeableConcept;
    role?: ICodeableConcept[];
    who?: IReference;
    altId?: string;
    name?: string;
    requestor: boolean;
    location?: IReference;
    policy?: string[];
    media?: ICoding;
    network?: IAuditEventAgentNetwork;
    purposeOfUse?: ICodeableConcept[];
    _altId?: IElement;
    _name?: IElement;
    _requestor?: IElement;
    _policy?: IElement[];
}
