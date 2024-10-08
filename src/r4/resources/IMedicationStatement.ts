import { IDosage } from '../backbones';
import { IDomainResource, IElement } from '../base';
import { IAnnotation, ICodeableConcept, IIdentifier, IPeriod, IReference } from '../datatypes';
import { MedicationStatementStatusCodesType } from '../types';

/**
 * @name IMedicationStatement
 * @description A record of a medication that is being consumed by a patient.   A MedicationStatement may indicate that the patient may be taking the medication now or has taken the medication in the past or will be taking the medication in the future.  The source of this information can be the patient, significant other (such as a family member or spouse), or a clinician.  A common scenario where this information is captured is during the history taking process during a patient visit or stay.   The medication information may come from sources such as the patient\u0027s memory, from a prescription bottle,  or from a list of medications the patient, clinician or other party maintains. \n\nThe primary difference between a medication statement and a medication administration is that the medication administration has complete administration information and is based on actual administration information from the person who administered the medication.  A medication statement is often, if not always, less specific.  There is no required date/time when the medication was administered, in fact we only know that a source has reported the patient is taking this medication, where details such as time, quantity, or rate or even medication product may be incomplete or missing or less precise.  As stated earlier, the medication statement information may come from the patient\u0027s memory, from a prescription bottle or from a list of medications the patient, clinician or other party maintains.  Medication administration is more formal and is not missing detailed information.
 * @see <a href="https://hl7.org/fhir/R4/medicationstatement.html">MedicationStatement</a>
 * @version R4
 * @extends {IDomainResource}
 * @author Claudia Alarcón Lazo
 */
export interface IMedicationStatement extends IDomainResource {
  /**
   * @description Identifiers associated with this Medication Statement that are defined by business processes and/or used to refer to it when a direct URL reference to the resource itself is not appropriate. They are business identifiers assigned to this resource by the performer or other systems and remain constant as the resource is updated and propagates from server to server.
   */
  identifier?: IIdentifier[];

  /**
   * @description A plan, proposal or order that is fulfilled in whole or in part by this event.
   */
  basedOn?: IReference[];

  /**
   * @description A larger event of which this particular event is a component or step.
   */
  partOf?: IReference[];

  /**
   * @description A code representing the patient or other source\u0027s judgment about the state of the medication used that this statement is about.  Generally, this will be active or completed.
   * @description active | completed | entered-in-error | intended | stopped | on-hold | unknown | not-taken
   * @see <a href="https://hl7.org/fhir/R4/valueset-medication-statement-status.html">MedicationStatementStatusCodes</a>
   */
  status: MedicationStatementStatusCodesType;

  /**
   * @description Extensions for status
   */
  _status?: IElement;

  /**
   * @description Captures the reason for the current state of the MedicationStatement.
   */
  statusReason?: ICodeableConcept[];

  /**
   * @description Indicates where the medication is expected to be consumed or administered.
   */
  category?: ICodeableConcept;

  /**
   * @description Identifies the medication being administered. This is either a link to a resource representing the details of the medication or a simple attribute carrying a code that identifies the medication from a known list of medications.
   */
  medicationCodeableConcept?: ICodeableConcept;

  /**
   * @description Identifies the medication being administered. This is either a link to a resource representing the details of the medication or a simple attribute carrying a code that identifies the medication from a known list of medications.
   */
  medicationReference?: IReference;

  /**
   * @description The person, animal or group who is/was taking the medication.
   */
  subject: IReference;

  /**
   * @description The encounter or episode of care that establishes the context for this MedicationStatement.
   */
  context?: IReference;

  /**
   * @description The interval of time during which it is being asserted that the patient is/was/will be taking the medication (or was not taking, when the MedicationStatement.taken element is No).
   */
  effectiveDateTime?: string;

  /**
   * @description Extensions for effectiveDateTime
   */
  _effectiveDateTime?: IElement;

  /**
   * @description The interval of time during which it is being asserted that the patient is/was/will be taking the medication (or was not taking, when the MedicationStatement.taken element is No).
   */
  effectivePeriod?: IPeriod;

  /**
   * @description The date when the medication statement was asserted by the information source.
   */
  dateAsserted?: string;

  /**
   * @description Extensions for dateAsserted
   */
  _dateAsserted?: IElement;

  /**
   * @description The person or organization that provided the information about the taking of this medication. Note: Use derivedFrom when a MedicationStatement is derived from other resources, e.g. Claim or MedicationRequest.
   */
  informationSource?: IReference;

  /**
   * @description Allows linking the MedicationStatement to the underlying MedicationRequest, or to other information that supports or is used to derive the MedicationStatement.
   */
  derivedFrom?: IReference[];

  /**
   * @description A reason for why the medication is being/was taken.
   */
  reasonCode?: ICodeableConcept[];

  /**
   * @description Condition or observation that supports why the medication is being/was taken.
   */
  reasonReference?: IReference[];

  /**
   * @description Provides extra information about the medication statement that is not conveyed by the other attributes.
   */
  note?: IAnnotation[];

  /**
   * @description Indicates how the medication is/was or should be taken by the patient.
   */
  dosage?: IDosage[];
}
