import { IBackboneElement, IElement } from '../base';
import { ICodeableConcept, IIdentifier } from '../datatypes';

/**
 * @name IDeviceVersion
 * @description The actual design of the device or software version running on the device.
 * @see <a href="https://hl7.org/fhir/R4/device-definitions.html#Device.version">DeviceVersion</a>
 * @version R4
 * @extends {IBackboneElement}
 * @author Claudia Alarcón Lazo
 */
export interface IDeviceVersion extends IBackboneElement {
  /**
   * @description The type of the device version.
   */
  type?: ICodeableConcept;

  /**
   * @description A single component of the device version.
   */
  component?: IIdentifier;

  /**
   * @description The version text.
   */
  value: string;

  // Extensions attributes
  /**
   * @description Extensions for value
   */
  _value?: IElement;
}
