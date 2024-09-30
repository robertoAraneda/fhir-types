/**
 * @name MedicationStatementStatusCodes
 * @description Medication Status Codes.
 * @description active | completed | entered-in-error | intended | stopped | on-hold | unknown | not-taken
 * @see <a href="https://hl7.org/fhir/R4/valueset-medication-statement-status.html">MedicationStatementStatusCodes</a>
 * @version R4
 * @author Claudia Alarcón Lazo
 */
export enum MedicationStatementStatusCodesEnum {
  ACTIVE = 'active',
  COMPLETED = 'completed',
  ENTERED_IN_ERROR = 'entered-in-error',
  INTENDED = 'intended',
  STOPPED = 'stopped',
  ON_HOLD = 'on-hold',
  UNKNOWN = 'unknown',
  NOT_TAKEN = 'not-taken',
}
