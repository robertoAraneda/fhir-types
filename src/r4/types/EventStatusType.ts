/**
 * @name EventStatus
 * @description Codes identifying the lifecycle stage of an event.
 * @description preparation | in-progress | not-done | on-hold | stopped | completed | entered-in-error | unknown
 * @see <a href="https://hl7.org/fhir/R4/valueset-event-status.html">EventStatus</a>
 * @version R4
 * @author Roberto Araneda Espinoza
 */
export type EventStatusType =
  | 'preparation'
  | 'in-progress'
  | 'not-done'
  | 'on-hold'
  | 'stopped'
  | 'completed'
  | 'entered-in-error'
  | 'unknown';
