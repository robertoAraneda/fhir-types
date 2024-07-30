import { IElement } from '../base';
import { ContactPointSystemType, ContactPointUseType } from '../types';
import { IPeriod } from './IPeriod';

/**
 * @summary FHIR R4
 * @description Details for all kinds of technology-mediated contact points for a person or organization, including telephone, email, etc.
 * @property {IPeriod} period - Time period when the contact point was/is in use
 * @property {number} rank - Specify preferred order of use (1 = highest)
 * @property {ContactPointSystemEnum} system - phone | fax | email | pager | url | sms | other
 * @property {string} value - The actual contact point details
 * @property {ContactPointUseEnum} use - home | work | temp | old | mobile - purpose of this contact point
 * @property {IElement} _system - Extension of system element
 * @property {IElement} _value - Extension of value element
 * @property {IElement} _use - Extension of use element
 * @property {IElement} _rank - Extension of rank element
 * @see http://hl7.org/fhir/R4/datatypes.html#ContactPoint http://hl7.org/fhir/R4/datatypes.html#ContactPoint
 * @author Roberto Araneda
 * @example JSON Template
 * {
 *   // from Element: extension
 *   "system" : "<code>", // phone | fax | email | pager | url | sms | other
 *   "value" : "<string>", // The actual contact point details
 *   "use" : "<code>", // home | work | temp | old | mobile - purpose of this contact point
 *   "rank" : "<positiveInt>", // Specify preferred order of use (1 = highest)
 *   "period" : { Period } // Time period when the contact point was/is in use
 * }
 */
export interface IContactPoint extends IElement {
  /**
   * @description phone | fax | email | pager | url | sms | other
   */
  system?: ContactPointSystemType;

  /**
   * @description The actual contact point details
   */
  value?: string;

  /**
   * @description home | work | temp | old | mobile - purpose of this contact point
   */
  use?: ContactPointUseType;

  /**
   * @description Specify preferred order of use (1 = highest)
   */
  rank?: number;

  /**
   * @description Time period when the contact point was/is in use
   */
  period?: IPeriod;

  // Extensions

  /**
   * @description Extension of system element
   */
  _system?: IElement;

  /**
   * @description Extension of value element
   */
  _value?: IElement;

  /**
   * @description Extension of use element
   */
  _use?: IElement;

  /**
   * @description Extension of rank element
   */
  _rank?: IElement;
}
