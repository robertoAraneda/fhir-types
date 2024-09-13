/**
 * @name EventStatus
 * @description Codes identifying the lifecycle stage of an event.
 * @description preparation | in-progress | not-done | on-hold | stopped | completed | entered-in-error | unknown
 * @see <a href="https://hl7.org/fhir/R4/valueset-event-status.html">EventStatus</a>
 * @version R4
 * @author Roberto Araneda Espinoza
 */
export enum EventStatusEnum {
  PREPARATION = 'preparation',
  IN_PROGRESS = 'in-progress',
  NOT_DONE = 'not-done',
  ON_HOLD = 'on-hold',
  STOPPED = 'stopped',
  COMPLETED = 'completed',
  ENTERED_IN_ERROR = 'entered-in-error',
  UNKNOWN = 'unknown',
}
