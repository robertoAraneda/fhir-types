/**
 * @name DeviceNameType
 * @description The type of deviceName.
 * @description udi-label-name | user-friendly-name | patient-reported-name | manufacturer-name | model-name | other
 * @see <a href="https://hl7.org/fhir/R4/valueset-device-nametype.html">DeviceNameType</a>
 * @version R4
 * @author Claudia Alarcón Lazo
 */
export type DeviceNameTypeType =
  | 'udi-label-name'
  | 'user-friendly-name'
  | 'patient-reported-name'
  | 'manufacturer-name'
  | 'model-name'
  | 'other';
