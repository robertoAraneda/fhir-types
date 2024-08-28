import { ICareTeamParticipant } from '../backbones';
import { IDomainResource, IElement } from '../base';
import { IAnnotation, ICodeableConcept, IContactPoint, IIdentifier, IPeriod, IReference } from '../datatypes';
import { CareTeamStatusType } from '../types';

/**
 * @name ICareTeam
 * @description The Care Team includes all the people and organizations who plan to participate in the coordination and delivery of care for a patient.
 * @see <a href="https://hl7.org/fhir/R4/careteam.html">CareTeam</a>
 * @version R4
 * @extends {IDomainResource}
 * @author Claudia Alarcón Lazo
 */
export interface ICareTeam extends IDomainResource {
  /**
   * @description The type of resource
   */
  resourceType?: string;

  /**
   * @description Business identifiers assigned to this care team by the performer or other systems which remain constant as the resource is updated and propagates from server to server.
   */
  identifier?: IIdentifier[];

  /**
   * @description Indicates the current state of the care team.
   */
  status?: CareTeamStatusType;

  /**
   * @description Identifies what kind of team. This is to support differentiation between multiple co-existing teams, such as care plan team, episode of care team, longitudinal care team.
   */
  category?: ICodeableConcept[];

  /**
   * @description A label for human use intended to distinguish like teams. E.g. the "red" vs. "green" trauma teams.
   */
  name?: string;

  /**
   * @description Identifies the patient or group whose intended care is handled by the team.
   */
  subject?: IReference;

  /**
   * @description The Encounter during which this CareTeam was created or to which the creation of this record is tightly associated.
   */
  encounter?: IReference;

  /**
   * @description Indicates when the team did (or is intended to) come into effect and end.
   */
  period?: IPeriod;

  /**
   * @description Identifies all people and organizations who are expected to be involved in the care team.
   */
  participant?: ICareTeamParticipant[];

  /**
   * @description Describes why the care team exists.
   */
  reasonCode?: ICodeableConcept[];

  /**
   * @description Condition(s) that this care team addresses.
   */
  reasonReference?: IReference[];

  /**
   * @description The organization responsible for the care team.
   */
  managingOrganization?: IReference[];

  /**
   * @description A central contact detail for the care team (that applies to all members).
   */
  telecom?: IContactPoint[];

  /**
   * @description Comments made about the CareTeam.
   */
  note?: IAnnotation[];

  // Extensions attributes
  /**
   * @description Extension for status
   */
  _status?: IElement;

  /**
   * @description Extension for name
   */
  _name?: IElement;
}
