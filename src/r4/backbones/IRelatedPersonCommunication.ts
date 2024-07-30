import { IBackboneElement, IElement } from '../base';
import { ICodeableConcept } from '../datatypes';

/**
 * @summary FHIR R4
 * @description A language which may be used to communicate with the patient about his or her health.
 * @property {ICodeableConcept} language
 * @property {boolean} preferred
 * @property {IElement} _preferred
 * @author Roberto Araneda
 */
export interface IRelatedPersonCommunication extends IBackboneElement {
  /**
   * @description The language which can be used to communicate with the related person about the patient's health.
   */
  language: ICodeableConcept;

  /**
   * @description Language preference indicator
   */
  preferred?: boolean;

  /**
   * @description Extensions for preferred
   */
  _preferred?: IElement;
}
