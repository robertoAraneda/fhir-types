import { IBackboneElement, IElement } from '../base';
import { DeviceNameTypeType } from '../types';

/**
 * @name IDeviceDefinitionDeviceName
 * @description The characteristics, operational status and capabilities of a medical-related component of a medical device.
 * @see <a href="https://hl7.org/fhir/R4/devicedefinition-definitions.html#DeviceDefinition.deviceName">DeviceDefinitionDeviceName</a>
 * @version R4
 * @extends {IBackboneElement}
 * @author Claudia Alarcón Lazo
 */
export interface IDeviceDefinitionDeviceName extends IBackboneElement {
  /**
   * @description The name of the device.
   */
  name: string;

  /**
   * @description The type of resource
   */
  type: DeviceNameTypeType;

  // Extensions attributes
  /**
   * @description Extensions for name
   */
  _name?: IElement;

  /**
   * @description Extensions for type
   */
  _type?: IElement;
}
