import { IBackboneElement, IElement } from '../base';
import { IAddress, ICodeableConcept, IReference } from '../datatypes';

/**
 * @name IExplanationOfBenefitAccident
 * @description This resource provides: the claim details; adjudication details from the processing of a Claim; and optionally account balance information, for informing the subscriber of the benefits provided.
 * @see <a href="https://hl7.org/fhir/R4/explanationofbenefit-definitions.html#ExplanationOfBenefit.accident">ExplanationOfBenefitAccident</a>
 * @version R4
 * @extends {IBackboneElement}
 * @author Claudia Alarcón Lazo
 */
export interface IExplanationOfBenefitAccident extends IBackboneElement {
  /**
   * @description Date of an accident event  related to the products and services contained in the claim.
   */
  date?: string;

  /**
   * @description Extensions for date
   */
  _date?: IElement;

  /**
   * @description The type or context of the accident event for the purposes of selection of potential insurance coverages and determination of coordination between insurers.
   */
  type?: ICodeableConcept;

  /**
   * @description The physical location of the accident event.
   */
  locationAddress?: IAddress;

  /**
   * @description The physical location of the accident event.
   */
  locationReference?: IReference;
}
