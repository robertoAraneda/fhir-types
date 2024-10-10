import { IBackboneElement, IElement } from '../base';
import { ICoding } from '../datatypes';
import { ItemTypeType, QuestionnaireEnableBehaviorType } from '../types';
import { IQuestionnaireAnswerOption } from './IQuestionnaireAnswerOption';
import { IQuestionnaireEnableWhen } from './IQuestionnaireEnableWhen';
import { IQuestionnaireInitial } from './IQuestionnaireInitial';

/**
 * @name IQuestionnaireItem
 * @description A structured set of questions intended to guide the collection of answers from end-users. Questionnaires provide detailed control over order, presentation, phraseology and grouping to allow coherent, consistent data collection.
 * @see <a href="https://hl7.org/fhir/R4/questionnaire-definitions.html#Questionnaire.item">QuestionnaireItem</a>
 * @version R4
 * @extends {IBackboneElement}
 * @author Claudia Alarcón Lazo
 */
export interface IQuestionnaireItem extends IBackboneElement {
  /**
   * @description An identifier that is unique within the Questionnaire allowing linkage to the equivalent item in a QuestionnaireResponse resource.
   */
  linkId: string;

  /**
   * @description Extensions for linkId
   */
  _linkId?: IElement;

  /**
   * @description This element is a URI that refers to an [[[ElementDefinition]]] that provides information about this item, including information that might otherwise be included in the instance of the Questionnaire resource. A detailed description of the construction of the URI is shown in Comments, below. If this element is present then the following element values MAY be derived from the Element Definition if the corresponding elements of this Questionnaire resource instance have no value:\n\n* code (ElementDefinition.code) \n* type (ElementDefinition.type) \n* required (ElementDefinition.min) \n* repeats (ElementDefinition.max) \n* maxLength (ElementDefinition.maxLength) \n* answerValueSet (ElementDefinition.binding)\n* options (ElementDefinition.binding).
   */
  definition?: string;

  /**
   * @description Extensions for definition
   */
  _definition?: IElement;

  /**
   * @description A terminology code that corresponds to this group or question (e.g. a code from LOINC, which defines many questions and answers).
   */
  code?: ICoding[];

  /**
   * @description A short label for a particular group, question or set of display text within the questionnaire used for reference by the individual completing the questionnaire.
   */
  prefix?: string;

  /**
   * @description Extensions for prefix
   */
  _prefix?: IElement;

  /**
   * @description The name of a section, the text of a question or text content for a display item.
   */
  text?: string;

  /**
   * @description Extensions for text
   */
  _text?: IElement;

  /**
   * @description The type of questionnaire item this is - whether text for display, a grouping of other items or a particular type of data to be captured (string, integer, coded choice, etc.).
   * @description group | display | question | boolean | decimal | integer | date | dateTime | time | string | text | url | choice | open-choice | attachment | reference | quantity
   * @see <a href="https://hl7.org/fhir/R4/valueset-item-type.html">ItemType</a>
   */
  type: ItemTypeType;

  /**
   * @description Extensions for type
   */
  _type?: IElement;

  /**
   * @description A constraint indicating that this item should only be enabled (displayed/allow answers to be captured) when the specified condition is true.
   */
  enableWhen?: IQuestionnaireEnableWhen[];

  /**
   * @description Controls how multiple enableWhen values are interpreted -  whether all or any must be true.
   * @description all | any
   * @see <a href="https://hl7.org/fhir/R4/valueset-questionnaire-enable-behavior.html">QuestionnaireEnableBehavior</a>
   */
  enableBehavior?: QuestionnaireEnableBehaviorType;

  /**
   * @description Extensions for enableBehavior
   */
  _enableBehavior?: IElement;

  /**
   * @description An indication, if true, that the item must be present in a \"completed\" QuestionnaireResponse.  If false, the item may be skipped when answering the questionnaire.
   */
  required?: boolean;

  /**
   * @description Extensions for required
   */
  _required?: IElement;

  /**
   * @description An indication, if true, that the item may occur multiple times in the response, collecting multiple answers for questions or multiple sets of answers for groups.
   */
  repeats?: boolean;

  /**
   * @description Extensions for repeats
   */
  _repeats?: IElement;

  /**
   * @description An indication, when true, that the value cannot be changed by a human respondent to the Questionnaire.
   */
  readOnly?: boolean;

  /**
   * @description Extensions for readOnly
   */
  _readOnly?: IElement;

  /**
   * @description The maximum number of characters that are permitted in the answer to be considered a \"valid\" QuestionnaireResponse.
   */
  maxLength?: number;

  /**
   * @description Extensions for maxLength
   */
  _maxLength?: IElement;

  /**
   * @description A reference to a value set containing a list of codes representing permitted answers for a \"choice\" or \"open-choice\" question.
   */
  answerValueSet?: string;

  /**
   * @description One of the permitted answers for a \"choice\" or \"open-choice\" question.
   */
  answerOption?: IQuestionnaireAnswerOption[];

  /**
   * @description One or more values that should be pre-populated in the answer when initially rendering the questionnaire for user input.
   */
  initial?: IQuestionnaireInitial[];

  /**
   * @description Text, questions and other groups to be nested beneath a question or group.
   */
  item?: IQuestionnaireItem[];
}
