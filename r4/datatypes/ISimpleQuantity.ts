import { IElement } from '../base';

export interface ISimpleQuantity extends IElement {
  value?: number;
  unit?: string;
  system?: string;
  code?: string;

  _value?: IElement;
  _code?: IElement;
  _system?: IElement;
  _unit?: IElement;
}
