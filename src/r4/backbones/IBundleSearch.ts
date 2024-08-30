import { IBackboneElement, IElement } from '../base';

export interface IBundleSearch extends IBackboneElement {
  mode?: string;
  score?: number;

  _mode?: IElement;
  _score?: IElement;
}
