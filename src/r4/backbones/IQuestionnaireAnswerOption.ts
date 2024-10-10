import { IBackboneElement, IElement } from '../base';
import { ICoding, IReference } from '../datatypes';

/**
 * @name IQuestionnaireAnswerOption
 * @description A structured set of questions intended to guide the collection of answers from end-users. Questionnaires provide detailed control over order, presentation, phraseology and grouping to allow coherent, consistent data collection.
 * @see <a href="https://hl7.org/fhir/R4/questionnaire-definitions.html#Questionnaire.item.answerOption">QuestionnaireAnswerOption</a>
 * @version R4
 * @extends {IBackboneElement}
 * @author Claudia Alarcón Lazo
 */
export interface IQuestionnaireAnswerOption extends IBackboneElement {
  /**
   * @description A potential answer that\u0027s allowed as the answer to this question.
   */
  valueInteger?: number;

  /**
   * @description Extensions for valueInteger
   */
  _valueInteger?: IElement;

  /**
   * @description A potential answer that\u0027s allowed as the answer to this question.
   */
  valueDate?: string;

  /**
   * @description Extensions for valueDate
   */
  _valueDate?: IElement;

  /**
   * @description A potential answer that\u0027s allowed as the answer to this question.
   */
  valueTime?: string;

  /**
   * @description Extensions for valueTime
   */
  _valueTime?: IElement;

  /**
   * @description A potential answer that\u0027s allowed as the answer to this question.
   */
  valueString?: string;

  /**
   * @description Extensions for valueString
   */
  _valueString?: IElement;

  /**
   * @description A potential answer that\u0027s allowed as the answer to this question.
   */
  valueCoding?: ICoding;

  /**
   * @description A potential answer that\u0027s allowed as the answer to this question.
   */
  valueReference?: IReference;

  /**
   * @description Indicates whether the answer value is selected when the list of possible answers is initially shown.
   */
  initialSelected?: boolean;

  /**
   * @description Extensions for initialSelected
   */
  _initialSelected?: IElement;
}
