import { IBackboneElement, IElement } from '../base';
import { DeviceNameTypeType } from '../types';

/**
 * @name IDeviceDeviceName
 * @description This represents the manufacturer's name of the device as provided by the device, from a UDI label, or by a person describing the Device. This typically would be used when a person provides the name(s) or when the device represents one of the names available from DeviceDefinition.
 * @see <a href="https://hl7.org/fhir/R4/device-definitions.html#Device.deviceName">DeviceDeviceName</a>
 * @version R4
 * @extends {IBackboneElement}
 * @author Claudia Alarcón Lazo
 */
export interface IDeviceDeviceName extends IBackboneElement {
  /**
   * @description The name of the device.
   */
  name: string;

  /**
   * @description The type of deviceName.
   * @description udi-label-name | user-friendly-name | patient-reported-name | manufacturer-name | model-name | other
   * @see <a href="https://hl7.org/fhir/R4/valueset-device-nametype.html">DeviceNameType</a>
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
