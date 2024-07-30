import { IAuditEventAgent, IAuditEventEntity, IAuditEventSource } from '../backbones';
import { IDomainResource, IElement } from '../base';
import { ICodeableConcept, ICoding, IPeriod } from '../datatypes';
import { AuditEventActionEnum, AuditEventOutcomeEnum } from '../enums';
import { AuditEventActionType, AuditEventOutcomeType } from '../types';
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
