/**
 * @name AccountStatus
 * @description Indicates whether the account is available to be used.
 * @description active | inactive | entered-in-error | on-hold | unknown
 * @see <a href="https://hl7.org/fhir/R4/valueset-account-status.html">AccountStatus</a>
 * @version R4
 * @author Roberto Araneda Espinoza
 */
export enum AccountStatusEnum {
  ACTIVE = 'active',
  INACTIVE = 'inactive',
  ENTERED_IN_ERROR = 'entered-in-error',
  ON_HOLD = 'on-hold',
  UNKNOWN = 'unknown',
}
