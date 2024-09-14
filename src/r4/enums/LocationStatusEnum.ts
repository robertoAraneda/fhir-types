/**
 * @name LocationStatus
 * @description Indicates whether the location is still in use.
 * @description active | suspended | inactive
 * @see <a href="https://hl7.org/fhir/R4/valueset-location-status.html">LocationStatus</a>
 * @version R4
 * @author Roberto Araneda Espinoza
 */
export enum LocationStatusEnum {
  ACTIVE = 'active',
  SUSPENDED = 'suspended',
  INACTIVE = 'inactive',
}
