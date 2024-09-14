/**
 * @name UDIEntryType
 * @description Codes to identify how UDI data was entered.
 * @description barcode | rfid | manual | card | self-reported | unknown
 * @see <a href="https://hl7.org/fhir/R4/valueset-udi-entry-type.html">UDIEntryType</a>
 * @version R4
 * @author Claudia Alarcón Lazo
 */
export enum UDIEntryTypeEnum {
  BARCODE = 'barcode',
  RFID = 'rfid',
  MANUAL = 'manual',
  CARD = 'card',
  SELF_REPORTED = 'self-reported',
  UNKNOWN = 'unknown',
}
