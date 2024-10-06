import {
  IImmunizationEducation,
  IImmunizationPerformer,
  IImmunizationProtocolApplied,
  IImmunizationReaction,
} from '../backbones';
import { IDomainResource, IElement } from '../base';
import { IAnnotation, ICodeableConcept, IIdentifier, IReference, ISimpleQuantity } from '../datatypes';
import { ImmunizationStatusType } from '../types';

/**
 * @name IImmunization
 * @description Describes the event of a patient being administered a vaccine or a record of an immunization as reported by a patient, a clinician or another party.
 * @see <a href="https://hl7.org/fhir/R4/immunization.html">Immunization</a>
 * @version R4
 * @extends {IDomainResource}
 * @author Claudia Alarcón Lazo
 */
export interface IImmunization extends IDomainResource {
  /**
   * @description A unique identifier assigned to this immunization record.
   */
  identifier?: IIdentifier[];

  /**
   * @description Indicates the current status of the immunization event.
   * @description completed | entered-in-error | not-done
   * @see <a href="https://hl7.org/fhir/R4/valueset-immunization-status.html">ImmunizationStatusCodes</a>
   */
  status: ImmunizationStatusType;

  /**
   * @description Extensions for status
   */
  _status?: IElement;

  /**
   * @description Indicates the reason the immunization event was not performed.
   */
  statusReason?: ICodeableConcept;

  /**
   * @description Vaccine that was administered or was to be administered.
   */
  vaccineCode: ICodeableConcept;

  /**
   * @description The patient who either received or did not receive the immunization.
   */
  patient: IReference;

  /**
   * @description The visit or admission or other contact between patient and health care provider the immunization was performed as part of.
   */
  encounter?: IReference;

  /**
   * @description Date vaccine administered or was to be administered.
   */
  occurrenceDateTime?: string;

  /**
   * @description Extensions for occurrenceDateTime
   */
  _occurrenceDateTime?: IElement;

  /**
   * @description Date vaccine administered or was to be administered.
   */
  occurrenceString?: string;

  /**
   * @description Extensions for occurrenceString
   */
  _occurrenceString?: IElement;

  /**
   * @description The date the occurrence of the immunization was first captured in the record - potentially significantly after the occurrence of the event.
   */
  recorded?: string;

  /**
   * @description Extensions for recorded
   */
  _recorded?: IElement;

  /**
   * @description An indication that the content of the record is based on information from the person who administered the vaccine. This reflects the context under which the data was originally recorded.
   */
  primarySource?: boolean;

  /**
   * @description Extensions for primarySource
   */
  _primarySource?: IElement;

  /**
   * @description The source of the data when the report of the immunization event is not based on information from the person who administered the vaccine.
   */
  reportOrigin?: ICodeableConcept;

  /**
   * @description The service delivery location where the vaccine administration occurred.
   */
  location?: IReference;

  /**
   * @description Name of vaccine manufacturer.
   */
  manufacturer?: IReference;

  /**
   * @description Lot number of the vaccine product.
   */
  lotNumber?: string;

  /**
   * @description Extensions for lotNumber
   */
  _lotNumber?: IElement;

  /**
   * @description Date vaccine batch expires.
   */
  expirationDate?: string;

  /**
   * @description Extensions for expirationDate
   */
  _expirationDate?: IElement;

  /**
   * @description Body site where vaccine was administered.
   */
  site?: ICodeableConcept;

  /**
   * @description The path by which the vaccine product is taken into the body.
   */
  route?: ICodeableConcept;

  /**
   * @description The quantity of vaccine product that was administered.
   */
  doseQuantity?: ISimpleQuantity;

  /**
   * @description Indicates who performed the immunization event.
   */
  performer?: IImmunizationPerformer[];

  /**
   * @description Extra information about the immunization that is not conveyed by the other attributes.
   */
  note?: IAnnotation[];

  /**
   * @description Reasons why the vaccine was administered.
   */
  reasonCode?: ICodeableConcept[];

  /**
   * @description Condition, Observation or DiagnosticReport that supports why the immunization was administered.
   */
  reasonReference?: IReference[];

  /**
   * @description Indication if a dose is considered to be subpotent. By default, a dose should be considered to be potent.
   */
  isSubpotent?: boolean;

  /**
   * @description Extensions for isSubpotent
   */
  _isSubpotent?: IElement;

  /**
   * @description Reason why a dose is considered to be subpotent.
   */
  subpotentReason?: ICodeableConcept[];

  /**
   * @description EEducational material presented to the patient (or guardian) at the time of vaccine administration.
   */
  education?: IImmunizationEducation[];

  /**
   * @description Indicates a patient\u0027s eligibility for a funding program.
   */
  programEligibility?: ICodeableConcept[];

  /**
   * @description Indicates the source of the vaccine actually administered. This may be different than the patient eligibility (e.g. the patient may be eligible for a publically purchased vaccine but due to inventory issues, vaccine purchased with private funds was actually administered).
   */
  fundingSource?: ICodeableConcept;

  /**
   * @description Categorical data indicating that an adverse event is associated in time to an immunization.
   */
  reaction?: IImmunizationReaction[];

  /**
   * @description The protocol (set of recommendations) being followed by the provider who administered the dose.
   */
  protocolApplied?: IImmunizationProtocolApplied[];
}
