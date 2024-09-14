/**
 * @name EndpointStatus
 * @description The status of the endpoint.
 * @description active | suspended | error | off | entered-in-error | test
 * @see <a href="https://hl7.org/fhir/R4/valueset-endpoint-status.html">EndpointStatus</a>
 * @version R4
 * @author Roberto Araneda Espinoza
 */
export enum EndpointStatusEnum {
  ACTIVE = 'active',
  SUSPENDED = 'suspended',
  ERROR = 'error',
  OFF = 'off',
  ENTERED_IN_ERROR = 'entered-in-error',
  TEST = 'test',
}
