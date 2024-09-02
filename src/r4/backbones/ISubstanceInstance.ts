import { IBackboneElement, IElement } from '../base';
import { IIdentifier, ISimpleQuantity } from '../datatypes';

/**
 * @name ISubstanceInstance
 * @description "A homogeneous material with a definite composition.
 * @see <a href="https://hl7.org/fhir/R4/substance-definitions.html#Substance.instance">SubstanceInstance</a>
 * @version R4
 * @extends {IBackboneElement}
 * @author Claudia Alarcón Lazo
 */
export interface ISubstanceInstance extends IBackboneElement {
  /**
   * @description Identifier associated with the package/container (usually a label affixed directly).
   */
  identifier?: IIdentifier;

  /**
   * @description When the substance is no longer valid to use. For some substances, a single arbitrary date is used for expiry.
   */
  expiry?: string;

  /**
   * @description The amount of the substance.
   */
  quantity?: ISimpleQuantity;

  // Extensions attributes
  /**
   * @description Extensions for expiry
   */
  _expiry?: IElement;
}
