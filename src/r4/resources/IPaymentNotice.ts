import { IDomainResource, IElement } from '../base';
import { ICodeableConcept, IIdentifier, IMoney, IReference } from '../datatypes';
import { FmStatusType } from '../types';

/**
 * @name IPaymentNotice
 * @description This resource provides the status of the payment for goods and services rendered, and the request and response resource references.
 * @see <a href="https://hl7.org/fhir/R4/paymentnotice.html">PaymentNotice</a>
 * @version R4
 * @extends {IDomainResource}
 * @author Claudia Alarcón Lazo
 */
export interface IPaymentNotice extends IDomainResource {
  /**
   * @description A unique identifier assigned to this payment notice.
   */
  identifier?: IIdentifier[];

  /**
   * @description The status of the resource instance.
   * @description active | cancelled | draft | entered-in-error
   * @see <a href="https://hl7.org/fhir/R4/valueset-fm-status.html">FmStatus</a>
   */
  status: FmStatusType;

  /**
   * @description Extensions for status
   */
  _status?: IElement;

  /**
   * @description Reference of resource for which payment is being made.
   */
  request?: IReference;

  /**
   * @description Reference of response to resource for which payment is being made.
   */
  response?: IReference;

  /**
   * @description The date when this resource was created.
   */
  created: string;

  /**
   * @description Extensions for created
   */
  _created?: IElement;

  /**
   * @description The practitioner who is responsible for the services rendered to the patient.
   */
  provider?: IReference;

  /**
   * @description A reference to the payment which is the subject of this notice.
   */
  payment: IReference;

  /**
   * @description The date when the above payment action occurred.
   */
  paymentDate?: string;

  /**
   * @description Extensions for paymentDate
   */
  _paymentDate?: IElement;

  /**
   * @description The party who will receive or has received payment that is the subject of this notification.
   */
  payee?: IReference;

  /**
   * @description The party who is notified of the payment status.
   */
  recipient: IReference;

  /**
   * @description The amount sent to the payee.
   */
  amount: IMoney;

  /**
   * @description A code indicating whether payment has been sent or cleared.
   */
  paymentStatus?: ICodeableConcept;
}
