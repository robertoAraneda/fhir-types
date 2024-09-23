import { IBackboneElement, IElement } from '../base';
import { ICodeableConcept, IRatio, ISimpleQuantity } from '../datatypes';

/**
 * @name IMedicationAdministrationDosage
 * @description Describes the event of a patient consuming or otherwise being administered a medication.  This may be as simple as swallowing a tablet or it may be a long running infusion.  Related resources tie this event to the authorizing prescription, and the specific encounter between patient and health care practitioner.
 * @see <a href="https://hl7.org/fhir/R4/medicationadministration-definitions.html#MedicationAdministration.dosage">MedicationAdministrationDosage</a>
 * @version R4
 * @extends {IBackboneElement}
 * @author Claudia Alarcón Lazo
 */
export interface IMedicationAdministrationDosage extends IBackboneElement {
  /**
   * @description Free text dosage can be used for cases where the dosage administered is too complex to code. When coded dosage is present, the free text dosage may still be present for display to humans.\r\rThe dosage instructions should reflect the dosage of the medication that was administered.
   */
  text?: string;

  /**
   * @description Extensions for text
   */
  _text?: IElement;

  /**
   * @description A coded specification of the anatomic site where the medication first entered the body.  For example, \"left arm\".
   */
  site?: ICodeableConcept;

  /**
   * @description A code specifying the route or physiological path of administration of a therapeutic agent into or onto the patient.  For example, topical, intravenous, etc.
   */
  route?: ICodeableConcept;

  /**
   * @description A coded value indicating the method by which the medication is intended to be or was introduced into or on the body.  This attribute will most often NOT be populated.  It is most commonly used for injections.  For example, Slow Push, Deep IV.
   */
  method?: ICodeableConcept;

  /**
   * @description The amount of the medication given at one administration event.   Use this value when the administration is essentially an instantaneous event such as a swallowing a tablet or giving an injection.
   */
  dose?: ISimpleQuantity;

  /**
   * @description Identifies the speed with which the medication was or will be introduced into the patient.  Typically, the rate for an infusion e.g. 100 ml per 1 hour or 100 ml/hr.  May also be expressed as a rate per unit of time, e.g. 500 ml per 2 hours.  Other examples:  200 mcg/min or 200 mcg/1 minute; 1 liter/8 hours.
   */
  rateRatio?: IRatio;

  /**
   * @description Identifies the speed with which the medication was or will be introduced into the patient.  Typically, the rate for an infusion e.g. 100 ml per 1 hour or 100 ml/hr.  May also be expressed as a rate per unit of time, e.g. 500 ml per 2 hours.  Other examples:  200 mcg/min or 200 mcg/1 minute; 1 liter/8 hours.
   */
  rateQuantity?: ISimpleQuantity;
}
