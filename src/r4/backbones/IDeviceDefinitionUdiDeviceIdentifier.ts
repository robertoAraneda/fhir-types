import { IBackboneElement, IElement } from '../base';

/**
 * @name IDeviceDefinitionUdiDeviceIdentifier
 * @description The characteristics, operational status and capabilities of a medical-related component of a medical device.
 * @see <a href="https://hl7.org/fhir/R4/devicedefinition-definitions.html#DeviceDefinition.udiDeviceIdentifier">DeviceDefinitionUdiDeviceIdentifier</a>
 * @version R4
 * @extends {IBackboneElement}
 * @author Claudia Alarcón Lazo
 */
export interface IDeviceDefinitionUdiDeviceIdentifier extends IBackboneElement {
  /**
   * @description The type of resource
   */
  deviceIdentifier: string;

  /**
   * @description The type of resource
   */
  issuer: string;

  /**
   * @description The type of resource
   */
  jurisdiction: string;

  // Extensions attributes
  /**
   * @description Extensions for deviceIdentifier
   */
  _deviceIdentifier?: IElement;

  /**
   * @description Extensions for issuer
   */
  _issuer?: IElement;

  /**
   * @description Extensions for jurisdiction
   */
  _jurisdiction?: IElement;
}
