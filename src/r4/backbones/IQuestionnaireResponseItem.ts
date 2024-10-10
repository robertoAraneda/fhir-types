import { IBackboneElement, IElement } from '../base';
import { IQuestionnaireResponseAnswer } from './IQuestionnaireResponseAnswer';

/**
 * @name IQuestionnaireResponseItem
 * @description A structured set of questions and their answers. The questions are ordered and grouped into coherent subsets, corresponding to the structure of the grouping of the questionnaire being responded to.
 * @see <a href="https://hl7.org/fhir/R4/questionnaireresponse-definitions.html#QuestionnaireResponse.item">QuestionnaireResponseItem</a>
 * @version R4
 * @extends {IBackboneElement}
 * @author Claudia Alarcón Lazo
 */
export interface IQuestionnaireResponseItem extends IBackboneElement {
  /**
   * @description The item from the Questionnaire that corresponds to this item in the QuestionnaireResponse resource.
   */
  linkId: string;

  /**
   * @description Extensions for linkId
   */
  _linkId?: IElement;

  /**
   * @description A reference to an [[[ElementDefinition]]] that provides the details for the item.
   */
  definition?: string;

  /**
   * @description Extensions for definition
   */
  _definition?: IElement;

  /**
   * @description Text that is displayed above the contents of the group or as the text of the question being answered.
   */
  text?: string;

  /**
   * @description Extensions for text
   */
  _text?: IElement;

  /**
   * @description The respondent's answer(s) to the question.
   */
  answer?: IQuestionnaireResponseAnswer[];

  /**
   * @description Questions or sub-groups nested beneath a question or group.
   */
  item?: IQuestionnaireResponseItem[];
}
