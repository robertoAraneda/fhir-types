/**
 * @name AllergyIntoleranceCriticality
 * @description Estimate of the potential clinical harm, or seriousness, of a reaction to an identified substance.
 * @description low | high | unable-to-assess
 * @see <a href="https://hl7.org/fhir/R4/valueset-allergy-intolerance-criticality.html">AllergyIntoleranceCriticality</a>
 * @version R4
 * @author Roberto Araneda Espinoza
 */
export enum AllergyIntoleranceCriticalityEnum {
  LOW = 'low',
  HIGH = 'high',
  UNABLE_TO_ASSESS = 'unable-to-assess',
}
