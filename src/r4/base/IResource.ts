import { IMeta } from '../datatypes/IMeta';
import { IElement } from './IElement';

export interface IResource {
  id?: number | string;
  meta?: IMeta;
  implicitRules?: string;
  _implicitRules?: IElement;
  language?: string;
  _language?: IElement;
}
