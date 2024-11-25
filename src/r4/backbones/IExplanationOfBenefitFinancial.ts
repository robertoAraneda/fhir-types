import { IBackboneElement, IElement } from '../base';
import { ICodeableConcept, IMoney } from '../datatypes';

/**
 * @name IExplanationOfBenefitFinancial
 * @description This resource provides: the claim details; adjudication details from the processing of a Claim; and optionally account balance information, for informing the subscriber of the benefits provided.
 * @see <a href="https://hl7.org/fhir/R4/explanationofbenefit-definitions.html#ExplanationOfBenefit.benefitBalance.financial">ExplanationOfBenefitFinancial</a>
 * @version R4
 * @extends {IBackboneElement}
 * @author Claudia Alarcón Lazo
 */
export interface IExplanationOfBenefitFinancial extends IBackboneElement {
  /**
   * @description Classification of benefit being provided.
   */
  type: ICodeableConcept;

  /**
   * @description The quantity of the benefit which is permitted under the coverage.
   */
  allowedUnsignedInt?: number;

  /**
   * @description Extensions for allowedUnsignedInt
   */
  _allowedUnsignedInt?: IElement;

  /**
   * @description The quantity of the benefit which is permitted under the coverage.
   */
  allowedString?: string;

  /**
   * @description Extensions for allowedString
   */
  _allowedString?: IElement;

  /**
   * @description The quantity of the benefit which is permitted under the coverage.
   */
  allowedMoney?: IMoney;

  /**
   * @description The quantity of the benefit which have been consumed to date.
   */
  usedUnsignedInt?: number;

  /**
   * @description Extensions for usedUnsignedInt
   */
  _usedUnsignedInt?: IElement;

  /**
   * @description The quantity of the benefit which have been consumed to date.
   */
  usedMoney?: IMoney;
}
