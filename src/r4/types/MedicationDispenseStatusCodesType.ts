/**
 * @name MedicationDispenseStatusCodes
 * @description MedicationDispense Status Codes.
 * @description preparation | in-progress | cancelled | on-hold | completed | entered-in-error | stopped | declined | unknown
 * @see <a href="https://hl7.org/fhir/R4/valueset-medicationdispense-status.html">MedicationDispenseStatusCodes</a>
 * @version R4
 * @author Claudia Alarcón Lazo
 */
export type MedicationDispenseStatusCodesType =
  | 'preparation'
  | 'in-progress'
  | 'cancelled'
  | 'on-hold'
  | 'completed'
  | 'entered-in-error'
  | 'stopped'
  | 'declined'
  | 'unknown';
