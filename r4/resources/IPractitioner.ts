import { IDomainResource, IElement } from '../base';
import { IIdentifier, IHumanName, IContactPoint, IAddress, IAttachment, ICodeableConcept } from '../datatypes';
import { AdministrativeGenderEnum } from '../../enums';
import { AdministrativeGenderType } from '../../types';
import { IPractitionerQualification } from '../backbones';

export interface IPractitioner extends IDomainResource {
  resourceType: 'Practitioner';
  identifier?: IIdentifier[];
  active?: boolean;
  _active?: IElement;
  name?: IHumanName[];
  telecom?: IContactPoint[];
  address?: IAddress[];
  gender?: AdministrativeGenderEnum | AdministrativeGenderType;
  _gender?: IElement;
  birthDate?: string;
  _birthDate?: IElement;
  photo?: IAttachment[];
  qualification?: IPractitionerQualification[];
  communication?: ICodeableConcept[];
}
