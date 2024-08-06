import { IElement } from '../base';
import { NarrativeStatusType } from '../types';
export interface INarrative extends IElement {
  status: NarrativeStatusType;
  div: string;
}
