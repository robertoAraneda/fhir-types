import { IDomainResource, IElement } from '../base';
import { IIdentifier, IHumanName, IContactPoint, IAddress, IAttachment, IReference } from '../datatypes';
import { IPersonLink } from '../backbones';
import { AdministrativeGenderEnum } from '../enums';
import { AdministrativeGenderType } from '../types';
export interface IPerson extends IDomainResource {
    resourceType: 'Person';
    identifier?: IIdentifier[];
    name?: IHumanName[];
    telecom?: IContactPoint[];
    gender?: AdministrativeGenderEnum | AdministrativeGenderType;
    birthDate?: string;
    address?: IAddress[];
    photo?: IAttachment;
    managingOrganization?: IReference;
    active?: boolean;
    link?: IPersonLink[];
    _active?: IElement;
    _gender?: IElement;
    _birthDate?: IElement;
}
