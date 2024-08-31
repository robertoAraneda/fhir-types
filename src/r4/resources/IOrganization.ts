import { IDomainResource, IElement } from '../base';
import { IIdentifier, ICodeableConcept, IContactPoint, IAddress, IReference } from '../datatypes';
import { IOrganizationContact } from '../backbones';

/**
 * @description A grouping of people or organizations with a common purpose
 * @property {IIdentifier[]} identifier - Identifies this organization  across multiple systems
 * @see http://hl7.org/fhir/R4/organization.html http://hl7.org/fhir/R4/organization.html
 */
export interface IOrganization extends IDomainResource {
  /**
   * @description Identifies this organization  across multiple systems
   */
  identifier?: IIdentifier[];

  /**
   * @description Whether the organization's record is still in active use
   */
  active?: boolean;

  /**
   * @description Kind of organization
   */
  type?: ICodeableConcept[];

  /**
   * @description Name used for the organization
   */
  name?: string;

  /**
   * @description A list of alternate names that the organization is known as, or was known as in the past
   */
  alias?: string[];

  telecom?: IContactPoint[];
  address?: IAddress[];

  /**
   * @description The organization of which this organization forms a part.
   */
  partOf?: IReference;

  contact?: IOrganizationContact[];

  /**
   * @description Technical endpoints providing access to services operated for the organization.
   */
  endpoint?: IReference[];

  _active?: IElement;
  _name?: IElement;
  _alias?: IElement[];
}
