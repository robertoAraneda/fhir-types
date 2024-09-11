/**
 * @name IssueType
 * @description A code that describes the type of issue.
 * @description invalid | structure | required | value | invariant | security | login | unknown | expired | forbidden | suppressed | processing | not-supported | duplicate | multiple-matches | not-found | deleted | too-long | code-invalid | extension | too-costly | business-rule | conflict | transient | lock-error | no-store | exception | timeout | incomplete | throttled | informational
 * @see <a href="https://hl7.org/fhir/R4/valueset-issue-type.html">IssueType</a>
 * @version R4
 * @author Roberto Araneda Espinoza
 */
export type IssueTypeType =
  | 'invalid'
  | 'structure'
  | 'required'
  | 'value'
  | 'invariant'
  | 'security'
  | 'login'
  | 'unknown'
  | 'expired'
  | 'forbidden'
  | 'suppressed'
  | 'processing'
  | 'not-supported'
  | 'duplicate'
  | 'multiple-matches'
  | 'not-found'
  | 'deleted'
  | 'too-long'
  | 'code-invalid'
  | 'extension'
  | 'too-costly'
  | 'business-rule'
  | 'conflict'
  | 'transient'
  | 'lock-error'
  | 'no-store'
  | 'exception'
  | 'timeout'
  | 'incomplete'
  | 'throttled'
  | 'informational';
