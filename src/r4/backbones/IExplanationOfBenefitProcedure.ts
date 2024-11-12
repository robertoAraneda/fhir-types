import { IBackboneElement, IElement } from '../base';
import { ICodeableConcept, IReference } from '../datatypes';

/**
 * @name IExplanationOfBenefitProcedure
 * @description This resource provides: the claim details; adjudication details from the processing of a Claim; and optionally account balance information, for informing the subscriber of the benefits provided.
 * @see <a href="https://hl7.org/fhir/R4/explanationofbenefit-definitions.html#ExplanationOfBenefit.procedure">ExplanationOfBenefitProcedure</a>
 * @version R4
 * @extends {IBackboneElement}
 * @author Claudia Alarcón Lazo
 */
export interface IExplanationOfBenefitProcedure extends IBackboneElement {
  /**
   * @description A number to uniquely identify procedure entries.
   */
  sequence: number;

  /**
   * @description Extensions for sequence
   */
  _sequence?: IElement;

  /**
   * @description When the condition was observed or the relative ranking.
   */
  type?: ICodeableConcept[];

  /**
   * @description Date and optionally time the procedure was performed.
   */
  date?: string;

  /**
   * @description Extensions for date
   */
  _date?: IElement;

  /**
   * @description The code or reference to a Procedure resource which identifies the clinical intervention performed.
   */
  procedureCodeableConcept?: ICodeableConcept;

  /**
   * @description The code or reference to a Procedure resource which identifies the clinical intervention performed.
   */
  procedureReference?: IReference;

  /**
   * @description Unique Device Identifiers associated with this line item.
   */
  udi?: IReference[];
}
