import { IBackboneElement, IElement } from '../base';
import { ICodeableConcept, IRatio, IReference } from '../datatypes';

/**
 * @name IMedicationIngredient
 * @description This resource is primarily used for the identification and definition of a medication for the purposes of prescribing, dispensing, and administering a medication as well as for making statements about medication use.
 * @see <a href="https://hl7.org/fhir/R4/medication-definitions.html#Medication.ingredient">MedicationIngredient</a>
 * @version R4
 * @extends {IBackboneElement}
 * @author Claudia Alarcón Lazo
 */
export interface IMedicationIngredient extends IBackboneElement {
  /**
   * @description The actual ingredient - either a substance (simple ingredient) or another medication of a medication.
   */
  itemCodeableConcept?: ICodeableConcept;

  /**
   * @description The actual ingredient - either a substance (simple ingredient) or another medication of a medication.
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
