import { IBackboneElement, IElement } from '../base';
import { IIdentifier, IReference } from '../datatypes';
import { CompositionDocumentRelationshipType } from '../types';

export interface ICompositionRelatesTo extends IBackboneElement {
  code: CompositionDocumentRelationshipType;
  targetIdentifier?: IIdentifier;
  targetReference?: IReference;
  _code?: IElement;
}
