import { IBackboneElement, IElement } from '../base';
import { ICodeableConcept, INarrative, IReference } from '../datatypes';
import { CompositionSectionListModeEnum } from '../enums';
import { CompositionSectionListModeType } from '../types';
declare type CompositionSectionListMode = CompositionSectionListModeEnum | CompositionSectionListModeType;
export interface ICompositionSection extends IBackboneElement {
    title?: string;
    code?: ICodeableConcept;
    author?: IReference[];
    focus?: IReference;
    text?: INarrative;
    mode?: CompositionSectionListMode;
    orderedBy?: ICodeableConcept;
    entry?: IReference[];
    emptyReason?: ICodeableConcept;
    section?: ICompositionSection[];
    _title?: IElement;
    _mode?: IElement;
}
export {};
