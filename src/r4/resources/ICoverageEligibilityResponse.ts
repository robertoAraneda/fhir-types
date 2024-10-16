import { ICoverageEligibilityResponseError, ICoverageEligibilityResponseInsurance } from '../backbones';
import { IDomainResource, IElement } from '../base';
import { ICodeableConcept, IIdentifier, IPeriod, IReference } from '../datatypes';
import { EligibilityResponsePurposeType, FmStatusType, RemittanceOutcomeType } from '../types';

/**
 * @name ICoverageEligibilityResponse
 * @description This resource provides eligibility and plan details from the processing of an CoverageEligibilityRequest resource.
 * @see <a href="https://hl7.org/fhir/R4/coverageeligibilityresponse.html">CoverageEligibilityResponse</a>
 * @version R4
 * @extends {IDomainResource}
 * @author Claudia Alarcón Lazo
 */
export interface ICoverageEligibilityResponse extends IDomainResource {
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
   * @description Code to specify whether requesting: prior authorization requirements for some service categories or billing codes; benefits for coverages specified or discovered; discovery and return of coverages for the patient; and/or validation that the specified coverage is in-force at the date/period specified or \u0027now\u0027 if not specified.
   * @description auth-requirements | benefits | discovery | validation
   * @see <a href="https://hl7.org/fhir/R4/valueset-eligibilityresponse-purpose.html">EligibilityResponsePurpose</a>
   */
  purpose: EligibilityResponsePurposeType[];

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
   * @description The date this resource was created.
   */
  created: string;

  /**
   * @description Extensions for created
   */
  _created?: IElement;

  /**
   * @description The provider which is responsible for the request.
   */
  requestor?: IReference;

  /**
   * @description Reference to the original request resource.
   */
  request: IReference;

  /**
   * @description The outcome of the request processing.
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
   * @description The Insurer who issued the coverage in question and is the author of the response.
   */
  insurer: IReference;

  /**
   * @description Financial instruments for reimbursement for the health care products and services.
   */
  insurance?: ICoverageEligibilityResponseInsurance[];

  /**
   * @description A reference from the Insurer to which these services pertain to be used on further communication and as proof that the request occurred.
   */
  preAuthRef?: string;

  /**
   * @description Extensions for preAuthRef
   */
  _preAuthRef?: IElement;

  /**
   * @description A code for the form to be used for printing the content.
   */
  form?: ICodeableConcept;

  /**
   * @description Errors encountered during the processing of the request.
   */
  error?: ICoverageEligibilityResponseError[];
}
