/**
 * @name ImagingStudyStatus
 * @description The status of the ImagingStudy.
 * @description registered | available | cancelled | entered-in-error | unknown
 * @see <a href="https://hl7.org/fhir/R4/valueset-imagingstudy-status.html">ImagingStudyStatus</a>
 * @version R4
 * @author Claudia Alarcón Lazo
 */
export enum ImagingStudyStatusEnum {
  REGISTERED = 'registered',
  AVAILABLE = 'available',
  CANCELLED = 'cancelled',
  ENTERED_IN_ERROR = 'entered-in-error',
  UNKNOWN = 'unknown',
}
