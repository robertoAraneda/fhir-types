/**
 * @name ExplanationOfBenefitStatus
 * @description A code specifying the state of the resource instance.
 * @description active | cancelled | draft | entered-in-error
 * @see <a href="https://hl7.org/fhir/R4/valueset-explanationofbenefit-status.html">ExplanationOfBenefitStatus</a>
 * @version R4
 * @author Claudia Alarcón Lazo
 */
export enum ExplanationOfBenefitStatusEnum {
  ACTIVE = 'active',
  CANCELLED = 'cancelled',
  DRAFT = 'draft',
  ENTERED_IN_ERROR = 'entered-in-error',
}
