import { IDomainResource, IElement } from '../base';
import { IIdentifier, IHumanName, IContactPoint, IAddress, IAttachment, ICodeableConcept } from '../datatypes';
import { IPractitionerQualification } from '../backbones';
import { AdministrativeGenderEnum } from '../enums';
import { AdministrativeGenderType } from '../types';

export interface IPractitioner extends IDomainResource {
  identifier?: IIdentifier[];
  active?: boolean;
  _active?: IElement;
  name?: IHumanName[];
  telecom?: IContactPoint[];
  address?: IAddress[];
  gender?: AdministrativeGenderType;
  _gender?: IElement;
  birthDate?: string;
  _birthDate?: IElement;
  photo?: IAttachment[];
  qualification?: IPractitionerQualification[];
  communication?: ICodeableConcept[];
}
