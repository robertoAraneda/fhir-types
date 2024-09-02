import {
  IDeviceDeviceName,
  IDeviceProperty,
  IDeviceSpecialization,
  IDeviceUdiCarrier,
  IDeviceVersion,
} from '../backbones';
import { IDomainResource, IElement } from '../base';
import { IAnnotation, ICodeableConcept, IContactPoint, IIdentifier, IReference } from '../datatypes';
import { FHIRDeviceStatusType } from '../types';

/**
 * @name IDevice
 * @description A type of a manufactured item that is used in the provision of healthcare without being substantially changed through that activity. The device may be a medical or non-medical device.
 * @see <a href="https://hl7.org/fhir/R4/device.html">Device</a>
 * @version R4
 * @extends {IDomainResource}
 * @author Claudia Alarcón Lazo
 */
export interface IDevice extends IDomainResource {
  /**
   * @description Unique instance identifiers assigned to a device by manufacturers other organizations or owners.
   */
  identifier?: IIdentifier[];

  /**
   * @description The reference to the definition for the device.
   */
  definition?: IReference;

  /**
   * @description Unique device identifier (UDI) assigned to device label or package. Note that the Device may include multiple udiCarriers as it either may include just the udiCarrier for the jurisdiction it is sold, or for multiple jurisdictions it could have been sold.
   */
  udiCarrier?: IDeviceUdiCarrier[];

  /**
   * @description Status of the Device availability.
   * @description active | inactive | entered-in-error | unknown
   * @see <a href="https://hl7.org/fhir/R4/valueset-device-status.html">FHIRDeviceStatus</a>
   */
  status: FHIRDeviceStatusType;

  /**
   * @description Reason for the dtatus of the Device availability.
   */
  statusReason?: ICodeableConcept[];

  /**
   * @description The distinct identification string as required by regulation for a human cell, tissue, or cellular and tissue-based product.
   */
  distinctIdentifier?: string;

  /**
   * @description A name of the manufacturer.
   */
  manufacturer?: string;

  /**
   * @description The date and time when the device was manufactured.
   */
  manufactureDate?: string;

  /**
   * @description The date and time beyond which this device is no longer valid or should not be used (if applicable).
   */
  expirationDate?: string;

  /**
   * @description Lot number assigned by the manufacturer.
   */
  lotNumber?: string;

  /**
   * @description The serial number assigned by the organization when the device was manufactured.
   */
  serialNumber?: string;

  /**
   * @description This represents the manufacturer's name of the device as provided by the device, from a UDI label, or by a person describing the Device. This typically would be used when a person provides the name(s) or when the device represents one of the names available from DeviceDefinition.
   */
  deviceName?: IDeviceDeviceName[];

  /**
   * @description The model number for the device.
   */
  modelNumber?: string;

  /**
   * @description The part number of the device.
   */
  partNumber?: string;

  /**
   * @description The kind or type of device.
   */
  type?: ICodeableConcept;

  /**
   * @description The capabilities supported on a  device, the standards to which the device conforms for a particular purpose, and used for the communication.
   */
  specialization?: IDeviceSpecialization[];

  /**
   * @description The actual design of the device or software version running on the device.
   */
  version?: IDeviceVersion[];

  /**
   * @description The actual configuration settings of a device as it actually operates, e.g., regulation status, time properties.
   */
  property?: IDeviceProperty[];

  /**
   * @description Patient information, if the device is affixed to a person.
   */
  patient?: IReference;

  /**
   * @description An organization that is responsible for the provision and ongoing maintenance of the device.
   */
  owner?: IReference;

  /**
   * @description Contact details for an organization or a particular human that is responsible for the device.
   */
  contact?: IContactPoint[];

  /**
   * @description The place where the device can be found.
   */
  location?: IReference;

  /**
   * @description A network address on which the device may be contacted directly.
   */
  url?: string;

  /**
   * @description Descriptive information, usage information or implantation information that is not captured in an existing element.
   */
  note?: IAnnotation[];

  /**
   * @description Provides additional safety characteristics about a medical device.  For example devices containing latex.
   */
  safety?: ICodeableConcept[];

  /**
   * @description The parent device.
   */
  parent?: IReference;

  // Extensions attributes
  /**
   * @description Extensions for resourceType
   */
  _resourceType?: IElement;

  /**
   * @description Extensions for status
   */
  _status?: IElement;

  /**
   * @description Extensions for distinctIdentifier
   */
  _distinctIdentifier?: IElement;

  /**
   * @description Extensions for manufacturer
   */
  _manufacturer?: IElement;

  /**
   * @description Extensions for manufactureDate
   */
  _manufactureDate?: IElement;

  /**
   * @description Extensions for expirationDate
   */
  _expirationDate?: IElement;

  /**
   * @description Extensions for lotNumber
   */
  _lotNumber?: IElement;

  /**
   * @description Extensions for serialNumber
   */
  _serialNumber?: IElement;

  /**
   * @description Extensions for modelNumber
   */
  _modelNumber?: IElement;

  /**
   * @description Extensions for partNumber
   */
  _partNumber?: IElement;

  /**
   * @description Extensions for url
   */
  _url?: IElement;
}
