import { IBackboneElement } from '../base';
import { ICodeableConcept, IQuantity } from '../datatypes';

/**
 * @name IDeviceProperty
 * @description The actual configuration settings of a device as it actually operates, e.g., regulation status, time properties.
 * @see <a href="https://hl7.org/fhir/R4/device-definitions.html#Device.property">DeviceProperty</a>
 * @version R4
 * @extends {IBackboneElement}
 * @author Claudia Alarcón Lazo
 */
export interface IDeviceProperty extends IBackboneElement {
  /**
   * @description Code that specifies the property DeviceDefinitionPropetyCode (Extensible).
   */
  type: ICodeableConcept;

  /**
   * @description Property value as a quantity.
   */
  valueQuantity?: IQuantity[];

  /**
   * @description Property value as a code, e.g., NTP4 (synced to NTP).
   */
  valueCode?: ICodeableConcept[];
}
