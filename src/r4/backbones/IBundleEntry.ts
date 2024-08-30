import { IBackboneElement, IElement, IResource } from '../base';
import { IBundleLink } from './IBundleLink';
import { IBundleSearch } from './IBundleSearch';
import { IBundleRequest } from './IBundleRequest';
import { IBundleResponse } from './IBundleResponse';

export interface IBundleEntry extends IBackboneElement {
  link?: IBundleLink[];
  fullUrl?: string;
  // TODO: Add support for resource
  resource?: IResource & { [key: string]: any };
  search?: IBundleSearch;
  request?: IBundleRequest;
  response?: IBundleResponse;

  _fullUrl?: IElement;
}
