import { IBackboneElement, IElement } from '../base';

export interface ILocationPosition extends IBackboneElement {
  longitude: number;
  latitude: number;
  altitude?: number;

  _longitude?: IElement;
  _latitude?: IElement;
  _altitude?: IElement;
}
