import { IBackboneElement, IElement } from '../base';
import { ICodeableConcept } from '../datatypes';

/**
 * @name IDeviceDefinitionMaterial
 * @description The characteristics, operational status and capabilities of a medical-related component of a medical device.
 * @see <a href="https://hl7.org/fhir/R4/devicedefinition-definitions.html#DeviceDefinition.material">DeviceDefinitionMaterial</a>
 * @version R4
 * @extends {IBackboneElement}
 * @author Claudia Alarcón Lazo
 */
export interface IDeviceDefinitionMaterial extends IBackboneElement {
  /**
   * @description The substance.
   */
  substance: ICodeableConcept;

  /**
   * @description Indicates an alternative material of the device.
   */
  alternate?: boolean;

  /**
   * @description Whether the substance is a known or suspected allergen.
   */
  allergenicIndicator?: boolean;

  // Extensions attributes
  /**
   * @description Extensions for alternate
   */
  _alternate?: IElement;

  /**
   * @description Extensions for allergenicIndicator
   */
  _allergenicIndicator?: IElement;
}
