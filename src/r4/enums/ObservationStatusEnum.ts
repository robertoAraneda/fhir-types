/**
 * @name ObservationStatus
 * @description Codes providing the status of an observation.
 * @description registered | preliminary | final | amended | corrected | cancelled | entered-in-error | unknown
 * @see <a href="https://hl7.org/fhir/R4/valueset-observation-status.html">ObservationStatus</a>
 * @version R4
 * @author Claudia Alarcón Lazo
 */
export enum ObservationStatusEnum {
  REGISTERED = 'registered',
  PRELIMINARY = 'preliminary',
  FINAL = 'final',
  AMENDED = 'amended',
  CORRECTED = 'corrected',
  CANCELLED = 'cancelled',
  ENTERED_IN_ERROR = 'entered-in-error',
  UNKNOWN = 'unknown',
}
