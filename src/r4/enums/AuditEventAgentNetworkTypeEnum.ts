/**
 * @name AuditEventAgentNetworkType
 * @description The type of network access point of this agent in the audit event.
 * @description 1 | 2 | 3 | 4 | 5
 * @see <a href="https://hl7.org/fhir/R4/valueset-network-type.html">AuditEventAgentNetworkType</a>
 * @version R4
 * @author Roberto Araneda Espinoza
 */
export enum AuditEventAgentNetworkTypeEnum {
  MACHINE_NAME = '1',
  IP_ADDRESS = '2',
  TELEPHONE_NUMBER = '3',
  EMAIL_ADDRESS = '4',
  URI = '5',
}