/**
 * @name ClinicalImpressionStatus
 * @description Codes that reflect the current state of a clinical impression within its overall lifecycle.
 * @description in-progress | completed | entered-in-error
 * @see <a href="https://hl7.org/fhir/R4/valueset-clinicalimpression-status.html">ClinicalImpressionStatus</a>
 * @version R4
 * @author Claudia Alarcón Lazo
 */
export enum ClinicalImpressionStatusEnum {
  IN_PROGRESS = 'in-progress',
  COMPLETED = 'completed',
  ENTERED_IN_ERROR = 'entered-in-error',
}
