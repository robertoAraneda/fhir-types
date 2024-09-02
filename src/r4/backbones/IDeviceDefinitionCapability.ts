import { IBackboneElement } from '../base';
import { ICodeableConcept } from '../datatypes';

/**
 * @name IDeviceDefinitionCapability
 * @description The characteristics, operational status and capabilities of a medical-related component of a medical device.
 * @see <a href="https://hl7.org/fhir/R4/devicedefinition-definitions.html#DeviceDefinition.capability">DeviceDefinitionCapability</a>
 * @version R4
 * @extends {IBackboneElement}
 * @author Claudia Alarcón Lazo
 */
export interface IDeviceDefinitionCapability extends IBackboneElement {
  /**
   * @description Type of capability.
   */
  type: ICodeableConcept;

  /**
   * @description Description of capability.
   */
  description?: ICodeableConcept;
}
