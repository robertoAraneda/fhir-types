/**
 * @name MedicationRequestIntent
 * @description MedicationRequest Intent Codes.
 * @description proposal | plan | order | original-order | reflex-order | filler-order | instance-order | option
 * @see <a href="https://hl7.org/fhir/R4/valueset-medicationrequest-intent.html">MedicationRequestIntent</a>
 * @version R4
 * @author Claudia Alarcón Lazo
 */
export enum MedicationRequestIntentEnum {
  PROPOSAL = 'proposal',
  PLAN = 'plan',
  ORDER = 'order',
  ORIGINAL_ORDER = 'original-order',
  REFLEX_ORDER = 'reflex-order',
  FILLER_ORDER = 'filler-order',
  INSTANCE_ORDER = 'instance-order',
  OPTION = 'option',
}
