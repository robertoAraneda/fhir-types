/**
 * @name EncounterLocationStatus
 * @description The status of the location.
 * @description planned | active | reserved | completed
 * @see <a href="https://hl7.org/fhir/R4/valueset-encounter-location-status.html">EncounterLocationStatus</a>
 * @version R4
 * @author Roberto Araneda Espinoza
 */
export enum EncounterLocationStatusEnum {
  PLANNED = 'planned',
  ACTIVE = 'active',
  RESERVED = 'reserved',
  COMPLETED = 'completed',
}
