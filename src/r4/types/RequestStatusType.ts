/**
 * @name RequestStatus
 * @description Codes identifying the lifecycle stage of a request.
 * @description draft | active | on-hold | revoked | completed | entered-in-error | unknown
 * @see <a href="https://hl7.org/fhir/R4/valueset-request-status.html">RequestStatus</a>
 * @version R4
 * @author Roberto Araneda Espinoza
 */
export type RequestStatusType =
  | 'draft'
  | 'active'
  | 'on-hold'
  | 'revoked'
  | 'completed'
  | 'entered-in-error'
  | 'unknown';
