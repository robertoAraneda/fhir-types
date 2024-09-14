/**
 * @name ListMode
 * @description The processing mode that applies to this list.
 * @description working | snapshot | changes
 * @see <a href="https://hl7.org/fhir/R4/valueset-list-mode.html">ListMode</a>
 * @version R4
 * @author Roberto Araneda Espinoza
 */
export enum ListModeEnum {
  WORKING = 'working',
  SNAPSHOT = 'snapshot',
  CHANGES = 'changes',
}
