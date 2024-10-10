import { IBackboneElement, IElement } from '../base';
import { IAttachment, ICoding, IQuantity, IReference } from '../datatypes';

/**
 * @name IQuestionnaireInitial
 * @description A structured set of questions intended to guide the collection of answers from end-users. Questionnaires provide detailed control over order, presentation, phraseology and grouping to allow coherent, consistent data collection.
 * @see <a href="https://hl7.org/fhir/R4/questionnaire-definitions.html#Questionnaire.item.initial">QuestionnaireInitial</a>
 * @version R4
 * @extends {IBackboneElement}
 * @author Claudia Alarcón Lazo
 */
export interface IQuestionnaireInitial extends IBackboneElement {
  /**
   * @description The actual value to for an initial answer.
   */
  valueBoolean?: boolean;

  /**
   * @description Extensions for valueBoolean
   */
  _valueBoolean?: IElement;

  /**
   * @description The actual value to for an initial answer.
   */
  valueDecimal?: number;

  /**
   * @description Extensions for valueDecimal
   */
  _valueDecimal?: IElement;

  /**
   * @description The actual value to for an initial answer.
   */
  valueInteger?: number;

  /**
   * @description Extensions for valueInteger
   */
  _valueInteger?: IElement;

  /**
   * @description The actual value to for an initial answer.
   */
  valueDate?: string;

  /**
   * @description Extensions for valueDate
   */
  _valueDate?: IElement;

  /**
   * @description The actual value to for an initial answer.
   */
  valueDateTime?: string;

  /**
   * @description Extensions for valueDateTime
   */
  _valueDateTime?: IElement;

  /**
   * @description The actual value to for an initial answer.
   */
  valueTime?: string;

  /**
   * @description Extensions for valueTime
   */
  _valueTime?: IElement;

  /**
   * @description The actual value to for an initial answer.
   */
  valueString?: string;

  /**
   * @description Extensions for valueString
   */
  _valueString?: IElement;

  /**
   * @description The actual value to for an initial answer.
   */
  valueUri?: string;

  /**
   * @description Extensions for valueUri
   */
  _valueUri?: IElement;

  /**
   * @description The actual value to for an initial answer.
   */
  valueAttachment?: IAttachment;

  /**
   * @description The actual value to for an initial answer.
   */
  valueCoding?: ICoding;

  /**
   * @description The actual value to for an initial answer.
   */
  valueQuantity?: IQuantity;

  /**
   * @description The actual value to for an initial answer.
   */
  valueReference?: IReference;
}
