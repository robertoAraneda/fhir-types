/**
 * @name IdentityAssuranceLevel
 * @description The level of confidence that this link represents the same actual person, based on NIST Authentication Levels.
 * @description level1 | level2 | level3 | level4
 * @see <a href="https://hl7.org/fhir/R4/valueset-identity-assuranceLevel.html">IdentityAssuranceLevel</a>
 * @version R4
 * @author Roberto Araneda Espinoza
 */
export enum IdentityAssuranceLevelEnum {
  LEVEL1 = 'level1',
  LEVEL2 = 'level2',
  LEVEL3 = 'level3',
  LEVEL4 = 'level4',
}
