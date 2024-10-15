import { IBackboneElement, IElement } from '../base';
import { ICodeableConcept, IMoney } from '../datatypes';

/**
 * @name ICoverageEligibilityResponseBenefit
 * @description This resource provides eligibility and plan details from the processing of an CoverageEligibilityRequest resource.
 * @see <a href="https://hl7.org/fhir/R4/coverageeligibilityresponse-definitions.html#CoverageEligibilityResponse.insurance.item.benefit">CoverageEligibilityResponseBenefit</a>
 * @version R4
 * @extends {IBackboneElement}
 * @author Claudia Alarcón Lazo
 */
export interface ICoverageEligibilityResponseBenefit extends IBackboneElement {
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
  usedString?: string;

  /**
   * @description Extensions for usedString
   */
  _usedString?: IElement;

  /**
   * @description The quantity of the benefit which have been consumed to date.
   */
  usedMoney?: IMoney;
}
