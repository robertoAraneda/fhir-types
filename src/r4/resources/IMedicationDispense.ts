import { IDosage, IMedicationDispensePerformer, IMedicationDispenseSubstitution } from '../backbones';
import { IDomainResource, IElement } from '../base';
import { IAnnotation, ICodeableConcept, IIdentifier, IReference, ISimpleQuantity } from '../datatypes';
import { MedicationDispenseStatusCodesType } from '../types';

/**
 * @name IMedicationDispense
 * @description Indicates that a medication product is to be or has been dispensed for a named person/patient.  This includes a description of the medication product (supply) provided and the instructions for administering the medication.  The medication dispense is the result of a pharmacy system responding to a medication order.
 * @see <a href="https://hl7.org/fhir/R4/medicationdispense.html">MedicationDispense</a>
 * @version R4
 * @extends {IDomainResource}
 * @author Claudia Alarcón Lazo
 */
export interface IMedicationDispense extends IDomainResource {
  /**
   * @description Identifiers associated with this Medication Dispense that are defined by business processes and/or used to refer to it when a direct URL reference to the resource itself is not appropriate. They are business identifiers assigned to this resource by the performer or other systems and remain constant as the resource is updated and propagates from server to server.
   */
  identifier?: IIdentifier[];

  /**
   * @description The procedure that trigger the dispense.
   */
  partOf?: IReference[];

  /**
   * @description A code specifying the state of the set of dispense events.
   * @description preparation | in-progress | cancelled | on-hold | completed | entered-in-error | stopped | declined | unknown
   * @see <a href="https://hl7.org/fhir/R4/valueset-medicationdispense-status.html">MedicationDispenseStatusCodes</a>
   */
  status: MedicationDispenseStatusCodesType;

  /**
   * @description Extensions for status
   */
  _status?: IElement;

  /**
   * @description Indicates the reason why a dispense was not performed.
   */
  statusReasonCodeableConcept?: ICodeableConcept;

  /**
   * @description Indicates the reason why a dispense was not performed.
   */
  statusReasonReference?: IReference;

  /**
   * @description Indicates the type of medication dispense (for example, where the medication is expected to be consumed or administered (i.e. inpatient or outpatient)).
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
   * @description A link to a resource representing the person or the group to whom the medication will be given.
   */
  subject?: IReference;

  /**
   * @description The encounter or episode of care that establishes the context for this event.
   */
  context?: IReference;

  /**
   * @description Additional information that supports the medication being dispensed.
   */
  supportingInformation?: IReference[];

  /**
   * @description Indicates who or what performed the event.
   */
  performer?: IMedicationDispensePerformer[];

  /**
   * @description The principal physical location where the dispense was performed.
   */
  location?: IReference;

  /**
   * @description Indicates the medication order that is being dispensed against.
   */
  authorizingPrescription?: IReference[];

  /**
   * @description Indicates the type of dispensing event that is performed. For example, Trial Fill, Completion of Trial, Partial Fill, Emergency Fill, Samples, etc.
   */
  type?: ICodeableConcept;

  /**
   * @description The amount of medication that has been dispensed. Includes unit of measure.
   */
  quantity?: ISimpleQuantity;

  /**
   * @description The amount of medication expressed as a timing amount.
   */
  daysSupply?: ISimpleQuantity;

  /**
   * @description The time when the dispensed product was packaged and reviewed.
   */
  whenPrepared?: string;

  /**
   * @description Extensions for whenPrepared
   */
  _whenPrepared?: IElement;

  /**
   * @description The time the dispensed product was provided to the patient or their representative.
   */
  whenHandedOver?: string;

  /**
   * @description Extensions for whenHandedOver
   */
  _whenHandedOver?: IElement;

  /**
   * @description Identification of the facility/location where the medication was shipped to, as part of the dispense event.
   */
  destination?: IReference;

  /**
   * @description Identifies the person who picked up the medication.  This will usually be a patient or their caregiver, but some cases exist where it can be a healthcare professional.
   */
  receiver?: IReference[];

  /**
   * @description Extra information about the dispense that could not be conveyed in the other attributes.
   */
  note?: IAnnotation[];

  /**
   * @description Indicates how the medication is to be used by the patient.
   */
  dosageInstruction?: IDosage[];

  /**
   * @description Indicates whether or not substitution was made as part of the dispense.  In some cases, substitution will be expected but does not happen, in other cases substitution is not expected but does happen.  This block explains what substitution did or did not happen and why.  If nothing is specified, substitution was not done.
   */
  substitution?: IMedicationDispenseSubstitution;

  /**
   * @description Indicates an actual or potential clinical issue with or between one or more active or proposed clinical actions for a patient; e.g. drug-drug interaction, duplicate therapy, dosage alert etc.
   */
  detectedIssue?: IReference[];

  /**
   * @description A summary of the events of interest that have occurred, such as when the dispense was verified.
   */
  eventHistory?: IReference[];
}
