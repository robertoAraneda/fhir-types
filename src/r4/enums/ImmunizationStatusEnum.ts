/**
 * @name ImmunizationStatus
 * @description The value set to instantiate this attribute should be drawn from a terminologically robust code system that consists of or contains concepts to support describing the current status of the administered dose of vaccine.
 * @description completed | entered-in-error | not-done
 * @see <a href="https://hl7.org/fhir/R4/valueset-immunization-status.html">ImmunizationStatus</a>
 * @version R4
 * @uthor Claudia Alarcón Lazo
 */
export enum ImmunizationStatusEnum {
  COMPLETED = 'completed',
  ENTERED_IN_ERROR = 'entered-in-error',
  NOT_DONE = 'not-done',
}
