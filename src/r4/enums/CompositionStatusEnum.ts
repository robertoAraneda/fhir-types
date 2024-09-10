/**
 * @name CompositionStatus
 * @description The workflow/clinical status of the composition.
 * @description preliminary | final | amended | entered-in-error
 * @see <a href="https://hl7.org/fhir/R4/valueset-composition-status.html">CompositionStatus</a>
 * @version R4
 * @author Roberto Araneda Espinoza
 */
export enum CompositionStatusEnum {
  PRELIMINARY = 'preliminary',
  FINAL = 'final',
  AMENDED = 'amended',
  ENTERED_IN_ERROR = 'entered-in-error',
}
