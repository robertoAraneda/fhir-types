import {
  IClaimAccident,
  IClaimCareTeam,
  IClaimDiagnosis,
  IClaimInsurance,
  IClaimItem,
  IClaimPayee,
  IClaimProcedure,
  IClaimRelated,
  IClaimSupportingInfo,
} from '../backbones';
import { IDomainResource, IElement } from '../base';
import { ICodeableConcept, IIdentifier, IMoney, IPeriod, IReference } from '../datatypes';
import { ClaimUseType, FmStatusType } from '../types';

/**
 * @name IClaim
 * @description A provider issued list of professional services and products which have been provided, or are to be provided, to a patient which is sent to an insurer for reimbursement.
 * @see <a href="https://hl7.org/fhir/R4/claim.html">Claim</a>
 * @version R4
 * @extends {IDomainResource}
 * @author Claudia Alarcón Lazo
 */
export interface IClaim extends IDomainResource {
  /**
   * @description A unique identifier assigned to this claim.
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
   * @description The party to whom the professional services and/or products have been supplied or are being considered and for whom actual or forecast reimbursement is sought.
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
   * @description The Insurer who is target of the request.
   */
  insurer?: IReference;

  /**
   * @description The provider which is responsible for the claim, predetermination or preauthorization.
   */
  provider: IReference;

  /**
   * @description The provider-required urgency of processing the request. Typical values include: stat, routine deferred.
   */
  priority: ICodeableConcept;

  /**
   * @description A code to indicate whether and for whom funds are to be reserved for future claims.
   */
  fundsReserve?: ICodeableConcept;

  /**
   * @description Other claims which are related to this claim such as prior submissions or claims for related services or for the same event.
   */
  related?: IClaimRelated[];

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
  payee?: IClaimPayee;

  /**
   * @description A reference to a referral resource.
   */
  referral?: IReference;

  /**
   * @description Facility where the services were provided.
   */
  facility?: IReference;

  /**
   * @description The members of the team who provided the products and services.
   */
  careTeam?: IClaimCareTeam[];

  /**
   * @description Additional information codes regarding exceptions, special considerations, the condition, situation, prior or concurrent issues.
   */
  supportingInfo?: IClaimSupportingInfo[];

  /**
   * @description Information about diagnoses relevant to the claim items.
   */
  diagnosis?: IClaimDiagnosis[];

  /**
   * @description Procedures performed on the patient relevant to the billing items with the claim.
   */
  procedure?: IClaimProcedure[];

  /**
   * @description Financial instruments for reimbursement for the health care products and services specified on the claim.
   */
  insurance?: IClaimInsurance[];

  /**
   * @description Details of an accident which resulted in injuries which required the products and services listed in the claim.
   */
  accident?: IClaimAccident;

  /**
   * @description A claim line. Either a simple  product or service or a \u0027group\u0027 of details which can each be a simple items or groups of sub-details.
   */
  item?: IClaimItem[];

  /**
   * @description The total value of the all the items in the claim.
   */
  total?: IMoney;
}
