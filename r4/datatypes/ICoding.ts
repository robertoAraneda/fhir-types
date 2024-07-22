import { IElement } from '../base';

export interface ICoding extends IElement {
  // Coding attributes
  system?: string;
  version?: string;
  code?: string;
  display?: string;
  userSelected?: boolean;

  // Extensions
  _system?: IElement;
  _version?: IElement;
  _code?: IElement;
  _display?: IElement;
  _userSelected?: IElement;
}
