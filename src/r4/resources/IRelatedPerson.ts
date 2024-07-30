import { IDomainResource, IElement } from '../base';
import {
  IIdentifier,
  IHumanName,
  ICodeableConcept,
  IContactPoint,
  IAddress,
  IAttachment,
  IPeriod,
  IReference,
} from '../datatypes';
import { IRelatedPersonCommunication } from '../backbones';
import { AdministrativeGenderEnum } from '../enums';
import { AdministrativeGenderType } from '../types';

export interface IRelatedPerson extends IDomainResource {
  resourceType: 'RelatedPerson';
  identifier?: IIdentifier[];
  active?: boolean;
  patient?: IReference;
  relationship?: ICodeableConcept[];
  name?: IHumanName[];
  telecom?: IContactPoint[];
  gender?: AdministrativeGenderEnum | AdministrativeGenderType;
  birthDate?: string;
  address?: IAddress[];
  photo?: IAttachment[];
  period?: IPeriod;
  communication?: IRelatedPersonCommunication[];
  _active?: IElement;
  _gender?: IElement;
  _birthDate?: IElement;
}
