import { IDomainResource, IElement } from '../base';
import { IAddress, ICodeableConcept, ICoding, IContactPoint, IIdentifier, IReference } from '../datatypes';
import { LocationModeEnum, LocationStatusEnum } from '../../enums';
import { LocationModeType, LocationStatusType } from '../../types';
import { ILocationHoursOfOperation, ILocationPosition } from '../backbones';

export interface ILocation extends IDomainResource {
  resourceType: 'Location';
  identifier?: IIdentifier[];
  status?: LocationStatusEnum | LocationStatusType;
  operationalStatus?: ICoding;
  name?: string;
  alias?: string[];
  description?: string;
  mode?: LocationModeEnum | LocationModeType;
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
