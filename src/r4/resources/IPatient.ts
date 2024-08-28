import { IDomainResource, IElement } from '../base';
import {
  IIdentifier,
  IHumanName,
  IContactPoint,
  IAddress,
  ICodeableConcept,
  IAttachment,
  IReference,
} from '../datatypes';
import { IPatientContact, IPatientCommunication, IPatientLink } from '../backbones';
import { AdministrativeGenderType } from '../types';

/**
 * @name IPatient
 * @description Demographics and other administrative information about an individual or animal receiving care or other health-related services.
 * @see <a href="https://www.hl7.org/fhir/R4/patient.html">Patient</a>
 * @version R4
 * @extends {IDomainResource}
 * @author Roberto Araneda Espinoza
 * @author Claudia Alarcón Lazo
 */
export interface IPatient extends IDomainResource {
  /**
   * @description The type of resource
   */
  resourceType?: string;

  /**
   * @description An identifier for this patient.
   */
  identifier?: IIdentifier[];

  /**
   * @description Whether this patient record is in active use.
   Many systems use this property to mark as non-current patients, such as those that have not been seen for a period of time based on an organization's business rules.

   It is often used to filter patient lists to exclude inactive patients

   Deceased patients may also be marked as inactive for the same reasons, but may be active for some time after death.
   */
  active?: boolean;

  /**
   * @description Extensions for active
   */
  _active?: IElement;

  /**
   * @description A name associated with the individual.
   */
  name?: IHumanName[];

  /**
   * @description A contact detail (e.g. a telephone number or an email address) by which the individual may be contacted.
   */
  telecom?: IContactPoint[];

  /**
   * @description Administrative Gender - the gender that the patient is considered to have for administration and record keeping purposes.
   */
  gender?: AdministrativeGenderType;

  /**
   * @description Extensions for gender
   */
  _gender?: IElement;

  /**
   * @description The date of birth for the individual.
   */
  birthDate?: string;

  /**
   * @description Extensions for birthDate
   */
  _birthDate?: IElement;

  /**
   * @description Indicates if the individual is deceased or not.
   */
  deceasedBoolean?: boolean;

  /**
   * @description Extensions for deceasedBoolean
   */
  _deceasedBoolean?: IElement;

  /**
   * @description Indicates if the individual is deceased or not.
   */
  deceasedDateTime?: string;

  /**
   * @description Extensions for deceasedDateTime
   */
  _deceasedDateTime?: IElement;

  /**
   * @description An address for the individual.
   */
  address?: IAddress[];

  /**
   * @description This field contains a patient's most recent marital (civil) status.
   */
  maritalStatus?: ICodeableConcept;

  /**
   * @description Indicates whether the patient is part of a multiple (boolean) or indicates the actual birth order (integer).
   */
  multipleBirthBoolean?: boolean;

  /**
   * @description Extensions for multipleBirthBoolean
   */
  _multipleBirthBoolean?: IElement;

  /**
   * @description Indicates whether the patient is part of a multiple (boolean) or indicates the actual birth order (integer).
   */
  multipleBirthInteger?: number;

  /**
   * @description Extensions for multipleBirthInteger
   */
  _multipleBirthInteger?: IElement;

  /**
   * @description Image of the patient.
   */
  photo?: IAttachment[];

  /**
   * @description A contact party (e.g. guardian, partner, friend) for the patient.
   */
  contact?: IPatientContact[];

  /**
   * @description A language which may be used to communicate with the patient about his or her health.
   */
  communication?: IPatientCommunication[];

  /**
   * @description Patient's nominated care provider.
   */
  generalPractitioner?: IReference[];

  /**
   * @description Organization that is the custodian of the patient record.
   */
  managingOrganization?: IReference;

  /**
   * @description Link to another patient resource that concerns the same actual patient.
   */
  link?: IPatientLink[];
}
