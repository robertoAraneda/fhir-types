import { IDomainResource, IElement } from '../base';
import { ICodeableConcept, IIdentifier, IReference } from '../datatypes';
import { IGroupCharacteristic, IGroupMember } from '../backbones';
import { GroupTypeEnum } from '../enums';
import { GroupType } from '../types';

export interface IGroup extends IDomainResource {
  identifier?: IIdentifier[];
  active?: boolean;
  type: GroupType;
  actual: boolean;
  code?: ICodeableConcept;
  name?: string;
  quantity?: number;
  managingEntity?: IReference;
  characteristic?: IGroupCharacteristic[];
  member?: IGroupMember[];

  _active?: IElement;
  _type?: IElement;
  _actual?: IElement;
  _name?: IElement;
  _quantity?: IElement;
}
