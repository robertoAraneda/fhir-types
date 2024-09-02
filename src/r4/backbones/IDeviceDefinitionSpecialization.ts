import { IBackboneElement, IElement } from '../base';

/**
 * @name IDeviceDefinitionSpecialization
 * @description The characteristics, operational status and capabilities of a medical-related component of a medical device.
 * @see <a href="https://hl7.org/fhir/R4/devicedefinition-definitions.html#DeviceDefinition.specialization">DeviceDefinitionSpecialization</a>
 * @version R4
 * @extends {IBackboneElement}
 * @author Claudia Alarcón Lazo
 */
export interface IDeviceDefinitionSpecialization extends IBackboneElement {
  /**
   * @description The standard that is used to operate and communicate.
   */
  systemType: string;

  /**
   * @description The version of the standard that is used to operate and communicate.
   */
  version?: string;

  // Extensions attributes
  /**
   * @description Extensions for systemType
   */
  _systemType?: IElement;

  /**
   * @description Extensions for version
   */
  _version?: IElement;
}
