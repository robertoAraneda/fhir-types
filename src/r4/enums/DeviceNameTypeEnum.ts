/**
 * @name DeviceNameType
 * @description The type of deviceName.
 * @description udi-label-name | user-friendly-name | patient-reported-name | manufacturer-name | model-name | other
 * @see <a href="https://hl7.org/fhir/R4/valueset-device-nametype.html">DeviceNameType</a>
 * @version R4
 * @author Claudia Alarcón Lazo
 */
export enum DeviceNameTypeEnum {
  UDI_LABEL_NAME = 'udi-label-name',
  USER_FRIENDLY_NAME = 'user-friendly-name',
  PATIENT_REPORTED_NAME = 'patient-reported-name',
  MANUFACTURER_NAME = 'manufacturer-name',
  MODEL_NAME = 'model-name',
  OTHER = 'other',
}
