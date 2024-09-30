import { IBackboneElement, IElement } from '../base';
import { ICodeableConcept, IRatio, IReference } from '../datatypes';

/**
 * @name IMedicationKnowledgeIngredient
 * @description Information about a medication that is used to support knowledge.
 * @see <a href="https://hl7.org/fhir/R4/medicationknowledge-definitions.html#MedicationKnowledge.ingredient">MedicationKnowledgeIngredient</a>
 * @version R4
 * @extends {IBackboneElement}
 * @author Claudia Alarcón Lazo
 */
export interface IMedicationKnowledgeIngredient extends IBackboneElement {
  /**
   * @description The actual ingredient - either a substance (simple ingredient) or another medication.
   */
  itemCodeableConcept?: ICodeableConcept;

  /**
   * @description The actual ingredient - either a substance (simple ingredient) or another medication.
   */
  itemReference?: IReference;

  /**
   * @description Indication of whether this ingredient affects the therapeutic action of the drug.
   */
  isActive?: boolean;

  /**
   * @description Extensions for isActive
   */
  _isActive?: IElement;

  /**
   * @description Specifies how many (or how much) of the items there are in this Medication.  For example, 250 mg per tablet.  This is expressed as a ratio where the numerator is 250mg and the denominator is 1 tablet.
   */
  strength?: IRatio;
}
