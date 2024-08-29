import { IBackboneElement, IElement } from '../base';
import { UDIEntryTypeType } from '../types';

/**
 * @name IDeviceUdiCarrier
 * @description Unique device identifier (UDI) assigned to device label or package. Note that the Device may include multiple udiCarriers as it either may include just the udiCarrier for the jurisdiction it is sold, or for multiple jurisdictions it could have been sold.
 * @see <a href="https://hl7.org/fhir/R4/device-definitions.html#Device.udiCarrier">DeviceUdiCarrier</a>
 * @version R4
 * @extends {IBackboneElement}
 * @author Claudia Alarcón Lazo
 */
export interface IDeviceUdiCarrier extends IBackboneElement {
  /**
   * @description The device identifier (DI) is a mandatory, fixed portion of a UDI that identifies the labeler and the specific version or model of a device.
   */
  deviceIdentifier?: string;

  /**
   * @description Organization that is charged with issuing UDIs for devices.
   */
  issuer?: string;

  /**
   * @description The identity of the authoritative source for UDI generation within a jurisdiction. All UDIs are globally unique within a single namespace with the appropriate repository uri as the system. For example, UDIs of devices managed in the U.S. by the FDA, the value is http://hl7.org/fhir/NamingSystem/fda-udi.
   */
  jurisdiction?: string;

  /**
   * @description The full UDI carrier of the Automatic Identification and Data Capture (AIDC) technology representation of the barcode string as printed on the packaging of the device - e.g., a barcode or RFID.   Because of limitations on character sets in XML and the need to round-trip JSON data through XML, AIDC Formats *SHALL* be base64 encoded.
   */
  carrierAIDC?: string;

  /**
   * @description The full UDI carrier as the human readable form (HRF) representation of the barcode string as printed on the packaging of the device.
   */
  carrierHRF?: string;

  /**
   * @description A coded entry to indicate how the data was entered.
   */
  entryType?: UDIEntryTypeType;

  // Extensions attributes
  /**
   * @descrption Extensions for deviceIdentifier
   */
  _deviceIdentifier?: IElement;

  /**
   * @descrption Extensions for issuer
   */
  _issuer?: IElement;

  /**
   * @descrption Extensions for jurisdiction
   */
  _jurisdiction?: IElement;

  /**
   * @descrption Extensions for carrierAIDC
   */
  _carrierAIDC?: IElement;

  /**
   * @descrption Extensions for carrierHRF
   */
  _carrierHRF?: IElement;

  /**
   * @descrption Extensions for entryType
   */
  _entryType?: IElement;
}
