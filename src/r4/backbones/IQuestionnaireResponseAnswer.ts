import { IBackboneElement, IElement } from '../base';
import { IAttachment, ICoding, IQuantity, IReference } from '../datatypes';
import { IQuestionnaireResponseItem } from './IQuestionnaireResponseItem';

/**
 * @name IQuestionnaireResponseAnswer
 * @description A structured set of questions and their answers. The questions are ordered and grouped into coherent subsets, corresponding to the structure of the grouping of the questionnaire being responded to.
 * @see <a href="https://hl7.org/fhir/R4/questionnaireresponse-definitions.html#QuestionnaireResponse.item.answer">QuestionnaireResponseAnswer</a>
 * @version R4
 * @extends {IBackboneElement}
 * @author Claudia Alarcón Lazo
 */
export interface IQuestionnaireResponseAnswer extends IBackboneElement {
  /**
   * @description The answer (or one of the answers) provided by the respondent to the question.
   */
  valueBoolean?: boolean;

  /**
   * @description Extensions for valueBoolean
   */
  _valueBoolean?: IElement;

  /**
   * @description The answer (or one of the answers) provided by the respondent to the question.
   */
  valueDecimal?: number;

  /**
   * @description Extensions for valueDecimal
   */
  _valueDecimal?: IElement;

  /**
   * @description The answer (or one of the answers) provided by the respondent to the question.
   */
  valueInteger?: number;

  /**
   * @description Extensions for valueInteger
   */
  _valueInteger?: IElement;

  /**
   * @description The answer (or one of the answers) provided by the respondent to the question.
   */
  valueDate?: string;

  /**
   * @description Extensions for valueDate
   */
  _valueDate?: IElement;

  /**
   * @description The answer (or one of the answers) provided by the respondent to the question.
   */
  valueDateTime?: string;

  /**
   * @description Extensions for valueDateTime
   */
  _valueDateTime?: IElement;

  /**
   * @description The answer (or one of the answers) provided by the respondent to the question.
   */
  valueTime?: string;

  /**
   * @description Extensions for valueTime
   */
  _valueTime?: IElement;

  /**
   * @description The answer (or one of the answers) provided by the respondent to the question.
   */
  valueString?: string;

  /**
   * @description Extensions for valueString
   */
  _valueString?: IElement;

  /**
   * @description The answer (or one of the answers) provided by the respondent to the question.
   */
  valueUri?: string;

  /**
   * @description Extensions for valueUri
   */
  _valueUri?: IElement;

  /**
   * @description The answer (or one of the answers) provided by the respondent to the question.
   */
  valueAttachment?: IAttachment;

  /**
   * @description The answer (or one of the answers) provided by the respondent to the question.
   */
  valueCoding?: ICoding;

  /**
   * @description The answer (or one of the answers) provided by the respondent to the question.
   */
  valueQuantity?: IQuantity;

  /**
   * @description The answer (or one of the answers) provided by the respondent to the question.
   */
  valueReference?: IReference;

  /**
   * @description Nested groups and/or questions found within this particular answer.
   */
  item?: IQuestionnaireResponseItem[];
}
