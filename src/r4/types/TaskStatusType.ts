/**
 * @name TaskStatus
 * @description The current status of the task.
 * @description draft | requested | received | accepted | rejected | ready | cancelled | in-progress | on-hold | failed | completed | entered-in-error
 * @see <a href="https://hl7.org/fhir/R4/valueset-task-status.html">TaskStatus</a>
 * @version R4
 * @author Roberto Araneda Espinoza
 */
export type TaskStatusType =
  | 'draft'
  | 'requested'
  | 'received'
  | 'accepted'
  | 'rejected'
  | 'ready'
  | 'cancelled'
  | 'in-progress'
  | 'on-hold'
  | 'failed'
  | 'completed'
  | 'entered-in-error';
