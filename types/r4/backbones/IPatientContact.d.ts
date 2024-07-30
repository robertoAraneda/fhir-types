import { IBackboneElement, IElement } from '../base';
import { IAddress, ICodeableConcept, IContactPoint, IHumanName, IPeriod, IReference } from '../datatypes';
import { AdministrativeGenderEnum } from '../enums';
import { AdministrativeGenderType } from '../types';
declare type PatientContactGender = AdministrativeGenderEnum | AdministrativeGenderType;
export interface IPatientContact extends IBackboneElement {
    relationship?: ICodeableConcept[];
    name?: IHumanName;
    telecom?: IContactPoint[];
    address?: IAddress;
    gender?: PatientContactGender;
    organization?: IReference;
    period?: IPeriod;
    _gender?: IElement;
}
export {};
