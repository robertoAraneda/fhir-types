import { IDomainResource, IElement } from '../base';
import { IIdentifier, IPeriod, ICodeableConcept, IContactPoint, IReference } from '../datatypes';
import { IPractitionerRoleAvailableTime, IPractitionerRoleNotAvailable } from '../backbones';

export interface IPractitionerRole extends IDomainResource {
  identifier?: IIdentifier[];
  active?: boolean;
  period?: IPeriod;
  practitioner?: IReference;
  organization?: IReference;
  code?: ICodeableConcept[];
  specialty?: ICodeableConcept[];
  location?: IReference[];
  healthcareService?: IReference[];
  telecom?: IContactPoint[];
  availableTime?: IPractitionerRoleAvailableTime[];
  notAvailable?: IPractitionerRoleNotAvailable[];
  availabilityExceptions?: string;
  endpoint?: IReference[];
  _active?: IElement;
  _availabilityExceptions?: IElement;
}
