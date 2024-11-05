import { IBackboneElement, IElement } from '../base';
import { ICodeableConcept } from '../datatypes';
import { NoteTypeType } from '../types';

/**
 * @name IClaimResponseProcessNote
 * @description This resource provides the adjudication details from the processing of a Claim resource.
 * @see <a href="https://hl7.org/fhir/R4/claimresponse-definitions.html#ClaimResponse.processNote">ClaimResponseProcessNote</a>
 * @version R4
 * @extends {IBackboneElement}
 * @author Claudia Alarcón Lazo
 */
export interface IClaimResponseProcessNote extends IBackboneElement {
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
  text: string;

  /**
   * @description Extensions for text
   */
  _text?: IElement;

  /**
   * @description A code to define the language used in the text of the note.
   */
  language?: ICodeableConcept;
}
