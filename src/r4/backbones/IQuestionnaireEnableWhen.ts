import { IBackboneElement, IElement } from '../base';
import { ICoding, IQuantity, IReference } from '../datatypes';
import { QuestionnaireEnableOperatorType } from '../types';

/**
 * @name IQuestionnaireEnableWhen
 * @description A structured set of questions intended to guide the collection of answers from end-users. Questionnaires provide detailed control over order, presentation, phraseology and grouping to allow coherent, consistent data collection.
 * @see <a href="https://hl7.org/fhir/R4/questionnaire-definitions.html#Questionnaire.item.enableWhen">QuestionnaireEnableWhen</a>
 * @version R4
 * @extends {IBackboneElement}
 * @author Claudia Alarcón Lazo
 */
export interface IQuestionnaireEnableWhen extends IBackboneElement {
  /**
   * @description The linkId for the question whose answer (or lack of answer) governs whether this item is enabled.
   */
  question: string;

  /**
   * @description Extensions for question
   */
  _question?: IElement;

  /**
   * @description Specifies the criteria by which the question is enabled.
   * @description exists | = | != | > | < | >= | <=
   * @see <a href="https://hl7.org/fhir/R4/valueset-questionnaire-enable-operator.html">QuestionnaireEnableOperator</a>
   */
  operator: QuestionnaireEnableOperatorType;

  /**
   * @description Extensions for operator
   */
  _operator?: IElement;

  /**
   * @description A value that the referenced question is tested using the specified operator in order for the item to be enabled.
   */
  answerBoolean?: boolean;

  /**
   * @description Extensions for answerBoolean
   */
  _answerBoolean?: IElement;

  /**
   * @description A value that the referenced question is tested using the specified operator in order for the item to be enabled.
   */
  answerDecimal?: number;

  /**
   * @description Extensions for answerDecimal
   */
  _answerDecimal?: IElement;

  /**
   * @description A value that the referenced question is tested using the specified operator in order for the item to be enabled.
   */
  answerInteger?: number;

  /**
   * @description Extensions for answerInteger
   */
  _answerInteger?: IElement;

  /**
   * @description A value that the referenced question is tested using the specified operator in order for the item to be enabled.
   */
  answerDate?: string;

  /**
   * @description Extensions for answerDate
   */
  _answerDate?: IElement;

  /**
   * @description A value that the referenced question is tested using the specified operator in order for the item to be enabled.
   */
  answerDateTime?: string;

  /**
   * @description Extensions for answerDateTime
   */
  _answerDateTime?: IElement;

  /**
   * @description A value that the referenced question is tested using the specified operator in order for the item to be enabled.
   */
  answerString?: string;

  /**
   * @description Extensions for answerString
   */
  _answerString?: IElement;

  /**
   * @description A value that the referenced question is tested using the specified operator in order for the item to be enabled.
   */
  answerCoding?: ICoding;

  /**
   * @description A value that the referenced question is tested using the specified operator in order for the item to be enabled.
   */
  answerQuantity?: IQuantity;

  /**
   * @description A value that the referenced question is tested using the specified operator in order for the item to be enabled.
   */
  answerReference?: IReference;
}
