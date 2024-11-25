import { IBackboneElement, IElement } from '../base';
import { IIdentifier, IReference } from '../datatypes';

/**
 * @name IClaimInsurance
 * @description A provider issued list of professional services and products which have been provided, or are to be provided, to a patient which is sent to an insurer for reimbursement.
 * @see <a href="https://hl7.org/fhir/R4/claim-definitions.html#Claim.insurance">ClaimInsurance</a>
 * @version R4
 * @extends {IBackboneElement}
 * @author Claudia Alarcón Lazo
 */
export interface IClaimInsurance extends IBackboneElement {
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
   * @description The business identifier to be used when the claim is sent for adjudication against this insurance policy.
   */
  identifier?: IIdentifier;

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
   * @description Reference numbers previously provided by the insurer to the provider to be quoted on subsequent claims containing services or products related to the prior authorization.
   */
  preAuthRef?: string[];

  /**
   * @description Extensions for preAuthRef
   */
  _preAuthRef?: IElement[];

  /**
   * @description The result of the adjudication of the line items for the Coverage specified in this insurance.
   */
  claimResponse?: IReference;
}
