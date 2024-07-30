import { IBackboneElement, IElement } from '../base';
import { ICodeableConcept, INarrative, IReference } from '../datatypes';
import { CompositionSectionListModeType } from '../types';

export interface ICompositionSection extends IBackboneElement {
  title?: string;
  code?: ICodeableConcept;
  author?: IReference[];
  focus?: IReference;
  text?: INarrative;
  mode?: CompositionSectionListModeType;
  orderedBy?: ICodeableConcept;
  entry?: IReference[];
  emptyReason?: ICodeableConcept;
  section?: ICompositionSection[];
  _title?: IElement;
  _mode?: IElement;
}
