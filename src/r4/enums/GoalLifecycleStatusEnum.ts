/**
 * @name GoalLifecycleStatus
 * @description Codes that reflect the current state of a goal and whether the goal is still being targeted.
 * @description proposed | planned | accepted | active | on-hold | completed | cancelled | entered-in-error | rejected
 * @see <a href="https://hl7.org/fhir/R4/valueset-goal-status.html">GoalLifecycleStatus</a>
 * @version R4
 * @author Claudia Alarcón Lazo
 */
export enum GoalLifecycleStatusEnum {
  PROPOSED = 'proposed',
  PLANNED = 'planned',
  ACCEPTED = 'accepted',
  ACTIVE = 'active',
  ON_HOLD = 'on-hold',
  COMPLETED = 'completed',
  CANCELLED = 'cancelled',
  ENTERED_IN_ERROR = 'entered-in-error',
  REJECTED = 'rejected',
}
