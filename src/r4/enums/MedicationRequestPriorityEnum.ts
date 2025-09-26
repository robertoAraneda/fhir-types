/**
 * @name MedicationRequestPriority
 * @description MedicationRequest Priority Codes.
 * @description routine | urgent | stat | asap
 * @see <a href="https://hl7.org/fhir/R4/valueset-medicationrequest-priority.html">MedicationRequestPriority</a>
 * @version R4
 * @author Roberto Araneda
 */
export enum MedicationRequestPriorityEnum {
  ROUTINE = 'routine',
  URGENT = 'urgent',
  STAT = 'stat',
  ASAP = 'asap',
}
