import { IQuestionnaireResponseItem } from '../backbones';
import { IDomainResource, IElement } from '../base';
import { IIdentifier, IReference } from '../datatypes';
import { QuestionnaireAnswersStatusType } from '../types';

/**
 * @name IQuestionnaireResponse
 * @description A structured set of questions and their answers. The questions are ordered and grouped into coherent subsets, corresponding to the structure of the grouping of the questionnaire being responded to.
 * @see <a href="https://hl7.org/fhir/R4/questionnaireresponse.html">QuestionnaireResponse</a>
 * @version R4
 * @extends {IDomainResource}
 * @author Claudia Alarcón Lazo
 */
export interface IQuestionnaireResponse extends IDomainResource {
  /**
   * @description A business identifier assigned to a particular completed (or partially completed) questionnaire.
   */
  identifier?: IIdentifier;

  /**
   * @description The order, proposal or plan that is fulfilled in whole or in part by this QuestionnaireResponse.  For example, a ServiceRequest seeking an intake assessment or a decision support recommendation to assess for post-partum depression.
   */
  basedOn?: IReference[];

  /**
   * @description A procedure or observation that this questionnaire was performed as part of the execution of.  For example, the surgery a checklist was executed as part of.
   */
  partOf?: IReference[];

  /**
   * @description The Questionnaire that defines and organizes the questions for which answers are being provided.
   */
  questionnaire?: string;

  /**
   * @description The position of the questionnaire response within its overall lifecycle.
   * @description in-progress | completed | amended | entered-in-error | stopped
   * @see <a href="https://hl7.org/fhir/R4/valueset-questionnaire-answers-status.html">QuestionnaireAnswersStatus</a>
   */
  status: QuestionnaireAnswersStatusType;

  /**
   * @description Extensions for status
   */
  _status?: IElement;

  /**
   * @description The subject of the questionnaire response.  This could be a patient, organization, practitioner, device, etc.  This is who/what the answers apply to, but is not necessarily the source of information.
   */
  subject?: IReference;

  /**
   * @description The Encounter during which this questionnaire response was created or to which the creation of this record is tightly associated.
   */
  encounter?: IReference;

  /**
   * @description The date and/or time that this set of answers were last changed.
   */
  authored?: string;

  /**
   * @description Extensions for authored
   */
  _authored?: IElement;

  /**
   * @description Person who received the answers to the questions in the QuestionnaireResponse and recorded them in the system.
   */
  author?: IReference;

  /**
   * @description The person who answered the questions about the subject.
   */
  source?: IReference;

  /**
   * @description A group or question item from the original questionnaire for which answers are provided.
   */
  item?: IQuestionnaireResponseItem[];
}
