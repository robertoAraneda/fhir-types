/**
 * @name IssueType
 * @description A code that describes the type of issue.
 * @description invalid | structure | required | value | invariant | security | login | unknown | expired | forbidden | suppressed | processing | not-supported | duplicate | multiple-matches | not-found | deleted | too-long | code-invalid | extension | too-costly | business-rule | conflict | transient | lock-error | no-store | exception | timeout | incomplete | throttled | informational
 * @see <a href="https://hl7.org/fhir/R4/valueset-issue-type.html">IssueType</a>
 * @version R4
 * @author Roberto Araneda Espinoza
 */
export enum IssueTypeEnum {
  INVALID = 'invalid',
  STRUCTURE = 'structure',
  REQUIRED = 'required',
  VALUE = 'value',
  INVARIANT = 'invariant',
  SECURITY = 'security',
  LOGIN = 'login',
  UNKNOWN = 'unknown',
  EXPIRED = 'expired',
  FORBIDDEN = 'forbidden',
  SUPPRESSED = 'suppressed',
  PROCESSING = 'processing',
  NOT_SUPPORTED = 'not-supported',
  DUPLICATE = 'duplicate',
  MULTIPLE_MATCHES = 'multiple-matches',
  NOT_FOUND = 'not-found',
  DELETED = 'deleted',
  TOO_LONG = 'too-long',
  CODE_INVALID = 'code-invalid',
  EXTENSION = 'extension',
  TOO_COSTLY = 'too-costly',
  BUSINESS_RULE = 'business-rule',
  CONFLICT = 'conflict',
  TRANSIENT = 'transient',
  LOCK_ERROR = 'lock-error',
  NO_STORE = 'no-store',
  EXCEPTION = 'exception',
  TIMEOUT = 'timeout',
  INCOMPLETE = 'incomplete',
  THROTTLED = 'throttled',
  INFORMATIONAL = 'informational',
}
