import { IBackboneElement, IElement } from '../base';
import { VisionBaseCodesType } from '../types';

/**
 * @name IVisionPrescriptionPrism
 * @description An authorization for the provision of glasses and/or contact lenses to a patient.
 * @see <a href="https://hl7.org/fhir/R4/visionprescription-definitions.html#VisionPrescription.lensSpecification.prism">VisionPrescriptionPrism</a>
 * @version R4
 * @extends {BackboneElement}
 * @author Claudia Alarcón Lazo
 */
export interface IVisionPrescriptionPrism extends IBackboneElement {
  /**
   * @description Amount of prism to compensate for eye alignment in fractional units.
   */
  amount: number;

  /**
   * @description Extensions for amount
   */
  _amount?: IElement;

  /**
   * @description The relative base, or reference lens edge, for the prism.
   * @description up | down | in | out
   * @see <a href="https://hl7.org/fhir/R4/valueset-vision-base-codes.html">VisionBaseCodes</a>
   */
  base: VisionBaseCodesType;

  /**
   * @description Extensions for base
   */
  _base?: IElement;
}
