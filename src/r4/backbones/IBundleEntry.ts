import { IBackboneElement, IElement, IResource } from '../base';
import { IBundleLink } from './IBundleLink';
import { IBundleSearch } from './IBundleSearch';
import { IBundleRequest } from './IBundleRequest';
import { IBundleResponse } from './IBundleResponse';

/**
 * @name IBundleEntry
 * @description An entry in a bundle resource - will either contain a resource or information about a resource (transactions and history only).
 * @see <a href="https://hl7.org/fhir/R4/bundle-definitions.html#Bundle.entry">BundleEntry</a>
 * @version R4
 * @extends {IBackboneElement}
 * @author Roberto Araneda Espinoza
 */
export interface IBundleEntry extends IBackboneElement {
  /**
   * @description A series of links that provide context to this entry.
   */
  link?: IBundleLink[];

  /**
   * @description The Absolute URL for the resource. The fullUrl SHALL NOT disagree with the id in the resource - i.e. if the fullUrl is not a urn:uuid, the URL shall be version-independent URL consistent with the Resource.id. The fullUrl is a version independent reference to the resource. The fullUrl element SHALL have a value except that: \n* fullUrl can be empty on a POST (although it does not need to when specifying a temporary id for reference in the bundle)\n* Results from operations might involve resources that are not identified.
   */
  fullUrl?: string;

  /**
   * @description Extensions for fullUrl
   */
  _fullUrl?: IElement;

  /**
   * @description The Resource for the entry. The purpose/meaning of the resource is determined by the Bundle.type.
   */
  // TODO: Add support for resource
  resource?: IResource & { [key: string]: any };

  /**
   * @description Information about the search process that lead to the creation of this entry.
   */
  search?: IBundleSearch;

  /**
   * @description "Additional information about how this entry should be processed as part of a transaction or batch.  For history, it shows how the entry was processed to create the version contained in the entry.
   */
  request?: IBundleRequest;

  /**
   * @description Indicates the results of processing the corresponding \u0027request\u0027 entry in the batch or transaction being responded to or what the results of an operation where when returning history.
   */
  response?: IBundleResponse;
}
