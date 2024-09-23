import { IMedicationAdministrationDosage, IMedicationAdministrationPerformer } from '../backbones';
import { IDomainResource, IElement } from '../base';
import { IAnnotation, ICodeableConcept, IIdentifier, IPeriod, IReference } from '../datatypes';
import { MedicationAdministrationStatusCodesType } from '../types';

/**
 * @name IMedicationAdministration
 * @description Describes the event of a patient consuming or otherwise being administered a medication.  This may be as simple as swallowing a tablet or it may be a long running infusion.  Related resources tie this event to the authorizing prescription, and the specific encounter between patient and health care practitioner.
 * @see <a href="https://hl7.org/fhir/R4/medicationadministration.html">MedicationAdministration</a>
 * @version R4
 * @extends {IDomainResource}
 * @author Claudia Alarcón Lazo
 */
export interface IMedicationAdministration extends IDomainResource {
  /**
   * @description Identifiers associated with this Medication Administration that are defined by business processes and/or used to refer to it when a direct URL reference to the resource itself is not appropriate. They are business identifiers assigned to this resource by the performer or other systems and remain constant as the resource is updated and propagates from server to server.
   */
  identifier?: IIdentifier[];

  /**
   * @description A protocol, guideline, orderset, or other definition that was adhered to in whole or in part by this event.
   */
  instantiates?: string[];

  /**
   * @description Extensions for instantiates
   */
  _instantiates?: IElement[];

  /**
   * @description A larger event of which this particular event is a component or step.
   */
  partOf?: IReference[];

  /**
   * @description Will generally be set to show that the administration has been completed.  For some long running administrations such as infusions, it is possible for an administration to be started but not completed or it may be paused while some other process is under way.
   * @description in-progress | not-done | on-hold | completed | entered-in-error | stopped | unknown
   * @see <a href="https://hl7.org/fhir/R4/valueset-medication-admin-status.html">MedicationAdministrationStatusCodes</a>
   */
  status: MedicationAdministrationStatusCodesType;

  /**
   * @description Extensions for status
   */
  _status?: IElement;

  /**
   * @description A code indicating why the administration was not performed.
   */
  statusReason?: ICodeableConcept[];

  /**
   * @description Indicates where the medication is expected to be consumed or administered.
   */
  category?: ICodeableConcept;

  /**
   * @description Identifies the medication that was administered. This is either a link to a resource representing the details of the medication or a simple attribute carrying a code that identifies the medication from a known list of medications.
   */
  medicationCodeableConcept?: ICodeableConcept;

  /**
   * @description Identifies the medication that was administered. This is either a link to a resource representing the details of the medication or a simple attribute carrying a code that identifies the medication from a known list of medications.
   */
  medicationReference?: IReference;

  /**
   * @description The person or animal or group receiving the medication.
   */
  subject: IReference;

  /**
   * @description The visit, admission, or other contact between patient and health care provider during which the medication administration was performed.
   */
  context?: IReference;

  /**
   * @description Additional information (for example, patient height and weight) that supports the administration of the medication.
   */
  supportingInformation?: IReference[];

  /**
   * @description A specific date/time or interval of time during which the administration took place (or did not take place, when the \u0027notGiven\u0027 attribute is true). For many administrations, such as swallowing a tablet the use of dateTime is more appropriate.
   */
  effectiveDateTime?: string;

  /**
   * @description Extensions for effectiveDateTime
   */
  _effectiveDateTime?: IElement;

  /**
   * @description A specific date/time or interval of time during which the administration took place (or did not take place, when the \u0027notGiven\u0027 attribute is true). For many administrations, such as swallowing a tablet the use of dateTime is more appropriate.
   */
  effectivePeriod?: IPeriod;

  /**
   * @description Indicates who or what performed the medication administration and how they were involved.
   */
  performer?: IMedicationAdministrationPerformer[];

  /**
   * @description A code indicating why the medication was given.
   */
  reasonCode?: ICodeableConcept[];

  /**
   * @description Condition or observation that supports why the medication was administered.
   */
  reasonReference?: IReference[];

  /**
   * @description The original request, instruction or authority to perform the administration.
   */
  request?: IReference;

  /**
   * @description The device used in administering the medication to the patient.  For example, a particular infusion pump.
   */
  device?: IReference[];

  /**
   * @description Extra information about the medication administration that is not conveyed by the other attributes.
   */
  note?: IAnnotation[];

  /**
   * @description Describes the medication dosage information details e.g. dose, rate, site, route, etc.
   */
  dosage?: IMedicationAdministrationDosage;

  /**
   * @description A summary of the events of interest that have occurred, such as when the administration was verified.
   */
  eventHistory?: IReference[];
}
