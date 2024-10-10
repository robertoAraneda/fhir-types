/**
 * @name QuestionnaireAnswersStatus
 * @description Lifecycle status of the questionnaire response.
 * @description in-progress | completed | amended | entered-in-error | stopped
 * @see <a href="https://hl7.org/fhir/R4/valueset-questionnaire-answers-status.html">QuestionnaireAnswersStatus</a>
 * @version R4
 * @author Claudia Alarcón Lazo
 */
export enum QuestionnaireAnswersStatusEnum {
  IN_PROGRESS = 'in-progress',
  COMPLETED = 'completed',
  AMENDED = 'amended',
  ENTERED_IN_ERROR = 'entered-in-error',
  STOPPED = 'stopped',
}
