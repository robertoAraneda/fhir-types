
import { IMeta } from '../datatypes/IMeta';
import { ResourceEnum } from '../enums';
import { ResourceType } from '../types';
import { IElement } from './IElement';

export interface IResource {
  resourceType: ResourceEnum | ResourceType
  id?: number | string;
  meta?: IMeta;
  implicitRules?: string;
  _implicitRules?: IElement;
  language?: string;
  _language?: IElement;
}
