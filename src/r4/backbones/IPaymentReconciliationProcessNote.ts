import { IBackboneElement, IElement } from '../base';
import { NoteTypeType } from '../types';

/**
 * @name IPaymentReconciliationProcessNote
 * @description This resource provides the details including amount of a payment and allocates the payment items being paid.
 * @see <a href="https://hl7.org/fhir/R4/paymentreconciliation-definitions.html#PaymentReconciliation.processNote">PaymentReconciliationProcessNote</a>
 * @version R4
 * @extends {IBackboneElement}
 * @author Claudia Alarcón Lazo
 */
export interface IPaymentReconciliationProcessNote extends IBackboneElement {
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
}
