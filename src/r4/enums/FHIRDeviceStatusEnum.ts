/**
 * @name FHIRDeviceStatus
 * @description Status of the Device availability.
 * @description active | inactive | entered-in-error | unknown
 * @see <a href="https://hl7.org/fhir/R4/valueset-device-status.html">FHIRDeviceStatus</a>
 * @version R4
 * @author Claudia Alarcón Lazo
 */
export enum FHIRDeviceStatusEnum {
  ACTIVE = 'active',
  INACTIVE = 'inactive',
  ENTERED_IN_ERROR = 'entered-in-error',
  UNKNOWN = 'unknown',
}
