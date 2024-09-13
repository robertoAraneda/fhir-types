/**
 * @name AddressType
 * @description The type of an address (physical / postal).
 * @description postal | physical | both
 * @see <a href="https://hl7.org/fhir/R4/valueset-address-type.html">AddressType</a>
 * @version R4
 * @author Roberto Araneda Espinoza
 */
export enum AddressTypeEnum {
  POSTAL = 'postal',
  PHYSICAL = 'physical',
  BOTH = 'both',
}
