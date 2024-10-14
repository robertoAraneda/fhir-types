import { IBackboneElement, IElement } from '../base';
import { ICoding } from '../datatypes';

/**
 * @name IContractSecurityLabel
 * @description Legally enforceable, formally recorded unilateral or bilateral directive i.e., a policy or agreement.
 * @see <a href="https://hl7.org/fhir/R4/contract-definitions.html#Contract.term.securityLabel">ContractSecurityLabel</a>
 * @version R4
 * @extends {IBackboneElement}
 * @author Claudia Alarcón Lazo
 */
export interface IContractSecurityLabel extends IBackboneElement {
  /**
   * @description Number used to link this term or term element to the applicable Security Label.
   */
  number?: number[];

  /**
   * @description Extensions for number
   */
  _number?: IElement[];

  /**
   * @description Security label privacy tag that species the level of confidentiality protection required for this term and/or term elements.
   */
  classification: ICoding;

  /**
   * @description Security label privacy tag that species the applicable privacy and security policies governing this term and/or term elements.
   */
  category?: ICoding[];

  /**
   * @description Security label privacy tag that species the manner in which term and/or term elements are to be protected.
   */
  control?: ICoding[];
}
