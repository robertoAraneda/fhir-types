import { IDomainResource, IElement } from '../base';
import { IIdentifier, IReference } from '../datatypes';
import { FmStatusType } from '../types';

/**
 * @name IEnrollmentRequest
 * @description This resource provides the insurance enrollment details to the insurer regarding a specified coverage.
 * @see <a href="https://hl7.org/fhir/R4/enrollmentrequest.html">EnrollmentRequest</a>
 * @version R4
 * @extends {DomainResource}
 * @author Claudia Alarcón Lazo
 */
export interface IEnrollmentRequest extends IDomainResource {
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
   * @description The date when this resource was created.
   */
  created?: string;

  /**
   * @description Extensions for created
   */
  _created?: IElement;

  /**
   * @description The Insurer who is target  of the request.
   */
  insurer?: IReference;

  /**
   * @description The practitioner who is responsible for the services rendered to the patient.
   */
  provider?: IReference;

  /**
   * @description Patient Resource.
   */
  candidate?: IReference;

  /**
   * @description Reference to the program or plan identification, underwriter or payor.
   */
  coverage?: IReference;
}
