import { IBackboneElement, IElement } from '../base';
import { ICodeableConcept } from '../datatypes';
import { IExplanationOfBenefitFinancial } from './IExplanationOfBenefitFinancial';

/**
 * @name IExplanationOfBenefitBenefitBalance
 * @description This resource provides: the claim details; adjudication details from the processing of a Claim; and optionally account balance information, for informing the subscriber of the benefits provided.
 * @see <a href="https://hl7.org/fhir/R4/explanationofbenefit-definitions.html#ExplanationOfBenefit.benefitBalance">ExplanationOfBenefitBenefitBalance</a>
 * @version R4
 * @extends {IBackboneElement}
 * @author Claudia Alarcón Lazo
 */
export interface IExplanationOfBenefitBenefitBalance extends IBackboneElement {
  /**
   * @description Code to identify the general type of benefits under which products and services are provided.
   */
  category: ICodeableConcept;

  /**
   * @description True if the indicated class of service is excluded from the plan, missing or False indicates the product or service is included in the coverage.
   */
  excluded?: boolean;

  /**
   * @description Extensions for excluded
   */
  _excluded?: IElement;

  /**
   * @description A short name or tag for the benefit.
   */
  name?: string;

  /**
   * @description Extensions for name
   */
  _name?: IElement;

  /**
   * @description A richer description of the benefit or services covered.
   */
  description?: string;

  /**
   * @description Extensions for description
   */
  _description?: IElement;

  /**
   * @description Is a flag to indicate whether the benefits refer to in-network providers or out-of-network providers.
   */
  network?: ICodeableConcept;

  /**
   * @description Indicates if the benefits apply to an individual or to the family.
   */
  unit?: ICodeableConcept;

  /**
   * @description The term or period of the values such as \u0027maximum lifetime benefit\u0027 or \u0027maximum annual visits\u0027.
   */
  term?: ICodeableConcept;

  /**
   * @description Benefits Used to date.
   */
  financial?: IExplanationOfBenefitFinancial[];
}
