/**
 * @name LinkType
 * @description The type of link between this patient resource and another patient resource.
 * @description replaced-by | replaces | refer | seealso
 * @see <a href="https://hl7.org/fhir/R4/valueset-link-type.html">LinkType</a>
 * @version R4
 * @author Roberto Araneda Espinoza
 */
export enum LinkTypeEnum {
  REPLACED_BY = 'replaced-by',
  REPLACES = 'replaces',
  REFER = 'refer',
  SEE_ALSO = 'seealso',
}
