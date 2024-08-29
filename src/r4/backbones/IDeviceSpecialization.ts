import { IBackboneElement, IElement } from '../base';
import { ICodeableConcept } from '../datatypes';

/**
 * @name IDeviceSpecialization
 * @description The capabilities supported on a  device, the standards to which the device conforms for a particular purpose, and used for the communication.
 * @see <a href="https://hl7.org/fhir/R4/device-definitions.html#Device.specialization">DeviceSpecialization</a>
 * @version R4
 * @extends {IBackboneElement}
 * @author Claudia Alarcón Lazo
 */
export interface IDeviceSpecialization extends IBackboneElement {
  /**
   * @description The standard that is used to operate and communicate.
   */
  systemType: ICodeableConcept;

  /**
   * @description The version of the standard that is used to operate and communicate.
   */
  version?: string;

  // Extensions attributes
  /**
   * @description Extensions for version
   */
  _version?: IElement;
}
