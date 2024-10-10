import { IElement } from '../base';
import { IContactPoint } from './IContactPoint';

/**
 * @name IContactDetail
 * @description Specifies contact information for a person or organization.
 * @see <a href="https://hl7.org/fhir/R4/metadatatypes.html#ContactDetail">ContactDetail</a>
 * @version R4
 * @extends {IElement}
 * @author Claudia Alarcón Lazo
 */
export interface IContactDetail extends IElement {
  /**
   * @description The name of an individual to contact.
   */
  name?: string;

  /**
   * @description Extensions for name
   */
  _name?: IElement;

  /**
   * @description The contact details for the individual (if a name was provided) or the organization.
   */
  telecom?: IContactPoint[];
}
