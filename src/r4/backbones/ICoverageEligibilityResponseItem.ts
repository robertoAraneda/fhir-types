import { IBackboneElement, IElement } from '../base';
import { ICodeableConcept, IReference } from '../datatypes';
import { ICoverageEligibilityResponseBenefit } from './ICoverageEligibilityResponseBenefit';

/**
 * @name ICoverageEligibilityResponseItem
 * @description This resource provides eligibility and plan details from the processing of an CoverageEligibilityRequest resource.
 * @see <a href="https://hl7.org/fhir/R4/coverageeligibilityresponse-definitions.html#CoverageEligibilityResponse.insurance.item">CoverageEligibilityResponseItem</a>
 * @version R4
 * @extends {IBackboneElement}
 * @author Claudia Alarcón Lazo
 */
export interface ICoverageEligibilityResponseItem extends IBackboneElement {
  /**
   * @description Code to identify the general type of benefits under which products and services are provided.
   */
  category?: ICodeableConcept;

  /**
   * @description This contains the product, service, drug or other billing code for the item.
   */
  productOrService?: ICodeableConcept;

  /**
   * @description Item typification or modifiers codes to convey additional context for the product or service.
   */
  modifier?: ICodeableConcept[];

  /**
   * @description The practitioner who is eligible for the provision of the product or service.
   */
  provider?: IReference;

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
   * @description Benefits used to date.
   */
  benefit?: ICoverageEligibilityResponseBenefit[];

  /**
   * @description A boolean flag indicating whether a preauthorization is required prior to actual service delivery.
   */
  authorizationRequired?: boolean;

  /**
   * @description Extensions for authorizationRequired
   */
  _authorizationRequired?: IElement;

  /**
   * @description Codes or comments regarding information or actions associated with the preauthorization.
   */
  authorizationSupporting?: ICodeableConcept[];

  /**
   * @description A web location for obtaining requirements or descriptive information regarding the preauthorization.
   */
  authorizationUrl?: string;

  /**
   * @description Extensions for authorizationUrl
   */
  _authorizationUrl?: IElement;
}
