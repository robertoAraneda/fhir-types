/**
 * @name MedicationDispenseStatusCodes
 * @description MedicationDispense Status Codes.
 * @description preparation | in-progress | cancelled | on-hold | completed | entered-in-error | stopped | declined | unknown
 * @see <a href="https://hl7.org/fhir/R4/valueset-medicationdispense-status.html">MedicationDispenseStatusCodes</a>
 * @version R4
 * @author Claudia Alarcón Lazo
 */
export enum MedicationDispenseStatusCodesEnum {
  PREPARATION = 'preparation',
  IN_PROGRESS = 'in-progress',
  CANCELLED = 'cancelled',
  ON_HOLD = 'on-hold',
  COMPLETED = 'completed',
  ENTERED_IN_ERROR = 'entered-in-error',
  STOPPED = 'stopped',
  DECLINED = 'declined',
  UNKNOWN = 'unknown',
}
