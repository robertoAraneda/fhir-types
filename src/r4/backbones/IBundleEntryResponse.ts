import { IBackboneElement, IElement } from '../base';

export interface IBundleEntryResponse extends IBackboneElement {
  status?: string;
  location?: string;
  etag?: string;
  lastModified?: string;
  outcome?: any;

  _status?: IElement;
  _location?: IElement;
  _etag?: IElement;
  _lastModified?: IElement;
}
