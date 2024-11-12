import { IBackboneElement, IElement } from '../base';
import { ICodeableConcept, IReference } from '../datatypes';

/**
 * @name IExplanationOfBenefitCareTeam
 * @description This resource provides: the claim details; adjudication details from the processing of a Claim; and optionally account balance information, for informing the subscriber of the benefits provided.
 * @see <a href="https://hl7.org/fhir/R4/explanationofbenefit-definitions.html#ExplanationOfBenefit.careTeam">ExplanationOfBenefitCareTeam</a>
 * @version R4
 * @extends {IBackboneElement}
 * @author Claudia Alarcón Lazo
 */
export interface IExplanationOfBenefitCareTeam extends IBackboneElement {
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
