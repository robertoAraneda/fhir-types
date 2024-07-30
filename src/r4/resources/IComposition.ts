import { IDomainResource, IElement, IResource } from '../base';
import { ICodeableConcept, IIdentifier, IReference } from '../datatypes';
import { ICompositionAttester, ICompositionEvent, ICompositionSection } from '../backbones';
import { CompositionConfidentialityEnum, CompositionStatusEnum } from '../enums';
import { CompositionConfidentialityType, CompositionStatusType } from '../types';
import { ICompositionRelatesTo } from '../backbones/ICompositionRelatesTo';


export interface IComposition extends IDomainResource {
  resourceType: 'Composition';
  identifier?: IIdentifier;
  status?: CompositionStatusEnum | CompositionStatusType;
  type: ICodeableConcept;
  category?: ICodeableConcept[];
  subject?: IReference;
  encounter?: IReference;
  date?: string;
  author: IReference[];
  title?: string;
  confidentiality?: CompositionConfidentialityEnum | CompositionConfidentialityType;
  attester?: ICompositionAttester[];
  custodian?: IReference;
  relatesTo?: ICompositionRelatesTo[];
  event?: ICompositionEvent[];
  section?: ICompositionSection[];
  _date?: IElement;
  _title?: IElement;
  _status?: IElement;
}
