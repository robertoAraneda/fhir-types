import { IBackboneElement, IElement } from '../base';
import { IReference } from '../datatypes';

/**
 * @name IClaimResponseInsurance
 * @description This resource provides the adjudication details from the processing of a Claim resource.
 * @see <a href="https://hl7.org/fhir/R4/claimresponse-definitions.html#ClaimResponse.insurance">ClaimResponseInsurance</a>
 * @version R4
 * @extends {IBackboneElement}
 * @author Claudia Alarcón Lazo
 */
export interface IClaimResponseInsurance extends IBackboneElement {
  /**
   * @description A number to uniquely identify insurance entries and provide a sequence of coverages to convey coordination of benefit order.
   */
  sequence: number;

  /**
   * @description Extensions for sequence
   */
  _sequence?: IElement;

  /**
   * @description A flag to indicate that this Coverage is to be used for adjudication of this claim when set to true.
   */
  focal: boolean;

  /**
   * @description Extensions for focal
   */
  _focal?: IElement;

  /**
   * @description Reference to the insurance card level information contained in the Coverage resource. The coverage issuing insurer will use these details to locate the patient\u0027s actual coverage within the insurer\u0027s information system.
   */
  coverage: IReference;

  /**
   * @description A business agreement number established between the provider and the insurer for special business processing purposes.
   */
  businessArrangement?: string;

  /**
   * @description Extensions for businessArrangement
   */
  _businessArrangement?: IElement;

  /**
   * @description The result of the adjudication of the line items for the Coverage specified in this insurance.
   */
  claimResponse?: IReference;
}
