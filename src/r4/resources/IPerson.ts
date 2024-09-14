import { IDomainResource, IElement } from '../base';
import { IIdentifier, IHumanName, IContactPoint, IAddress, IAttachment, IReference } from '../datatypes';
import { IPersonLink } from '../backbones';
import { AdministrativeGenderType } from '../types';

export interface IPerson extends IDomainResource {
  identifier?: IIdentifier[];
  name?: IHumanName[];
  telecom?: IContactPoint[];
  gender?: AdministrativeGenderType;
  birthDate?: string;
  address?: IAddress[];
  photo?: IAttachment;
  managingOrganization?: IReference;
  active?: boolean;
  link?: IPersonLink[];
  _active?: IElement;
  _gender?: IElement;
  _birthDate?: IElement;
}
