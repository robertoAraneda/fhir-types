/**
 * @name FHIRSubstanceStatus
 * @description A code to indicate if the substance is actively used.
 * @description active | inactive | entered-in-error
 * @see <a href="https://hl7.org/fhir/R4/valueset-substance-status.html">FHIRSubstanceStatus</a>
 * @version R4
 * @author Claudia Alarcón Lazo
 */
export enum FHIRSubstanceStatusEnum {
  ACTIVE = 'active',
  INACTIVE = 'inactive',
  ENTERED_IN_ERROR = 'entered-in-error',
}
