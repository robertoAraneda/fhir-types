import { IElement, IResource } from '../base';
import { IIdentifier, ISignature } from '../datatypes';
import { IBundleLink, IBundleEntry } from '../backbones';
import { BundleTypeType } from '../types';

/**
 * @name IBundle
 * @description A container for a collection of resources.
 * @see <a href="https://hl7.org/fhir/R4/bundle.html">Bundle</a>
 * @version R4
 * @extends {IResource}
 * @author Roberto Araneda Espinoza
 */
export interface IBundle extends IResource {
  /**
   * @description A persistent identifier for the bundle that won't change as a bundle is copied from server to server.
   */
  identifier?: IIdentifier;

  /**
   * @description Indicates the purpose of this bundle - how it is intended to be used.
   * @description document | message | transaction | transaction-response | batch | batch-response | history | searchset | collection.
   * @see <a href="https://hl7.org/fhir/R4/valueset-bundle-type.html">BundleType</a>
   */
  type: BundleTypeType;

  /**
   * @description Extensions for type
   */
  _type?: IElement;

  /**
   * @description The date/time that the bundle was assembled - i.e. when the resources were placed in the bundle.
   */
  timestamp?: string;

  /**
   * @description Extensions for timestamp
   */
  _timestamp?: IElement;

  /**
   * @description If a set of search matches, this is the total number of entries of type 'match' across all pages in the search.  It does not include search.mode = 'include' or 'outcome' entries and it does not provide a count of the number of entries in the Bundle.
   */
  total?: number;

  /**
   * @description Extensions for total
   */
  _total?: IElement;

  /**
   * @description A series of links that provide context to this bundle.
   */
  link?: IBundleLink[];

  /**
   * @description An entry in a bundle resource - will either contain a resource or information about a resource (transactions and history only).
   */
  entry?: IBundleEntry[];

  /**
   * @description Digital Signature - base64 encoded. XML-DSig or a JWT.
   */
  signature?: ISignature;
}
