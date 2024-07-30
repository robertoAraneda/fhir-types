import { IElement } from '../base';
import { ICoding } from './ICoding';

/**
 * @summary FHIR R4
 * @description Concept - reference to a terminology or just text.
 * @property {ICoding[]} coding - Code defined by a terminology system
 * @property {string} text - Plain text representation of the concept
 * @extends {IElement}
 * @see http://hl7.org/fhir/R4/datatypes.html#CodeableConcept http://hl7.org/fhir/R4/datatypes.html#CodeableConcept
 * @author Roberto Araneda
 */
export interface ICodeableConcept extends IElement {
  /**
   * @description Code defined by a terminology system
   */
  coding?: ICoding[];

  /**
   * @description Plain text representation of the concept
   */
  text?: string;

  /**
   * @description Extension of text element
   */
  _text?: IElement;
}
