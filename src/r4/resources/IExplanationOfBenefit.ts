import {
  IExplanationOfBenefitAccident,
  IExplanationOfBenefitAddItem,
  IExplanationOfBenefitAdjudication,
  IExplanationOfBenefitBenefitBalance,
  IExplanationOfBenefitCareTeam,
  IExplanationOfBenefitDiagnosis,
  IExplanationOfBenefitItem,
  IExplanationOfBenefitPayee,
  IExplanationOfBenefitPayment,
  IExplanationOfBenefitProcedure,
  IExplanationOfBenefitProcessNote,
  IExplanationOfBenefitRelated,
  IExplanationOfBenefitSupportingInfo,
  IExplanationOfBenefitTotal,
} from '../backbones';
import { IExplanationOfBenefitInsurance } from '../backbones/IExplanationOfBenefitInsurance';
import { IDomainResource, IElement } from '../base';
import { IAttachment, ICodeableConcept, IIdentifier, IPeriod, IReference } from '../datatypes';
import { ClaimUseType, ExplanationOfBenefitStatusType, RemittanceOutcomeType } from '../types';

/**
 * @name IExplanationOfBenefit
 * @description This resource provides: the claim details; adjudication details from the processing of a Claim; and optionally account balance information, for informing the subscriber of the benefits provided.
 * @see <a href="https://hl7.org/fhir/R4/explanationofbenefit.html">ExplanationOfBenefit</a>
 * @version R4
 * @extends {IDomainResource}
 * @author Claudia Alarcón Lazo
 */
export interface IExplanationOfBenefit extends IDomainResource {
  /**
   * @description A unique identifier assigned to this explanation of benefit.
   */
  identifier?: IIdentifier[];

  /**
   * @description The status of the resource instance.
   * @description active | cancelled | draft | entered-in-error
   * @see <a href="https://hl7.org/fhir/R4/valueset-explanationofbenefit-status.html">ExplanationOfBenefitStatus</a>
   */
  status: ExplanationOfBenefitStatusType;

  /**
   * @description Extensions for status
   */
  _status?: IElement;

  /**
   * @description The category of claim, e.g. oral, pharmacy, vision, institutional, professional.
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
   * @description The party to whom the professional services and/or products have been supplied or are being considered and for whom actual for forecast reimbursement is sought.
   */
  patient: IReference;

  /**
   * @description The period for which charges are being submitted.
   */
  billablePeriod?: IPeriod;

  /**
   * @description The date this resource was created.
   */
  created: string;

  /**
   * @description Extensions for created
   */
  _created?: IElement;

  /**
   * @description Individual who created the claim, predetermination or preauthorization.
   */
  enterer?: IReference;

  /**
   * @description The party responsible for authorization, adjudication and reimbursement.
   */
  insurer: IReference;

  /**
   * @description The provider which is responsible for the claim, predetermination or preauthorization.
   */
  provider: IReference;

  /**
   * @description The provider-required urgency of processing the request. Typical values include: stat, routine deferred.
   */
  priority?: ICodeableConcept;

  /**
   * @description A code to indicate whether and for whom funds are to be reserved for future claims.
   */
  fundsReserveRequested?: ICodeableConcept;

  /**
   * @description A code, used only on a response to a preauthorization, to indicate whether the benefits payable have been reserved and for whom.
   */
  fundsReserve?: ICodeableConcept;

  /**
   * @description Other claims which are related to this claim such as prior submissions or claims for related services or for the same event.
   */
  related?: IExplanationOfBenefitRelated[];

  /**
   * @description Prescription to support the dispensing of pharmacy, device or vision products.
   */
  prescription?: IReference;

  /**
   * @description Original prescription which has been superseded by this prescription to support the dispensing of pharmacy services, medications or products.
   */
  originalPrescription?: IReference;

  /**
   * @description The party to be reimbursed for cost of the products and services according to the terms of the policy.
   */
  payee?: IExplanationOfBenefitPayee;

  /**
   * @description A reference to a referral resource.
   */
  referral?: IReference;

  /**
   * @description Facility where the services were provided.
   */
  facility?: IReference;

  /**
   * @description The business identifier for the instance of the adjudication request: claim predetermination or preauthorization.
   */
  claim?: IReference;

  /**
   * @description The business identifier for the instance of the adjudication response: claim, predetermination or preauthorization response.
   */
  claimResponse?: IReference;

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
  preAuthRef?: string[];

  /**
   * @description Extensions for preAuthRef
   */
  _preAuthRef?: IElement[];

  /**
   * @description The timeframe during which the supplied preauthorization reference may be quoted on claims to obtain the adjudication as provided.
   */
  preAuthPeriod?: IPeriod[];

  /**
   * @description The members of the team who provided the products and services.
   */
  careTeam?: IExplanationOfBenefitCareTeam[];

  /**
   * @description Additional information codes regarding exceptions, special considerations, the condition, situation, prior or concurrent issues.
   */
  supportingInfo?: IExplanationOfBenefitSupportingInfo[];

  /**
   * @description Information about diagnoses relevant to the claim items.
   */
  diagnosis?: IExplanationOfBenefitDiagnosis[];

  /**
   * @description Procedures performed on the patient relevant to the billing items with the claim.
   */
  procedure?: IExplanationOfBenefitProcedure[];

  /**
   * @description This indicates the relative order of a series of EOBs related to different coverages for the same suite of services.
   */
  precedence?: number;

  /**
   * @description Extensions for precedence
   */
  _precedence?: IElement;

  /**
   * @description Financial instruments for reimbursement for the health care products and services specified on the claim.
   */
  insurance: IExplanationOfBenefitInsurance[];

  /**
   * @description Details of a accident which resulted in injuries which required the products and services listed in the claim.
   */
  accident?: IExplanationOfBenefitAccident;

  /**
   * @description A claim line. Either a simple (a product or service) or a \u0027group\u0027 of details which can also be a simple items or groups of sub-details.
   */
  item?: IExplanationOfBenefitItem[];

  /**
   * @description The first-tier service adjudications for payor added product or service lines.
   */
  addItem?: IExplanationOfBenefitAddItem[];

  /**
   * @description The adjudication results which are presented at the header level rather than at the line-item or add-item levels.
   */
  adjudication?: IExplanationOfBenefitAdjudication[];

  /**
   * @description Categorized monetary totals for the adjudication.
   */
  total?: IExplanationOfBenefitTotal[];

  /**
   * @description Payment details for the adjudication of the claim.
   */
  payment?: IExplanationOfBenefitPayment;

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
  processNote?: IExplanationOfBenefitProcessNote[];

  /**
   * @description The term of the benefits documented in this response.
   */
  benefitPeriod?: IPeriod;

  /**
   * @description Balance by Benefit Category.
   */
  benefitBalance?: IExplanationOfBenefitBenefitBalance[];
}
