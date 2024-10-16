import { IBackboneElement } from '../base';
import { ICodeableConcept } from '../datatypes';

/**
 * @name ICoverageEligibilityResponseError
 * @description This resource provides eligibility and plan details from the processing of an CoverageEligibilityRequest resource.
 * @see <a href="https://hl7.org/fhir/R4/coverageeligibilityresponse-definitions.html#CoverageEligibilityResponse.error">CoverageEligibilityResponseError</a>
 * @version R4
 * @extends {IBackboneElement}
 * @author Claudia Alarcón Lazo
 */
export interface ICoverageEligibilityResponseError extends IBackboneElement {
  /**
   * @description An error code,from a specified code system, which details why the eligibility check could not be performed.
   */
  code: ICodeableConcept;
}
