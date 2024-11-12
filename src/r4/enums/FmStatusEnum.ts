/**
 * @name FmStatus
 * @description This value set includes Status codes.
 * @description active | cancelled | draft | entered-in-error
 * @see <a href="https://hl7.org/fhir/R4/valueset-fm-status.html">FmStatus</a>
 * @version R4
 * @author Claudia Alarcón Lazo
 */
export enum FmStatusEnum {
  ACTIVE = 'active',
  CANCELLED = 'cancelled',
  DRAFT = 'draft',
  ENTERED_IN_ERROR = 'entered-in-error',
}