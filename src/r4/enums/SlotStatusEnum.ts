/**
 * @name SlotStatus
 * @description The free/busy status of the slot.
 * @description busy | free | busy-unavailable | busy-tentative | entered-in-error
 * @see <a href="https://hl7.org/fhir/R4/valueset-slotstatus.html">SlotStatus</a>
 * @version R4
 * @author Roberto Araneda Espinoza
 */
export enum SlotStatusEnum {
  BUSY = 'busy',
  FREE = 'free',
  BUSY_UNAVAILABLE = 'busy-unavailable',
  BUSY_TENTATIVE = 'busy-tentative',
  ENTERED_IN_ERROR = 'entered-in-error',
}
