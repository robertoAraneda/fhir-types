import { IBackboneElement, IElement } from '../base';

/**
 * @name IBundleLink
 * @description A series of links that provide context to this bundle.
 * @see <a href="https://hl7.org/fhir/R4/bundle-definitions.html#Bundle.link">BundleLink</a>
 * @version R4
 * @extends {IBackboneElement}
 * @author Roberto Araneda Espinoza
 */
export interface IBundleLink extends IBackboneElement {
  /**
   * @description A name which details the functional use for this link - see [http://www.iana.org/assignments/link-relations/link-relations.xhtml#link-relations-1](http://www.iana.org/assignments/link-relations/link-relations.xhtml#link-relations-1).
   */
  relation?: string;

  /**
   * @description Extensions for relation
   */
  _relation?: IElement;

  /**
   * @description The reference details for the link.
   */
  url?: string;

  /**
   * @description Extensions for url
   */
  _url?: IElement;
}
