import {
  IDeviceDefinitionUdiDeviceIdentifier,
  IDeviceDefinitionDeviceName,
  IDeviceDefinitionSpecialization,
  IDeviceDefinitionCapability,
  IDeviceDefinitionProperty,
  IDeviceDefinitionMaterial,
} from '../backbones';
import { IDomainResource, IElement } from '../base';
import {
  IAnnotation,
  ICodeableConcept,
  IContactPoint,
  IIdentifier,
  IProdCharacteristic,
  IProductShelfLife,
  IQuantity,
  IReference,
} from '../datatypes';

/**
 * @name IDeviceDefinition
 * @definition The characteristics, operational status and capabilities of a medical-related component of a medical device.
 * @see <a href="https://hl7.org/fhir/R4/devicedefinition.html">DeviceDefinition</a>
 * @version R4
 * @extends {IDomainResource}
 * @author Claudia Alarcón Lazo
 */
export interface IDeviceDefinition extends IDomainResource {
  /**
   * @description Unique instance identifiers assigned to a device by the software, manufacturers, other organizations or owners. For example: handle ID.
   */
  identifier?: IIdentifier[];

  /**
   * @description Unique device identifier (UDI) assigned to device label or package.  Note that the Device may include multiple udiCarriers as it either may include just the udiCarrier for the jurisdiction it is sold, or for multiple jurisdictions it could have been sold.
   */
  udiDeviceIdentifier?: IDeviceDefinitionUdiDeviceIdentifier[];

  /**
   * @description A name of the manufacturer.
   */
  manufacturerString?: string;

  /**
   * @description A name of the manufacturer.
   */
  manufacturerReference?: IReference;

  /**
   * @description A name given to the device to identify it.
   */
  deviceName?: IDeviceDefinitionDeviceName[];

  /**
   * @description The model number for the device.
   */
  modelNumber?: string;

  /**
   * @description What kind of device or device system this is.
   */
  type?: ICodeableConcept;

  /**
   * @description The capabilities supported on a  device, the standards to which the device conforms for a particular purpose, and used for the communication.
   */
  specialization?: IDeviceDefinitionSpecialization[];

  /**
   * @description The available versions of the device, e.g., software versions.
   */
  version?: string[];

  /**
   * @description Safety characteristics of the device.
   */
  safety?: ICodeableConcept[];

  /**
   * @description Shelf Life and storage information.
   */
  shelfLifeStorage?: IProductShelfLife[];

  /**
   * @description Dimensions, color etc.
   */
  physicalCharacteristics?: IProdCharacteristic[];

  /**
   * @description Language code for the human-readable text strings produced by the device (all supported).
   */
  languageCode?: ICodeableConcept[];

  /**
   * @description Device capabilities.
   */
  capability?: IDeviceDefinitionCapability[];

  /**
   * @description The actual configuration settings of a device as it actually operates, e.g., regulation status, time properties.
   */
  property?: IDeviceDefinitionProperty[];

  /**
   * @description An organization that is responsible for the provision and ongoing maintenance of the device.
   */
  owner?: IReference;

  /**
   * @description Contact details for an organization or a particular human that is responsible for the device.
   */
  contact?: IContactPoint[];

  /**
   * @description A network address on which the device may be contacted directly.
   */
  url?: string;

  /**
   * @description Access to on-line information about the device.
   */
  onlineInformation?: string;

  /**
   * @description Descriptive information, usage information or implantation information that is not captured in an existing element.
   */
  note?: IAnnotation[];

  /**
   * @description The quantity of the device present in the packaging (e.g. the number of devices present in a pack, or the number of devices in the same package of the medicinal product).
   */
  quantity?: IQuantity;

  /**
   * @description The parent device it can be part of.
   */
  parentDevice?: IReference;

  /**
   * @description A substance used to create the material(s) of which the device is made.
   */
  material?: IDeviceDefinitionMaterial[];

  // Extensions attributes
  /**
   * @description Extensions for manufacturerString
   */
  _manufacturerString?: IElement;

  /**
   * @description Extensions for modelNumber
   */
  _modelNumber?: IElement;

  /**
   * @description Extensions for version
   */
  _version?: IElement[];

  /**
   * @description Extensions for url
   */
  _url?: IElement;

  /**
   * @description Extensions for onlineInformation
   */
  _onlineInformation?: IElement;
}
