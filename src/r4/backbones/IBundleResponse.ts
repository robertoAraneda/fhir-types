import { IBackboneElement, IElement, IResource } from '../base';

/**
 * @name IBundleResponse
 * @description Indicates the results of processing the corresponding \u0027request\u0027 entry in the batch or transaction being responded to or what the results of an operation where when returning history.
 * @see <a href="https://hl7.org/fhir/R4/bundle-definitions.html#Bundle.entry.response">BundleResponse</a>
 * @version R4
 * @extends {IBackboneElement}
 * @author Roberto Araneda Espinoza
 */
export interface IBundleResponse extends IBackboneElement {
  /**
   * @description The status code returned by processing this entry. The status SHALL start with a 3 digit HTTP code (e.g. 404) and may contain the standard HTTP description associated with the status code.
   */
  status?: string;

  /**
   * @description Extensions for status
   */
  _status?: IElement;

  /**
   * @description The location header created by processing this operation, populated if the operation returns a location.
   */
  location?: string;

  /**
   * @description Extensions for location
   */
  _location?: IElement;

  /**
   * @description The Etag for the resource, if the operation for the entry produced a versioned resource (see [Resource Metadata and Versioning](http.html#versioning) and [Managing Resource Contention](http.html#concurrency)).
   */
  etag?: string;

  /**
   * @description Extensions for etag
   */
  _etag?: IElement;

  /**
   * @description The date/time that the resource was modified on the server.
   */
  lastModified?: string;

  /**
   * @description Extensions for lastModified
   */
  _lastModified?: IElement;

  /**
   * @description An OperationOutcome containing hints and warnings produced as part of processing this entry in a batch or transaction.
   */
  outcome?: IResource & { [key: string]: any };
}
