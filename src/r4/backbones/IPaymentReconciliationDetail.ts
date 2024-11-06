import { IBackboneElement, IElement } from '../base';
import { ICodeableConcept, IIdentifier, IMoney, IReference } from '../datatypes';

/**
 * @name IPaymentReconciliationDetail
 * @description This resource provides the details including amount of a payment and allocates the payment items being paid.
 * @see <a href="https://hl7.org/fhir/R4/paymentreconciliation-definitions.html#PaymentReconciliation.detail">PaymentReconciliationDetail</a>
 * @version R4
 * @extends {IBackboneElement}
 * @author Claudia Alarcón Lazo
 */
export interface IPaymentReconciliationDetail extends IBackboneElement {
  /**
   * @description Unique identifier for the current payment item for the referenced payable.
   */
  identifier?: IIdentifier;

  /**
   * @description Unique identifier for the prior payment item for the referenced payable.
   */
  predecessor?: IIdentifier;

  /**
   * @description Code to indicate the nature of the payment.
   */
  type: ICodeableConcept;

  /**
   * @description A resource, such as a Claim, the evaluation of which could lead to payment.
   */
  request?: IReference;

  /**
   * @description The party which submitted the claim or financial transaction.
   */
  submitter?: IReference;

  /**
   * @description A resource, such as a ClaimResponse, which contains a commitment to payment.
   */
  response?: IReference;

  /**
   * @description The date from the response resource containing a commitment to pay.
   */
  date?: string;

  /**
   * @description Extensions for date
   */
  _date?: IElement;

  /**
   * @description A reference to the individual who is responsible for inquiries regarding the response and its payment.
   */
  responsible?: IReference;

  /**
   * @description The party which is receiving the payment.
   */
  payee?: IReference;

  /**
   * @description The monetary amount allocated from the total payment to the payable.
   */
  amount?: IMoney;
}
