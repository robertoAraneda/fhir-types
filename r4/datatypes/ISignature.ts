import { IElement } from '../base';
import { ICoding } from './ICoding';
import { IReference } from './IReference';

export interface ISignature extends IElement {
  type: ICoding[];
  when: string;
  who: IReference;
  onBehalfOf?: IReference;
  targetFormat?: string;
  sigFormat?: string;
  data?: string;

  _when?: IElement;
  _targetFormat?: IElement;
  _sigFormat?: IElement;
  _data?: IElement;
}
