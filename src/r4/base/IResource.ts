import { IMeta } from '../datatypes/IMeta';
import { IElement } from './IElement';

export interface IResource {
  resourceType?: string;
  id?: number | string;
  meta?: IMeta;
  implicitRules?: string;
  _implicitRules?: IElement;
  language?: string;
  _language?: IElement;
}
