import { IBackboneElement, IElement } from '../base';
import { IIdentifier, IReference } from '../datatypes';
import { CompositionDocumentRelationshipTypeEnum } from '../enums';
import { CompositionDocumentRelationshipType } from '../types';
declare type CompositionRelatesToCode = CompositionDocumentRelationshipTypeEnum | CompositionDocumentRelationshipType;
export interface ICompositionRelatesTo extends IBackboneElement {
    code: CompositionRelatesToCode;
    targetIdentifier?: IIdentifier;
    targetReference?: IReference;
    _code?: IElement;
}
export {};
