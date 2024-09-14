/**
 * @name FamilyHistoryStatus
 * @description A code that identifies the status of the family history record.
 * @description partial | completed | entered-in-error | health-unknown
 * @see <a href="https://hl7.org/fhir/R4/valueset-history-status.html">FamilyHistoryStatus</a>
 * @version R4
 * @author Roberto Araneda Espinoza
 */
export enum FamilyHistoryStatusEnum {
  PARTIAL = 'partial',
  COMPLETED = 'completed',
  ENTERED_IN_ERROR = 'entered-in-error',
  HEALTH_UNKNOWN = 'health-unknown',
}
