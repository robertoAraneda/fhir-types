/**
 * @name EncounterStatus
 * @description Current state of the encounter.
 * @description planned | arrived | triaged | in-progress | onleave | finished | cancelled | entered-in-error | unknown
 * @see <a href="https://hl7.org/fhir/R4/valueset-encounter-status.html">EncounterStatus</a>
 * @version R4
 * @author Roberto Araneda Espinoza
 */
export type EncounterStatusType =
  | 'planned'
  | 'arrived'
  | 'triaged'
  | 'in-progress'
  | 'onleave'
  | 'finished'
  | 'cancelled'
  | 'entered-in-error'
  | 'unknown';
