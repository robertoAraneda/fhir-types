/**
 * @name UnitsOfTime
 * @description A unit of time (units from UCUM).
 * @description s | min | h | d | wk | mo | a
 * @see <a href="https://hl7.org/fhir/R4/valueset-units-of-time.html">UnitsOfTime</a>
 * @version R4
 * @author Roberto Araneda Espinoza
 */
export enum UnitsOfTimeEnum {
  SECOND = 's',
  MINUTE = 'min',
  HOUR = 'h',
  DAY = 'd',
  WEEK = 'wk',
  MONTH = 'mo',
  YEAR = 'a',
}
