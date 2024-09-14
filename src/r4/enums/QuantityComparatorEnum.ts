/**
 * @name QuantityComparator
 * @description How the Quantity should be understood and represented.
 * @description < | <= | >= | >
 * @see <a href="https://hl7.org/fhir/R4/valueset-quantity-comparator.html">QuantityComparator</a>
 * @version R4
 * @author Roberto Araneda Espinoza
 */
export enum QuantityComparatorEnum {
  LESS_THAN = '<',
  LESS_OR_EQUAL_TO = '<=',
  GREATER_OR_EQUAL_TO = '>=',
  GREATER_THAN = '>',
}
