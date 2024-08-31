import { IAuditEventAgent, IAuditEventEntity, IAuditEventSource } from '../backbones';
import { IDomainResource, IElement } from '../base';
import { ICodeableConcept, ICoding, IPeriod } from '../datatypes';
import { AuditEventActionType, AuditEventOutcomeType } from '../types';

export interface IAuditEvent extends IDomainResource {
  type: ICoding;
  subtype?: ICoding[];
  action?: AuditEventActionType;
  period?: IPeriod;
  recorded: string;
  outcome?: AuditEventOutcomeType;
  outcomeDesc?: string;
  purposeOfEvent?: ICodeableConcept[];
  agent: IAuditEventAgent[];
  source: IAuditEventSource;
  entity?: IAuditEventEntity[];

  _action?: IElement;
  _recorded?: IElement;
  _outcome?: IElement;
  _outcomeDesc?: IElement;
}
