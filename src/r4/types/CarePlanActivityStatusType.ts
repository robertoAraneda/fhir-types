/**
 * @name CarePlanActivityStatus
 * @description Codes that reflect the current state of a care plan activity within its overall life cycle.
 * @description not-started | scheduled | in-progress | on-hold | completed | cancelled | stopped | unknown | entered-in-error
 * @see <a href="https://hl7.org/fhir/R4/valueset-care-plan-activity-status.html">CarePlanActivityStatus</a>
 * @version R4
 * @author Roberto Araneda Espinoza
 */
export type CarePlanActivityStatusType =
  | 'not-started'
  | 'scheduled'
  | 'in-progress'
  | 'on-hold'
  | 'completed'
  | 'cancelled'
  | 'stopped'
  | 'unknown'
  | 'entered-in-error';
