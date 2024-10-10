/**
 * @name QuestionnaireEnableBehavior
 * @description Controls how multiple enableWhen values are interpreted - whether all or any must be true.
 * @description all | any
 * @see <a href="https://hl7.org/fhir/R4/valueset-questionnaire-enable-behavior.html">QuestionnaireEnableBehavior</a>
 * @version R4
 * @author Claudia Alarcón Lazo
 */
export enum QuestionnaireEnableBehaviorEnum {
  ALL = 'all',
  ANY = 'any',
}
