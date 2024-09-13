/**
 * @name CarePlanActivityStatus
 * @description Codes that reflect the current state of a care plan activity within its overall life cycle.
 * @description not-started | scheduled | in-progress | on-hold | completed | cancelled | stopped | unknown | entered-in-error
 * @see <a href="https://hl7.org/fhir/R4/valueset-care-plan-activity-status.html">CarePlanActivityStatus</a>
 * @version R4
 * @author Roberto Araneda Espinoza
 */
export enum CarePlanActivityStatusEnum {
  NOT_STARTED = 'not-started',
  SCHEDULED = 'scheduled',
  IN_PROGRESS = 'in-progress',
  ON_HOLD = 'on-hold',
  COMPLETED = 'completed',
  CANCELLED = 'cancelled',
  STOPPED = 'stopped',
  UNKNOWN = 'unknown',
  ENTERED_IN_ERROR = 'entered-in-error',
}
