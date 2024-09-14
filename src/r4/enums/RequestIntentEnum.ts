/**
 * @name RequestIntent
 * @description Codes indicating the degree of authority/intentionality associated with a request.
 * @description proposal | plan | directive | order | original-order | reflex-order | filler-order | instance-order | option
 * @see <a href="https://hl7.org/fhir/R4/valueset-request-intent.html">RequestIntent</a>
 * @version R4
 * @author Roberto Araneda Espinoza
 */
export enum RequestIntentEnum {
  PROPOSAL = 'proposal',
  PLAN = 'plan',
  DIRECTIVE = 'directive',
  ORDER = 'order',
  ORIGINAL_ORDER = 'original-order',
  REFLEX_ORDER = 'reflex-order',
  FILLER_ORDER = 'filler-order',
  INSTANCE_ORDER = 'instance-order',
  OPTION = 'option',
}
