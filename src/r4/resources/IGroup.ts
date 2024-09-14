import { IDomainResource, IElement } from '../base';
import { ICodeableConcept, IIdentifier, IReference } from '../datatypes';
import { IGroupCharacteristic, IGroupMember } from '../backbones';
import { GroupTypeType } from '../types';

/**
 * @name IGroup
 * @description Represents a defined collection of entities that may be discussed or acted upon collectively but which are not expected to act collectively, and are not formally or legally recognized; i.e. a collection of entities that isn\u0027t an Organization.
 * @see <a href="https://hl7.org/fhir/R4/group.html">Group</a>
 * @version R4
 * @extends {IDomainResource}
 * @author Roberto Araneda Espinoza
 */
export interface IGroup extends IDomainResource {
  /**
   * @description A unique business identifier for this group.
   */
  identifier?: IIdentifier[];

  /**
   * @description Indicates whether the record for the group is available for use or is merely being retained for historical purposes.
   */
  active?: boolean;

  /**
   * @description Extensions for active
   */
  _active?: IElement;

  /**
   * @description Identifies the broad classification of the kind of resources the group includes.
   * @description person | animal | practitioner | device | medication | substance
   * @see <a href="https://hl7.org/fhir/R4/valueset-group-type.html">GroupType</a>
   */
  type: GroupTypeType;

  /**
   * @description Extensions for type
   */
  _type?: IElement;

  /**
   * @description If true, indicates that the resource refers to a specific group of real individuals.  If false, the group defines a set of intended individuals.
   */
  actual: boolean;

  /**
   * @description Extensions for actual
   */
  _actual?: IElement;

  /**
   * @description Provides a specific type of resource the group includes; e.g. \u0027cow\u0027, \u0027syringe\u0027, etc.
   */
  code?: ICodeableConcept;

  /**
   * @description A label assigned to the group for human identification and communication.
   */
  name?: string;

  /**
   * @description Extensions for name
   */
  _name?: IElement;

  /**
   * @description A count of the number of resource instances that are part of the group.
   */
  quantity?: number;

  /**
   * @description Extensions for quantity
   */
  _quantity?: IElement;

  /**
   * @description Entity responsible for defining and maintaining Group characteristics and/or registered members.
   */
  managingEntity?: IReference;

  /**
   * @description Identifies traits whose presence r absence is shared by members of the group.
   */
  characteristic?: IGroupCharacteristic[];

  /**
   * @description Identifies the resource instances that are members of the group.
   */
  member?: IGroupMember[];
}
