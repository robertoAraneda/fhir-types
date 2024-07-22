import { IDomainResource, IElement, IResource } from '../base';
import { ICodeableConcept, IIdentifier, IReference } from '../datatypes';
import { CompositionStatusEnum } from '../../enums';
import { CompositionStatusType } from '../../types';
import { ICompositionAttester } from '../backbones';
import ICompositionRelatesTo from '../backbones/ICompositionRelatesTo';
import ICompositionEvent from '../backbones/ICompositionEvent';
import ICompositionSection from '../backbones/ICompositionSection';
import CompositionConfidentialityEnum from '../../enums/CompositionConfidentialityEnum';
import CompositionConfidentialityType from '../../types/CompositionConfidentialityType';

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
