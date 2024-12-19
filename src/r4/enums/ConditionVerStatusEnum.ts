/**
 * @name ConditionVerStatus
 * @description The verification status to support or decline the clinical status of the condition or diagnosis.
 * @description unconfirmed | provisional | differential | confirmed | refuted | entered-in-error
 * @see <a href="https://hl7.org/fhir/R4/valueset-condition-ver-status.html">ConditionVerStatus</a>
 * @version R4
 * @author Claudia Alarcón Lazo
 */
export enum ConditionVerStatusEnum {
  UNCONFIRMED = 'unconfirmed',
  PROVISIONAL = 'provisional',
  DIFFERENTIAL = 'differential',
  CONFIRMED = 'confirmed',
  REFUTED = 'refuted',
  ENTERED_IN_ERROR = 'entered-in-error',
}
