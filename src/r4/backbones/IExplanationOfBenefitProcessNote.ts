import { IBackboneElement, IElement } from '../base';
import { ICodeableConcept } from '../datatypes';
import { NoteTypeType } from '../types';

/**
 * @name IExplanationOfBenefitProcessNote
 * @description This resource provides: the claim details; adjudication details from the processing of a Claim; and optionally account balance information, for informing the subscriber of the benefits provided.
 * @see <a href="https://hl7.org/fhir/R4/explanationofbenefit-definitions.html#ExplanationOfBenefit.processNote">ExplanationOfBenefitProcessNote</a>
 * @version R4
 * @extends {IBackboneElement}
 * @author Claudia Alarcón Lazo
 */
export interface IExplanationOfBenefitProcessNote extends IBackboneElement {
  /**
   * @description A number to uniquely identify a note entry.
   */
  number?: number;

  /**
   * @description Extensions for number
   */
  _number?: IElement;

  /**
   * @description The business purpose of the note text.
   * @description display | print | printoper
   * @see <a href="https://hl7.org/fhir/R4/valueset-note-type.html">NoteType</a>
   */
  type?: NoteTypeType;

  /**
   * @description Extensions for type
   */
  _type?: IElement;

  /**
   * @description The explanation or description associated with the processing.
   */
  text?: string;

  /**
   * @description Extensions for text
   */
  _text?: IElement;

  /**
   * @description A code to define the language used in the text of the note.
   */
  language?: ICodeableConcept;
}
