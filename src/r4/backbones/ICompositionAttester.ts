import { IBackboneElement, IElement } from '../base';
import { IReference } from '../datatypes';
import { CompositionAttestationModeType } from '../types';

export interface ICompositionAttester extends IBackboneElement {
  mode: CompositionAttestationModeType;
  time?: string;
  party?: IReference;
  _time?: IElement;
  _mode?: IElement;
}
