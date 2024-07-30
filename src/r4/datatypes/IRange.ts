import { IElement } from '../base';
import { ISimpleQuantity } from './ISimpleQuantity';

export interface IRange extends IElement {
  low?: ISimpleQuantity;
  high?: ISimpleQuantity;
}
