import { IBackboneElement, IElement, IResource } from '../base';
import { IBundleLink } from './IBundleLink';
import { IBundleEntrySearch } from './IBundleEntrySearch';
import { IBundleEntryRequest } from './IBundleEntryRequest';
import { IBundleEntryResponse } from './IBundleEntryResponse';

export interface IBundleEntry extends IBackboneElement {
  link?: IBundleLink[];
  fullUrl?: string;
  // TODO: Add support for resource
  resource?: IResource & { [key: string]: any };
  search?: IBundleEntrySearch;
  request?: IBundleEntryRequest;
  response?: IBundleEntryResponse;

  _fullUrl?: IElement;
}
