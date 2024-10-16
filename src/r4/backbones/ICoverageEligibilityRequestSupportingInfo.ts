import { IBackboneElement, IElement } from '../base';
import { IReference } from '../datatypes';

/**
 * @name ICoverageEligibilityRequestSupportingInfo
 * @description The CoverageEligibilityRequest provides patient and insurance coverage information to an insurer for them to respond, in the form of an CoverageEligibilityResponse, with information regarding whether the stated coverage is valid and in-force and optionally to provide the insurance details of the policy.
 * @see <a href="https://hl7.org/fhir/R4/coverageeligibilityrequest-definitions.html#CoverageEligibilityRequest.supportingInfo">CoverageEligibilityRequestSupportingInfo</a>
 * @version R4
 * @extends { BackboneElement }
 * @author Claudia Alarcón Lazo
 */
export interface ICoverageEligibilityRequestSupportingInfo extends IBackboneElement {
  /**
   * @description A number to uniquely identify supporting information entries.
   */
  sequence: number;

  /**
   * @description Extensions for sequence
   */
  _sequence?: IElement;

  /**
   * @description Additional data or information such as resources, documents, images etc. including references to the data or the actual inclusion of the data.
   */
  information: IReference;

  /**
   * @description The supporting materials are applicable for all detail items, product/servce categories and specific billing codes.
   */
  appliesToAll?: boolean;

  /**
   * @description Extensions for appliesToAll
   */
  _appliesToAll?: IElement;
}
