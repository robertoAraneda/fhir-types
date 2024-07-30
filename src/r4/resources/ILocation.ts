import { IDomainResource, IElement } from '../base';
import { IAddress, ICodeableConcept, ICoding, IContactPoint, IIdentifier, IReference } from '../datatypes';
import { ILocationHoursOfOperation, ILocationPosition } from '../backbones';
import { LocationModeType, LocationStatusType } from '../types';

export interface ILocation extends IDomainResource {
  resourceType: 'Location';
  identifier?: IIdentifier[];
  status?: LocationStatusType;
  operationalStatus?: ICoding;
  name?: string;
  alias?: string[];
  description?: string;
  mode?: LocationModeType;
  type?: ICodeableConcept[];
  telecom?: IContactPoint[];
  address?: IAddress;
  physicalType?: ICodeableConcept;
  position?: ILocationPosition;
  managingOrganization?: IReference;
  partOf?: IReference;
  hoursOfOperation?: ILocationHoursOfOperation[];
  availabilityExceptions?: string;
  endpoint?: IReference[];

  _status?: IElement;
  _name?: IElement;
  _alias?: IElement[];
  _description?: IElement;
  _mode?: IElement;
  _availabilityExceptions?: IElement;
}
