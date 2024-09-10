import { IBackboneElement, IElement } from '../base';
import { HTTPVerbType } from '../types';

/**
 * @name IBundleRequest
 * @description Additional information about how this entry should be processed as part of a transaction or batch.  For history, it shows how the entry was processed to create the version contained in the entry.
 * @see <a href="https://hl7.org/fhir/R4/bundle-definitions.html#Bundle.entry.request">BundleRequest</a>
 * @version R4
 * @extends {IBackboneElement}
 * @author Roberto Araneda Espinoza
 */
export interface IBundleRequest extends IBackboneElement {
  /**
   * @description In a transaction or batch, this is the HTTP action to be executed for this entry. In a history bundle, this indicates the HTTP action that occurred.
   * @description GET | HEAD | POST | PUT | DELETE | PATCH
   * @see <a href="https://hl7.org/fhir/R4/valueset-http-verb.html">HTTPVerb</a>
   */
  method: HTTPVerbType;

  /**
   * @description Extensions for method
   */
  _method?: IElement;

  /**
   * @description The URL for this entry, relative to the root (the address to which the request is posted).
   */
  url: string;

  /**
   * @description Extensions for url
   */
  _url?: IElement;

  /**
   * @description If the ETag values match, return a 304 Not Modified status. See the API documentation for ["Conditional Read"](http.html#cread).
   */
  ifNoneMatch?: string;

  /**
   * @description Extensions for ifNoneMatch
   */
  _ifNoneMatch?: IElement;

  /**
   * @description Only perform the operation if the last updated date matches. See the API documentation for ["Conditional Read"](http.html#cread).
   */
  ifModifiedSince?: string;

  /**
   * @description Extensions for ifModifiedSince
   */
  _ifModifiedSince?: IElement;

  /**
   * @description Only perform the operation if the Etag value matches. For more information, see the API section ["Managing Resource Contention"](http.html#concurrency).
   */
  ifMatch?: string;

  /**
   * @description Extensions for ifMatch
   */
  _ifMatch?: IElement;

  /**
   * @description Instruct the server not to perform the create if a specified resource already exists. For further information, see the API documentation for [\"Conditional Create\"](http.html#ccreate). This is just the query portion of the URL - what follows the \"?\" (not including the \"?\").
   */
  ifNoneExist?: string;

  /**
   * @description Extensions for ifNoneExist
   */
  _ifNoneExist?: IElement;
}
