import { IBackboneElement, IElement } from '../base';
import { AuditEventAgentNetworkTypeEnum } from '../enums/AuditEventAgentNetworkTypeEnum';
import { AuditEventAgentNetworkTypeType } from '../types/AuditEventAgentNetworkTypeType';
declare type AuditEventAgentNetworkType = AuditEventAgentNetworkTypeEnum | AuditEventAgentNetworkTypeType;
export interface IAuditEventAgentNetwork extends IBackboneElement {
    address?: string;
    type?: AuditEventAgentNetworkType;
    _address?: IElement;
    _type?: IElement;
}
export {};
