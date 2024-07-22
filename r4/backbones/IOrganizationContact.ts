import { IAddress, ICodeableConcept, IContactPoint, IHumanName } from '../datatypes';
import { IBackboneElement } from '../base';

/**
 * @description FHIR R4
 * @summary BackboneElement
 */
export interface IOrganizationContact extends IBackboneElement {
  purpose?: ICodeableConcept;
  name?: IHumanName;
  telecom?: IContactPoint[];
  address?: IAddress;
}
