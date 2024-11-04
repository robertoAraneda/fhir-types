/**
 * @name ClaimUse
 * @description The purpose of the Claim: predetermination, preauthorization, claim.
 * @description claim | preauthorization | predetermination
 * @see <a href="https://hl7.org/fhir/R4/valueset-claim-use.html">ClaimUse</a>
 * @version R4
 * @author Claudia Alarcón Lazo
 */
export enum ClaimUseEnum {
  CLAIM = 'claim',
  PREAUTHORIZATION = 'preauthorization',
  PREDETERMINATION = 'predetermination',
}
