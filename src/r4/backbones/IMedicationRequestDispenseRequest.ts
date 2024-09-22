import { IBackboneElement, IElement } from '../base';
import { IDuration, IPeriod, IReference, ISimpleQuantity } from '../datatypes';
import { IMedicationRequestInitialFill } from './IMedicationRequestInitialFill';

/**
 * @name IMedicationRequestDispenseRequest
 * @description An order or request for both supply of the medication and the instructions for administration of the medication to a patient. The resource is called \"MedicationRequest\" rather than \"MedicationPrescription\" or \"MedicationOrder\" to generalize the use across inpatient and outpatient settings, including care plans, etc., and to harmonize with workflow patterns.
 * @see <a href="https://hl7.org/fhir/R4/medicationrequest-definitions.html#MedicationRequest.dispenseRequest">MedicationRequestDispenseRequest</a>
 * @version R4
 * @extends {IBackboneElement}
 * @author Claudia Alarcón Lazo
 */
export interface IMedicationRequestDispenseRequest extends IBackboneElement {
  /**
   * @description Indicates the quantity or duration for the first dispense of the medication.
   */
  initialFill?: IMedicationRequestInitialFill;

  /**
   * @description The minimum period of time that must occur between dispenses of the medication.
   */
  dispenseInterval?: IDuration;

  /**
   * @description This indicates the validity period of a prescription (stale dating the Prescription).
   */
  validityPeriod?: IPeriod;

  /**
   * @description "An integer indicating the number of times, in addition to the original dispense, (aka refills or repeats) that the patient can receive the prescribed medication. Usage Notes: This integer does not include the original order dispense. This means that if an order indicates dispense 30 tablets plus \"3 repeats\", then the order can be dispensed a total of 4 times and the patient can receive a total of 120 tablets.  A prescriber may explicitly say that zero refills are permitted after the initial dispense.
   */
  numberOfRepeatsAllowed?: number;

  /**
   * @description Extensions for numberOfRepeatsAllowed
   */
  _numberOfRepeatsAllowed?: IElement;

  /**
   * @description The amount that is to be dispensed for one fill.
   */
  quantity?: ISimpleQuantity;

  /**
   * @description Identifies the period time over which the supplied product is expected to be used, or the length of time the dispense is expected to last.
   */
  expectedSupplyDuration?: IDuration;

  /**
   * @description Indicates the intended dispensing Organization specified by the prescriber.
   */
  performer?: IReference;
}
