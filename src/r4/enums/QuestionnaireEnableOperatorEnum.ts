/**
 * @name QuestionnaireEnableOperator
 * @description The criteria by which a question is enabled.
 * @description exists | = | != | > | < | >= | <=
 * @see <a href="https://hl7.org/fhir/R4/valueset-questionnaire-enable-operator.html">QuestionnaireEnableOperator</a>
 * @version R4
 * @author Claudia Alarcón Lazo
 */
export enum QuestionnaireEnableOperatorEnum {
  EXISTS = 'exists',
  EQUALS = '=',
  NOT_EQUALS = '!=',
  GREATER_THAN = '>',
  LESS_THAN = '<',
  GREATER_OR_EQUALS = '>=',
  LESS_OR_EQUALS = '<=',
}
