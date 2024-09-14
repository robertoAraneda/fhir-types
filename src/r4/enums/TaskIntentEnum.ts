/**
 * @name TaskIntent
 * @description Distinguishes whether the task is a proposal, plan or full order.
 * @description unknown | proposal | plan | order | original-order | reflex-order | filler-order | instance-order | option
 * @see <a href="https://hl7.org/fhir/R4/valueset-task-intent.html">TaskIntent</a>
 * @version R4
 * @author Roberto Araneda Espinoza
 */
export enum TaskIntentEnum {
  UNKNOWN = 'unknown',
  PROPOSAL = 'proposal',
  PLAN = 'plan',
  ORDER = 'order',
  ORIGINAL_ORDER = 'original-order',
  REFLEX_ORDER = 'reflex-order',
  FILLER_ORDER = 'filler-order',
  INSTANCE_ORDER = 'instance-order',
  OPTION = 'option',
}
