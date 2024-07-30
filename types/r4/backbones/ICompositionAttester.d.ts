import { IBackboneElement, IElement } from '../base';
import { IReference } from '../datatypes';
import { CompositionAttestationModeEnum } from '../enums';
import { CompositionAttestationModeType } from '../types';
declare type CompositionAttesterMode = CompositionAttestationModeEnum | CompositionAttestationModeType;
export interface ICompositionAttester extends IBackboneElement {
    mode: CompositionAttesterMode;
    time?: string;
    party?: IReference;
    _time?: IElement;
    _mode?: IElement;
}
export {};
