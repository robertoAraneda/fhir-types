/**
 * @name IdentifierUse
 * @description Identifies the purpose for this identifier, if known.
 * @description usual | official | temp | secondary | old
 * @see <a href="https://hl7.org/fhir/R4/valueset-identifier-use.html">IdentifierUse</a>
 * @version R4
 * @author Roberto Araneda Espinoza
 */
export enum IdentifierUseEnum {
  USUAL = 'usual',
  OFFICIAL = 'official',
  TEMP = 'temp',
  SECONDARY = 'secondary',
  OLD = 'old',
}
