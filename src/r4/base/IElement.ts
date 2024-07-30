import { IExtension } from '../datatypes';

/**
 * @summary FHIR R4
 * @description Base Element Definition - common elements, used across all resources.
 * @property {string} id - Unique id for inter-element referencing
 * @property {IExtension[]} extension - Additional content defined by implementations
 * @see http://hl7.org/fhir/R4/element.html http://hl7.org/fhir/R4/element.html
 * @author Roberto Araneda
 */

export interface IElement {
  /**
   * @description Unique id for inter-element referencing
   */
  id?: string;

  /**
   * @description Additional content defined by implementations
   */
  extension?: IExtension[];
}
