import { IPaymentReconciliationDetail, IPaymentReconciliationProcessNote } from '../backbones';
import { IDomainResource, IElement } from '../base';
import { ICodeableConcept, IIdentifier, IMoney, IPeriod, IReference } from '../datatypes';
import { FmStatusType, RemittanceOutcomeType } from '../types';

/**
 * @name IPaymentReconciliation
 * @description This resource provides the details including amount of a payment and allocates the payment items being paid.
 * @see <a href="https://hl7.org/fhir/R4/paymentreconciliation.html">PaymentReconciliation</a>
 * @version R4
 * @extends {IDomainResource}
 * @author Claudia Alarcón Lazo
 */
export interface IPaymentReconciliation extends IDomainResource {
  /**
   * @description A unique identifier assigned to this payment reconciliation.
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
   * @description The period of time for which payments have been gathered into this bulk payment for settlement.
   */
  period?: IPeriod;

  /**
   * @description The date when the resource was created.
   */
  created: string;

  /**
   * @description Extensions for created
   */
  _created?: IElement;

  /**
   * @description The party who generated the payment.
   */
  paymentIssuer?: IReference;

  /**
   * @description Original request resource reference.
   */
  request?: IReference;

  /**
   * @description The practitioner who is responsible for the services rendered to the patient.
   */
  requestor?: IReference;

  /**
   * @description The outcome of a request for a reconciliation.
   * @description queued | complete | error | partial
   * @see <a href="https://hl7.org/fhir/R4/valueset-remittance-outcome.html">RemittanceOutcome</a>
   */
  outcome?: RemittanceOutcomeType;

  /**
   * @description Extensions for outcome
   */
  _outcome?: IElement;

  /**
   * @description A human readable description of the status of the request for the reconciliation.
   */
  disposition?: string;

  /**
   * @description Extensions for disposition
   */
  _disposition?: IElement;

  /**
   * @description The date of payment as indicated on the financial instrument.
   */
  paymentDate: string;

  /**
   * @description Extensions for paymentDate
   */
  _paymentDate?: IElement;

  /**
   * @description Total payment amount as indicated on the financial instrument.
   */
  paymentAmount: IMoney;

  /**
   * @description Issuer\u0027s unique identifier for the payment instrument.
   */
  paymentIdentifier?: IIdentifier;

  /**
   * @description Distribution of the payment amount for a previously acknowledged payable.
   */
  detail?: IPaymentReconciliationDetail[];

  /**
   * @description A code for the form to be used for printing the content.
   */
  formCode?: ICodeableConcept;

  /**
   * @description A note that describes or explains the processing in a human readable form.
   */
  processNote?: IPaymentReconciliationProcessNote[];
}
