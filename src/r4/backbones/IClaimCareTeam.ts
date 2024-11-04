import { IBackboneElement, IElement } from '../base';
import { ICodeableConcept, IReference } from '../datatypes';

/**
 * @name IClaimCareTeam
 * @description A provider issued list of professional services and products which have been provided, or are to be provided, to a patient which is sent to an insurer for reimbursement.
 * @see <a href="https://hl7.org/fhir/R4/claim-definitions.html#Claim.careTeam">ClaimCareTeam</a>
 * @version R4
 * @extends {IBackboneElement}
 * @author Claudia Alarcón Lazo
 */
export interface IClaimCareTeam extends IBackboneElement {
  /**
   * @description A number to uniquely identify care team entries.
   */
  sequence: number;

  /**
   * @description Extensions for sequence
   */
  _sequence?: IElement;

  /**
   * @description Member of the team who provided the product or service.
   */
  provider: IReference;

  /**
   * @description The party who is billing and/or responsible for the claimed products or services.
   */
  responsible?: boolean;

  /**
   * @description Extensions for responsible
   */
  _responsible?: IElement;

  /**
   * @description The lead, assisting or supervising practitioner and their discipline if a multidisciplinary team.
   */
  role?: ICodeableConcept;

  /**
   * @description The qualification of the practitioner which is applicable for this service.
   */
  qualification?: ICodeableConcept;
}
