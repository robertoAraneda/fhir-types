import { IDomainResource, IElement } from '../base';
import { ICodeableConcept, IIdentifier, IPeriod, IReference } from '../datatypes';
import { FlagStatusType } from '../types';

/**
 * @name IFlag
 * @description Prospective warnings of potential issues when providing care to the patient.
 * @see <a href="https://hl7.org/fhir/R4/flag.html">Flag</a>
 * @version R4
 * @extends {IDomainResource}
 * @author Claudia Alarcón Lazo
 */
export interface IFlag extends IDomainResource {
  /**
   * @description Business identifiers assigned to this flag by the performer or other systems which remain constant as the resource is updated and propagates from server to server.
   */
  identifier?: IIdentifier[];

  /**
   * @description Supports basic workflow. Indicates whether this flag is active and needs to be displayed to a user, or whether it is no longer needed or was entered in error.
   * @description active | inactive | entered-in-error
   * @see <a href="https://hl7.org/fhir/R4/valueset-flag-status.html">FlagStatus</a>
   */
  status: FlagStatusType;

  /**
   * @description Allows a flag to be divided into different categories like clinical, administrative etc. Intended to be used as a means of filtering which flags are displayed to particular user or in a given context.
   */
  category?: ICodeableConcept[];

  /**
   * @description The coded value or textual component of the flag to display to the user.
   */
  code: ICodeableConcept;

  /**
   * @description The patient, location, group, organization, or practitioner etc. this is about record this flag is associated with.
   */
  subject: IReference;

  /**
   * @description The period of time from the activation of the flag to inactivation of the flag. If the flag is active, the end of the period should be unspecified.
   */
  period?: IPeriod;

  /**
   * @description This alert is only relevant during the encounter.
   */
  encounter?: IReference;

  /**
   * @description The person, organization or device that created the flag.
   */
  author?: IReference;

  // Extensions attributes
  /**
   * @description Extension for status
   */
  _status?: IElement;
}
