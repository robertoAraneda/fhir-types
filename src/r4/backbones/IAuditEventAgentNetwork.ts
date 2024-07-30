import { IBackboneElement, IElement } from '../base';
import { AuditEventAgentNetworkTypeType } from '../types/AuditEventAgentNetworkTypeType';

export interface IAuditEventAgentNetwork extends IBackboneElement {
  address?: string;
  type?: AuditEventAgentNetworkTypeType;

  _address?: IElement;
  _type?: IElement;
}
