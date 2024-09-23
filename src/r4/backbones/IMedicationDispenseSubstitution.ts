import { IBackboneElement, IElement } from '../base';
import { ICodeableConcept, IReference } from '../datatypes';

/**
 * @name IMedicationDispenseSubstitution
 * @description Indicates that a medication product is to be or has been dispensed for a named person/patient.  This includes a description of the medication product (supply) provided and the instructions for administering the medication.  The medication dispense is the result of a pharmacy system responding to a medication order.
 * @see <a href="https://hl7.org/fhir/R4/medicationdispense-definitions.html#MedicationDispense.substitution">MedicationDispenseSubstitution</a>
 * @version R4
 * @extends {IBackboneElement}
 * @author Claudia Alarcón Lazo
 */
export interface IMedicationDispenseSubstitution extends IBackboneElement {
  /**
   * @description True if the dispenser dispensed a different drug or product from what was prescribed.
   */
  wasSubstituted: boolean;

  /**
   * @description Extensions for wasSubstituted
   */
  _wasSubstituted?: IElement;

  /**
   * @description A code signifying whether a different drug was dispensed from what was prescribed.
   */
  type?: ICodeableConcept;

  /**
   * @description Indicates the reason for the substitution (or lack of substitution) from what was prescribed.
   */
  reason?: ICodeableConcept[];

  /**
   * @description The person or organization that has primary responsibility for the substitution.
   */
  responsibleParty?: IReference[];
}
