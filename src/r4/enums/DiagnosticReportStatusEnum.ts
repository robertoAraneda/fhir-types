/**
 * @name DiagnosticReportStatus
 * @description The status of the diagnostic report.
 * @description registered | partial | preliminary | final | amended | corrected | appended | cancelled | entered-in-error | unknown
 * @see <a href="https://hl7.org/fhir/R4/valueset-diagnostic-report-status.html">DiagnosticReportStatus</a>
 * @version R4
 * @author Claudia Alarcón Lazo
 */
export enum DiagnosticReportStatusEnum {
  REGISTERED = 'registered',
  PARTIAL = 'partial',
  PRELIMINARY = 'preliminary',
  FINAL = 'final',
  AMENDED = 'amended',
  CORRECTED = 'corrected',
  APPENDED = 'appended',
  CANCELLED = 'cancelled',
  ENTERED_IN_ERROR = 'entered-in-error',
  UNKNOWN = 'unknown',
}
