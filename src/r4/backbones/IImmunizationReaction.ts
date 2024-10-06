import { IBackboneElement, IElement } from '../base';
import { IReference } from '../datatypes';

/**
 * @name IImmunizationReaction
 * @description Describes the event of a patient being administered a vaccine or a record of an immunization as reported by a patient, a clinician or another party.
 * @see <a href="https://hl7.org/fhir/R4/immunization-definitions.html#Immunization.reaction">ImmunizationReaction</a>
 * @version R4
 * @extends {IBackboneElement}
 * @uthor Claudia Alarcón Lazo
 */
export interface IImmunizationReaction extends IBackboneElement {
  /**
   * @description Date of reaction to the immunization.
   */
  date?: string;
  /**
   * @description Extensions for date
   */
  _date?: IElement;
  /**
   * @description Details of the reaction.
   */
  detail?: IReference;
  /**
   * @description Self-reported indicator.
   */
  reported?: boolean;
  /**
   * @description Extensions for reported
   */
  _reported?: IElement;
}
