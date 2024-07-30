import { IResource } from './IResource';
import { IExtension, INarrative } from '../datatypes';

export interface IDomainResource extends IResource {
  text?: INarrative;
  contained?: any[];
  extension?: IExtension[];
  modifierExtension?: IExtension[];
}
