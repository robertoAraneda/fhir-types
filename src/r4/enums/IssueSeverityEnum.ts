/**
 * @name IssueSeverity
 * @description How the issue affects the success of the action.
 * @see <a href="https://hl7.org/fhir/R4/valueset-issue-severity.html">IssueSeverity</a>
 * @version R4
 * @author Roberto Araneda Espinoza
 */
export enum IssueSeverityEnum {
  FATAL = 'fatal',
  ERROR = 'error',
  WARNING = 'warning',
  INFORMATION = 'information',
}
