/**
 * @name AuditEventOutcome
 * @description Indicates whether the event succeeded or failed.
 * @description 0 | 4 | 8 | 12
 * @see <a href="https://hl7.org/fhir/R4/valueset-audit-event-outcome.html">AuditEventOutcome</a>
 * @version R4
 * @author Roberto Araneda Espinoza
 */
export enum AuditEventOutcomeEnum {
  SUCCESS = '0',
  MINOR_FAILURE = '4',
  SERIOUS_FAILURE = '8',
  MAJOR_FAILURE = '12',
}
