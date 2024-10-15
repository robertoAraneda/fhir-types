import {
  ICoverageEligibilityRequestInsurance,
  ICoverageEligibilityRequestItem,
  ICoverageEligibilityRequestSupportingInfo,
} from '../backbones';
import { IDomainResource, IElement } from '../base';
import { ICodeableConcept, IIdentifier, IPeriod, IReference } from '../datatypes';
import { EligibilityRequestPurposeType, FmStatusType } from '../types';

/**
 * @name ICoverageEligibilityRequest
 * @description The CoverageEligibilityRequest provides patient and insurance coverage information to an insurer for them to respond, in the form of an CoverageEligibilityResponse, with information regarding whether the stated coverage is valid and in-force and optionally to provide the insurance details of the policy.
 * @see <a href="https://hl7.org/fhir/R4/coverageeligibilityrequest.html">CoverageEligibilityRequest</a>
 * @version R4
 * @extends {IDomainResource}
 * @author Claudia Alarcón Lazo
 */
export interface ICoverageEligibilityRequest extends IDomainResource {
  /**
   * @description A unique identifier assigned to this coverage eligiblity request.
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
   * @description When the requestor expects the processor to complete processing.
   */
  priority?: ICodeableConcept;

  /**
   * @description Code to specify whether requesting: prior authorization requirements for some service categories or billing codes; benefits for coverages specified or discovered; discovery and return of coverages for the patient; and/or validation that the specified coverage is in-force at the date/period specified or \u0027now\u0027 if not specified.
   * @description auth-requirements | benefits | discovery | validation
   * @see <a href="https://hl7.org/fhir/R4/valueset-eligibilityrequest-purpose.html">EligibilityRequestPurpose</a>
   */
  purpose?: EligibilityRequestPurposeType[];

  /**
   * @description Extensions for purpose
   */
  _purpose?: IElement[];

  /**
   * @description The party who is the beneficiary of the supplied coverage and for whom eligibility is sought.
   */
  patient: IReference;

  /**
   * @description The date or dates when the enclosed suite of services were performed or completed.
   */
  servicedDate?: string;

  /**
   * @description Extensions for servicedDate
   */
  _servicedDate?: IElement;

  /**
   * @description The date or dates when the enclosed suite of services were performed or completed.
   */
  servicedPeriod?: IPeriod;

  /**
   * @description The date when this resource was created.
   */
  created: string;

  /**
   * @description Extensions for created
   */
  _created?: IElement;

  /**
   * @description Person who created the request.
   */
  enterer?: IReference;

  /**
   * @description The provider which is responsible for the request.
   */
  provider?: IReference;

  /**
   * @description The Insurer who issued the coverage in question and is the recipient of the request.
   */
  insurer: IReference;

  /**
   * @description Facility where the services are intended to be provided.
   */
  facility?: IReference;

  /**
   * @description Additional information codes regarding exceptions, special considerations, the condition, situation, prior or concurrent issues.
   */
  supportingInfo?: ICoverageEligibilityRequestSupportingInfo[];

  /**
   * @description Financial instruments for reimbursement for the health care products and services.
   */
  insurance?: ICoverageEligibilityRequestInsurance[];

  /**
   * @description Service categories or billable services for which benefit details and/or an authorization prior to service delivery may be required by the payor.
   */
  item?: ICoverageEligibilityRequestItem[];
}
