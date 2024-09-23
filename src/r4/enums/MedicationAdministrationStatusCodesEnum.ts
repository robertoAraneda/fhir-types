/**
 * @name MedicationAdministrationStatusCodes
 * @description MedicationAdministration Status Codes.
 * @description in-progress | not-done | on-hold | completed | entered-in-error | stopped | unknown
 * @see <a href="https://hl7.org/fhir/R4/valueset-medication-admin-status.html">MedicationAdministrationStatusCodes</a>
 * @version R4
 * @author Claudia Alarcón Lazo
 */
export enum MedicationAdministrationStatusCodesEnum {
  IN_PROGRESS = 'in-progress',
  NOT_DONE = 'not-done',
  ON_HOLD = 'on-hold',
  COMPLETED = 'completed',
  ENTERED_IN_ERROR = 'entered-in-error',
  STOPPED = 'stopped',
  UNKNOWN = 'unknown',
}
