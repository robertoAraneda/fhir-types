/**
 * @name ConditionClinical
 * @description Preferred value set for Condition Clinical Status.
 * @description active | recurrence | relapse | inactive | remission | resolved
 * @see <a href="https://hl7.org/fhir/R4/valueset-condition-clinical.html">ConditionClinical</a>
 * @version R4
 * @author Claudia Alarcón Lazo
 */
export enum ConditionClinicalEnum {
  ACTIVE = 'active',
  RECURRENCE = 'recurrence',
  RELAPSE = 'relapse',
  INACTIVE = 'inactive',
  REMISSION = 'remission',
  RESOLVED = 'resolved',
}
