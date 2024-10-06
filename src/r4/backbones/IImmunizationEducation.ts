import { IBackboneElement, IElement } from '../base';

/**
 * @name IImmunizationEducation
 * @description Describes the event of a patient being administered a vaccine or a record of an immunization as reported by a patient, a clinician or another party.
 * @see <a href="https://hl7.org/fhir/R4/immunization-definitions.html#Immunization.education">ImmunizationEducation</a>
 * @version R4
 * @extends {IBackboneElement}
 * @uthor Claudia Alarcón Lazo
 */
export interface IImmunizationEducation extends IBackboneElement {
  /**
   * @description Identifier of the material presented to the patient.
   */
  documentType?: string;

  /**
   * @description Extensions for documentType
   */
  _documentType?: IElement;

  /**
   * @description Reference pointer to the educational material given to the patient if the information was on line.
   */
  reference?: string;

  /**
   * @description Extensions for reference
   */
  _reference?: IElement;

  /**
   * @description Date the educational material was published.
   */
  publicationDate?: string;

  /**
   * @description Extensions for publicationDate
   */
  _publicationDate?: IElement;

  /**
   * @description Date the educational material was given to the patient.
   */
  presentationDate?: string;

  /**
   * @description Extensions for presentationDate
   */
  _presentationDate?: IElement;
}
