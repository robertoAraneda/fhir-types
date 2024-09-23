import { IBackboneElement } from '../base';
import { ICodeableConcept, IReference } from '../datatypes';

/**
 * @name IMedicationDispensePerformer
 * @description Indicates that a medication product is to be or has been dispensed for a named person/patient.  This includes a description of the medication product (supply) provided and the instructions for administering the medication.  The medication dispense is the result of a pharmacy system responding to a medication order.
 * @see <a href="https://hl7.org/fhir/R4/medicationdispense-definitions.html#MedicationDispense.performer">MedicationDispensePerformer</a>
 * @version R4
 * @extends {IBackboneElement}
 * @author Claudia Alarcón Lazo
 */
export interface IMedicationDispensePerformer extends IBackboneElement {
  /**
   * @description Distinguishes the type of performer in the dispense.  For example, date enterer, packager, final checker.
   */
  function?: ICodeableConcept;

  /**
   * @description The device, practitioner, etc. who performed the action.  It should be assumed that the actor is the dispenser of the medication.
   */
  actor: IReference;
}
