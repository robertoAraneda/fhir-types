import { IDomainResource, IElement } from '../base';
import { ICodeableConcept, IIdentifier, IPeriod, IReference } from '../datatypes';
import { IAccountCoverage, IAccountGuarantor } from '../backbones';
import { AccountStatusType } from '../types';

export interface IAccount extends IDomainResource {
  identifier?: IIdentifier[];
  status: AccountStatusType;
  type?: ICodeableConcept;
  name?: string;
  subject?: IReference[];
  servicePeriod?: IPeriod;
  coverage?: IAccountCoverage[];
  owner?: IReference;
  description?: string;
  guarantor?: IAccountGuarantor[];
  partOf?: IReference;

  _status?: IElement;
  _name?: IElement;
  _description?: IElement;
}
