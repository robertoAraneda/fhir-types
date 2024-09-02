import { IBackboneElement } from '../base';
import { ICodeableConcept, IRatio, IReference } from '../datatypes';

/**
 * @name ISubstanceIngredient
 * @description A homogeneous material with a definite composition.
 * @see <a href="https://hl7.org/fhir/R4/substance-definitions.html#Substance.ingredient">SubstanceIngredient</a>
 * @version R4
 * @extends {IBackboneElement}
 * @author Claudia Alarcón Lazo
 */
export interface ISubstanceIngredient extends IBackboneElement {
  /**
   * @description The amount of the ingredient in the substance - a concentration ratio.
   */
  quantity?: IRatio;

  /**
   * @description Another substance that is a component of this substance.
   */
  substanceCodeableConcept?: ICodeableConcept;

  /**
   * @description Another substance that is a component of this substance.
   */
  substanceReference?: IReference;
}
