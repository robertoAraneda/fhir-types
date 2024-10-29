import { IDomainResource, IElement } from '../base';
import { IIdentifier, IReference } from '../datatypes';
import { FmStatusType, RemittanceOutcomeType } from '../types';

/**
 * @name IEnrollmentResponse
 * @description This resource provides enrollment and plan details from the processing of an EnrollmentRequest resource.
 * @see <a href="https://hl7.org/fhir/R4/enrollmentresponse.html">EnrollmentResponse</a>
 * @version R4
 * @extends {DomainResource}
 * @author Claudia Alarcón Lazo
 */
export interface IEnrollmentResponse extends IDomainResource {
  /**
   * @description The Response business identifier.
   */
  identifier?: IIdentifier[];

  /**
   * @description The status of the resource instance.
   * @description active | cancelled | draft | entered-in-error
   * @see <a href="https://hl7.org/fhir/R4/valueset-fm-status.html">FmStatus</a>
   */
  status?: FmStatusType;

  /**
   * @description Extensions for status
   */
  _status?: IElement;

  /**
   * @description Original request resource reference.
   */
  request?: IReference;

  /**
   * @description Processing status: error, complete.
   * @description queued | complete | error | partial
   * @see <a href="https://hl7.org/fhir/R4/valueset-remittance-outcome.html">RemittanceOutcome</a>
   */
  outcome?: RemittanceOutcomeType;

  /**
   * @description Extensions for outcome
   */
  _outcome?: IElement;

  /**
   * @description A description of the status of the adjudication.
   */
  disposition?: string;

  /**
   * @description Extensions for disposition
   */
  _disposition?: IElement;

  /**
   * @description The date when the enclosed suite of services were performed or completed.
   */
  created?: string;

  /**
   * @description Extensions for created
   */
  _created?: IElement;

  /**
   * @description The Insurer who produced this adjudicated response.
   */
  organization?: IReference;

  /**
   * @description The practitioner who is responsible for the services rendered to the patient.
   */
  requestProvider?: IReference;
}
