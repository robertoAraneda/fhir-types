/**
 * @name SpecimenStatus
 * @description Codes providing the status/availability of a specimen.
 * @description available | unavailable | unsatisfactory | entered-in-error
 * @see <a href="https://hl7.org/fhir/R4/valueset-specimen-status.html">SpecimenStatus</a>
 * @version R4
 * @author Claudia Alarcón Lazo
 */
export enum SpecimenStatusEnum {
  AVAILABLE = 'available',
  UNAVAILABLE = 'unavailable',
  UNSATISFACTORY = 'unsatisfactory',
  ENTERED_IN_ERROR = 'entered-in-error',
}
