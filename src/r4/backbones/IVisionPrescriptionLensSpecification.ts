import { IBackboneElement, IElement } from '../base';
import { IAnnotation, ICodeableConcept, ISimpleQuantity } from '../datatypes';
import { VisionEyeCodesType } from '../types';
import { IVisionPrescriptionPrism } from './IVisionPrescriptionPrism';

/**
 * @name IVisionPrescriptionLensSpecification
 * @description An authorization for the provision of glasses and/or contact lenses to a patient.
 * @see <a href="https://hl7.org/fhir/R4/visionprescription-definitions.html#VisionPrescription.lensSpecification">VisionPrescriptionLensSpecification</a>
 * @version R4
 * @extends {BackboneElement}
 * @author Claudia Alarcón Lazo
 */
export interface IVisionPrescriptionLensSpecification extends IBackboneElement {
  /**
   * @description Identifies the type of vision correction product which is required for the patient.
   */
  product: ICodeableConcept;

  /**
   * @description The eye for which the lens specification applies.
   * @description right | left
   * @see <a href="https://hl7.org/fhir/R4/valueset-vision-eye-codes.html">VisionEyeCodes</a>
   */
  eye: VisionEyeCodesType;

  /**
   * @description Extensions for eye
   */
  _eye?: IElement;

  /**
   * @description Lens power measured in dioptres (0.25 units).
   */
  sphere?: number;

  /**
   * @description Extensions for sphere
   */
  _sphere?: IElement;

  /**
   * @description Power adjustment for astigmatism measured in dioptres (0.25 units).
   */
  cylinder?: number;

  /**
   * @description Extensions for cylinder
   */
  _cylinder?: IElement;

  /**
   * @description Adjustment for astigmatism measured in integer degrees.
   */
  axis?: number;

  /**
   * @description Extensions for axis
   */
  _axis?: IElement;

  /**
   * @description Allows for adjustment on two axis.
   */
  prism?: IVisionPrescriptionPrism[];

  /**
   * @description Power adjustment for multifocal lenses measured in dioptres (0.25 units).
   */
  add?: number;

  /**
   * @description Extensions for add
   */
  _add?: IElement;

  /**
   * @description Contact lens power measured in dioptres (0.25 units).
   */
  power?: number;

  /**
   * @description Extensions for power
   */
  _power?: IElement;

  /**
   * @description Back curvature measured in millimetres.
   */
  backCurve?: number;

  /**
   * @description Extensions for backCurve
   */
  _backCurve?: IElement;

  /**
   * @description Contact lens diameter measured in millimetres.
   */
  diameter?: number;

  /**
   * @description Extensions for diameter
   */
  _diameter?: IElement;

  /**
   * @description The recommended maximum wear period for the lens.
   */
  duration?: ISimpleQuantity;

  /**
   * @description Special color or pattern.
   */
  color?: string;

  /**
   * @description Extensions for color
   */
  _color?: IElement;

  /**
   * @description Brand recommendations or restrictions.
   */
  brand?: string;

  /**
   * @description Extensions for brand
   */
  _brand?: IElement;

  /**
   * @description Notes for special requirements such as coatings and lens materials.
   */
  note?: IAnnotation[];
}
