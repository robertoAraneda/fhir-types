/**
 * @name ObservationStatus
 * @description Codes providing the status of an observation.
 * @description registered | preliminary | final | amended | corrected | cancelled | entered-in-error | unknown
 * @see <a href="https://hl7.org/fhir/R4/valueset-observation-status.html">ObservationStatus</a>
 * @version R4
 * @author Claudia Alarcón Lazo
 */
export type ObservationStatusType =
  | 'registered'
  | 'preliminary'
  | 'final'
  | 'amended'
  | 'corrected'
  | 'cancelled'
  | 'entered-in-error'
  | 'unknown';
