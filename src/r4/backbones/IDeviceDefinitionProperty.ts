import { IBackboneElement } from '../base';
import { ICodeableConcept, IQuantity } from '../datatypes';

/**
 * @name IDeviceDefinitionProperty
 * @description The characteristics, operational status and capabilities of a medical-related component of a medical device.
 * @see <a href="https://hl7.org/fhir/R4/devicedefinition-definitions.html#DeviceDefinition.property">DeviceDefinitionProperty</a>
 * @version R4
 * @extends { IBackboneElement }
 * @author Claudia Alarcón Lazo
 */
export interface IDeviceDefinitionProperty extends IBackboneElement {
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
