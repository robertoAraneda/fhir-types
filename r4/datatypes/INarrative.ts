
import { IElement } from '../base';
import { NarrativeStatusEnum } from '../enums';
import { NarrativeStatusType } from '../types';

type NarrativeStatus= NarrativeStatusEnum | NarrativeStatusType;

export interface INarrative extends IElement {
  status: NarrativeStatus;
  div: string;
}
