import { IBackboneElement } from '../base';
import { IDuration, ISimpleQuantity } from '../datatypes';

/**
 * @name IMedicationRequestInitialFill
 * @description An order or request for both supply of the medication and the instructions for administration of the medication to a patient. The resource is called \"MedicationRequest\" rather than \"MedicationPrescription\" or \"MedicationOrder\" to generalize the use across inpatient and outpatient settings, including care plans, etc., and to harmonize with workflow patterns.
 * @see <a href="https://hl7.org/fhir/R4/medicationrequest-definitions.html#MedicationRequest.dispenseRequest.initialFill">MedicationRequestInitialFill</a>
 * @version R4
 * @extends {IBackboneElement}
 * @author Claudia Alarcón Lazo
 */
export interface IMedicationRequestInitialFill extends IBackboneElement {
  /**
   * @description The amount or quantity to provide as part of the first dispense.
   */
  quantity?: ISimpleQuantity;

  /**
   * @description The length of time that the first dispense is expected to last.
   */
  duration?: IDuration;
}
