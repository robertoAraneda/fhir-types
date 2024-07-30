import { IElement } from '../base';
import { QuantityComparatorEnum } from '../enums';
import { QuantityComparatorType } from '../types';

export interface IQuantity extends IElement {
  value?: number;
  _value?: IElement;
  comparator?: QuantityComparatorType;
  _comparator?: IElement;
  unit?: string;
  _unit?: IElement;
  system?: string;
  _system?: IElement;
  code?: string;
  _code?: IElement;
}
