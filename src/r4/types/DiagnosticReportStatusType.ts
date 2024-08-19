/**
 * @name DiagnosticReportStatus
 * @description The status of the diagnostic report.
 * @description registered | partial | preliminary | final | amended | corrected | appended | cancelled | entered-in-error | unknown
 * @see <a href="https://hl7.org/fhir/R4/valueset-diagnostic-report-status.html">DiagnosticReportStatus</a>
 * @version R4
 * @author Claudia Alarcón Lazo
 */
export type DiagnosticReportStatusType =
  | 'registered'
  | 'partial'
  | 'preliminary'
  | 'final'
  | 'amended'
  | 'corrected'
  | 'appended'
  | 'cancelled'
  | 'entered-in-error'
  | 'unknown';
