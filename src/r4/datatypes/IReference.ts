
import { IElement } from '../base';
import { IIdentifier } from './IIdentifier';

export interface IReference extends IElement {
  // Reference attributes
  reference?: string;
  type?: string;
  identifier?: IIdentifier;
  display?: string;

  // Extensions
  _display?: IElement;
  _type?: IElement;
  _reference?: IElement;
}
