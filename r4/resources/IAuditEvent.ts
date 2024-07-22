import { IDomainResource, IElement } from '../base';
import { ICodeableConcept, ICoding, IPeriod } from '../datatypes';
import IAuditEventAgent from '../backbones/IAuditEventAgent';
import IAuditEventSource from '../backbones/IAuditEventSource';
import IAuditEventEntity from '../backbones/IAuditEventEntity';
import { AuditEventActionEnum } from '../../enums/AuditEventActionEnum';
import { AuditEventActionType } from '../../types/AuditEventActionType';
import { AuditEventOutcomeEnum } from '../../enums/AuditEventOutcomeEnum';
import { AuditEventOutcomeType } from '../../types/AuditEventOutcomeType';

export interface IAuditEvent extends IDomainResource {
  resourceType: 'AuditEvent';
  type: ICoding;
  subtype?: ICoding[];
  action?: AuditEventActionEnum | AuditEventActionType;
  period?: IPeriod;
  recorded: string;
  outcome?: AuditEventOutcomeEnum | AuditEventOutcomeType;
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
