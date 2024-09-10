import { IBackboneElement, IElement } from '../base';
import { SearchEntryModeType } from '../types';

/**
 * @name IBundleSearch
 * @description Information about the search process that lead to the creation of this entry.
 * @see <a href="https://hl7.org/fhir/R4/bundle-definitions.html#Bundle.entry.search">BundleSearch</a>
 * @version R4
 * @extends {IBackboneElement}
 * @author Roberto Araneda Espinoza
 */
export interface IBundleSearch extends IBackboneElement {
  /**
   * @description Why this entry is in the result set - whether it\u0027s included as a match or because of an _include requirement, or to convey information or warning information about the search process.
   * @description match | include | outcome
   * @see <a href="https://hl7.org/fhir/R4/valueset-search-entry-mode.html">SearchEntryMode</a>
   */
  mode?: SearchEntryModeType;

  /**
   * @description Extensions for mode
   */
  _mode?: IElement;

  /**
   * @description When searching, the server\u0027s search ranking score for the entry.
   */
  score?: number;

  /**
   * @description Extensions for score
   */
  _score?: IElement;
}
