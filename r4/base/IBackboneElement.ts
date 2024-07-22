import { IExtension } from '../datatypes';
import { IElement } from './IElement';

export interface IBackboneElement extends IElement {
  modifierExtension?: IExtension[];
}
