import {
  IClaimResponseAddItem,
  IClaimResponseAdjudication,
  IClaimResponseError,
  IClaimResponseInsurance,
  IClaimResponseItem,
  IClaimResponsePayment,
  IClaimResponseProcessNote,
  IClaimResponseTotal,
} from '../backbones';
import { IDomainResource, IElement } from '../base';
import { IAttachment, ICodeableConcept, IIdentifier, IPeriod, IReference } from '../datatypes';
import { ClaimUseType, FmStatusType, RemittanceOutcomeType } from '../types';

/**
 * @name IClaimResponse
 * @description This resource provides the adjudication details from the processing of a Claim resource.
 * @see <a href="https://hl7.org/fhir/R4/claimresponse.html">ClaimResponse</a>
 * @version R4
 * @extends {IDomainResource}
 * @author Claudia Alarcón Lazo
 */
export interface IClaimResponse extends IDomainResource {
  /**
   * @description A unique identifier assigned to this claim response.
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
   * @description A finer grained suite of claim type codes which may convey additional information such as Inpatient vs Outpatient and/or a specialty service.
   */
  type: ICodeableConcept;

  /**
   * @description A finer grained suite of claim type codes which may convey additional information such as Inpatient vs Outpatient and/or a specialty service.
   */
  subType?: ICodeableConcept;

  /**
   * @description A code to indicate whether the nature of the request is: to request adjudication of products and services previously rendered; or requesting authorization and adjudication for provision in the future; or requesting the non-binding adjudication of the listed products and services which could be provided in the future.
   * @description claim | preauthorization | predetermination
   * @see <a href="https://hl7.org/fhir/R4/valueset-claim-use.html">ClaimUse</a>
   */
  use: ClaimUseType;

  /**
   * @description Extensions for use
   */
  _use?: IElement;

  /**
   * @description The party to whom the professional services and/or products have been supplied or are being considered and for whom actual for facast reimbursement is sought.
   */
  patient: IReference;

  /**
   * @description The date this resource was created.
   */
  created: string;

  /**
   * @description Extensions for created
   */
  _created?: IElement;

  /**
   * @description The party responsible for authorization, adjudication and reimbursement.
   */
  insurer: IReference;

  /**
   * @description The provider which is responsible for the claim, predetermination or preauthorization.
   */
  requestor?: IReference;

  /**
   * @description Original request resource reference.
   */
  request?: IReference;

  /**
   * @description The outcome of the claim, predetermination, or preauthorization processing.
   * @description queued | complete | error | partial
   * @see <a href="https://hl7.org/fhir/R4/valueset-remittance-outcome.html">RemittanceOutcome</a>
   */
  outcome: RemittanceOutcomeType;

  /**
   * @description Extensions for outcome
   */
  _outcome?: IElement;

  /**
   * @description A human readable description of the status of the adjudication.
   */
  disposition?: string;

  /**
   * @description Extensions for disposition
   */
  _disposition?: IElement;

  /**
   * @description Reference from the Insurer which is used in later communications which refers to this adjudication.
   */
  preAuthRef?: string;

  /**
   * @description Extensions for preAuthRef
   */
  _preAuthRef?: IElement;

  /**
   * @description The time frame during which this authorization is effective.
   */
  preAuthPeriod?: IPeriod;

  /**
   * @description Type of Party to be reimbursed: subscriber, provider, other.
   */
  payeeType?: ICodeableConcept;

  /**
   * @description A claim line. Either a simple (a product or service) or a \u0027group\u0027 of details which can also be a simple items or groups of sub-details.
   */
  item?: IClaimResponseItem[];

  /**
   * @description The first-tier service adjudications for payor added product or service lines.
   */
  addItem?: IClaimResponseAddItem[];

  /**
   * @description The adjudication results which are presented at the header level rather than at the line-item or add-item levels.
   */
  adjudication?: IClaimResponseAdjudication[];

  /**
   * @description Categorized monetary totals for the adjudication.
   */
  total?: IClaimResponseTotal[];

  /**
   * @description Payment details for the adjudication of the claim.
   */
  payment?: IClaimResponsePayment;

  /**
   * @description A code, used only on a response to a preauthorization, to indicate whether the benefits payable have been reserved and for whom.
   */
  fundsReserve?: ICodeableConcept;

  /**
   * @description A code for the form to be used for printing the content.
   */
  formCode?: ICodeableConcept;

  /**
   * @description The actual form, by reference or inclusion, for printing the content or an EOB.
   */
  form?: IAttachment;

  /**
   * @description A note that describes or explains adjudication results in a human readable form.
   */
  processNote?: IClaimResponseProcessNote[];

  /**
   * @description Request for additional supporting or authorizing information.
   */
  communicationRequest?: IReference[];

  /**
   * @description Financial instruments for reimbursement for the health care products and services specified on the claim.
   */
  insurance?: IClaimResponseInsurance[];

  /**
   * @description Errors encountered during the processing of the adjudication.
   */
  error?: IClaimResponseError[];
}
