/**
 * @name FlagStatus
 * @description Indicates whether this flag is active and needs to be displayed to a user, or whether it is no longer needed or was entered in error.
 * @description active | inactive | entered-in-error
 * @see <a href="https://hl7.org/fhir/R4/valueset-flag-status.html">FlagStatus</a>
 * @version R4
 * @author Claudia Alarcón Lazo
 */
export type FlagStatusType = 'active' | 'inactive' | 'entered-in-error';
