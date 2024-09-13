/**
 * @name AuditEventAction
 * @description Indicator for type of action performed during the event that generated the event.
 * @description C | R | U | D | E
 * @see <a href="https://hl7.org/fhir/R4/valueset-audit-event-action.html">AuditEventAction</a>
 * @version R4
 * @author Roberto Araneda Espinoza
 */
export enum AuditEventActionEnum {
  CREATE = 'C',
  READ = 'R',
  VIEW = 'R',
  PRINT = 'R',
  UPDATE = 'U',
  DELETE = 'D',
  EXECUTE = 'E',
}
