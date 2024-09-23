/**
 * @name MedicationRequestStatus
 * @description MedicationRequest Status Codes.
 * @description active | on-hold | cancelled | completed | entered-in-error | stopped | draft | unknown
 * @see <a href="https://hl7.org/fhir/R4/valueset-medicationrequest-status.html">MedicationRequestStatus</a>
 * @version R4
 * @author Claudia Alarcón Lazo
 */
export type MedicationRequestStatusType =
  | 'active'
  | 'on-hold'
  | 'cancelled'
  | 'completed'
  | 'entered-in-error'
  | 'stopped'
  | 'draft'
  | 'unknown';
