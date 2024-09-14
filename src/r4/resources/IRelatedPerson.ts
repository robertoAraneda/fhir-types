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
import { AdministrativeGenderType } from '../types';

export interface IRelatedPerson extends IDomainResource {
  identifier?: IIdentifier[];
  active?: boolean;
  patient?: IReference;
  relationship?: ICodeableConcept[];
  name?: IHumanName[];
  telecom?: IContactPoint[];
  gender?: AdministrativeGenderType;
  birthDate?: string;
  address?: IAddress[];
  photo?: IAttachment[];
  period?: IPeriod;
  communication?: IRelatedPersonCommunication[];
  _active?: IElement;
  _gender?: IElement;
  _birthDate?: IElement;
}
