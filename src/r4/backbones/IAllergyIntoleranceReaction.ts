import { IBackboneElement, IElement } from '../base';
import { IAnnotation, ICodeableConcept } from '../datatypes';
import { AllergyIntoleranceSeverityType } from '../types';

export interface IAllergyIntoleranceReaction extends IBackboneElement {
  /**
   * @description Identification of the specific substance (or pharmaceutical product) considered to be responsible for the Adverse Reaction event.
   */
  substance?: ICodeableConcept;

  /**
   * @description Clinical symptoms and/or signs that are observed or associated with the adverse reaction event.
   */
  manifestation: ICodeableConcept[];

  /**
   * @description Text description about the reaction as a whole, including details of the manifestation if required.
   */
  description?: string;

  /**
   * @description Record of the date and/or time of the onset of the reaction.
   */
  onset?: string;

  /**
   * @description Clinical assessment of the severity of the reaction event as a whole, potentially considering multiple different manifestations.
   */
  severity?: AllergyIntoleranceSeverityType;

  /**
   * @description Identification of the route by which the subject was exposed to the substance.
   */
  exposureRoute?: ICodeableConcept;

  /**
   * @description Additional text about the adverse reaction event not captured in other fields.
   */
  note?: IAnnotation[];

  // Extensions attributes
  /**
   * @description Extension for description
   */
  _description?: IElement;

  /**
   * @description Extension for onset
   */
  _onset?: IElement;

  /**
   * @description Extension for severity
   */
  _severity?: IElement;
}
