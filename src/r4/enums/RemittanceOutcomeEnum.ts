/**
 * @name RemittanceOutcome
 * @description The outcome of the request processing.
 * @description queued | complete | error | partial
 * @see <a href="https://hl7.org/fhir/R4/valueset-remittance-outcome.html">RemittanceOutcome</a>
 * @version R4
 * @author Claudia Alarcón Lazo
 */
export enum RemittanceOutcomeEnum {
  QUEUED = 'queued',
  COMPLETE = 'complete',
  ERROR = 'error',
  PARTIAL = 'partial',
}
