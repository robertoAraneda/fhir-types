import { IBackboneElement, IElement } from '../base';
import { ICodeableConcept, ISimpleQuantity } from '../datatypes';

/**
 * @name IMedicationKnowledgeDrugCharacteristic
 * @description Information about a medication that is used to support knowledge.
 * @see <a href="https://hl7.org/fhir/R4/medicationknowledge-definitions.html#MedicationKnowledge.drugCharacteristic">MedicationKnowledgeDrugCharacteristic</a>
 * @version R4
 * @extends {IBackboneElement}
 * @author Claudia Alarcón Lazo
 */
export interface IMedicationKnowledgeDrugCharacteristic extends IBackboneElement {
  /**
   * @description A code specifying which characteristic of the medicine is being described (for example, colour, shape, imprint).
   */
  type?: ICodeableConcept;

  /**
   * @description Description of the characteristic.
   */
  valueCodeableConcept?: ICodeableConcept;

  /**
   * @description Description of the characteristic.
   */
  valueString?: string;

  /**
   * @description Extensions for valueString
   */
  _valueString?: IElement;

  /**
   * @description Description of the characteristic.
   */
  valueQuantity?: ISimpleQuantity;

  /**
   * @description Description of the characteristic.
   */
  valueBase64Binary?: string;

  /**
   * @description Extensions for valueBase64Binary
   */
  _valueBase64Binary?: IElement;
}
