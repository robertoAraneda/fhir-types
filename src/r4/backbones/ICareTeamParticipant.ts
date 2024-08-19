import { IBackboneElement } from '../base';
import { ICodeableConcept, IPeriod, IReference } from '../datatypes';

/**
 * @name ICareTeamParticipant
 * @description Identifies all people and organizations who are expected to be involved in the care team.
 * @see <a href="https://hl7.org/fhir/R4/careteam-definitions.html#CareTeam.participant">CareTeamParticipant</a>
 * @version R4
 * @extends {IBackboneElement}
 * @author Claudia Alarcón Lazo
 */
export interface ICareTeamParticipant extends IBackboneElement {
  /**
   * @description Indicates specific responsibility of an individual within the care team, such as "Primary care physician", "Trained social worker counselor", "Caregiver", etc.
   */
  role?: ICodeableConcept[];

  /**
   * @description The specific person or organization who is participating/expected to participate in the care team.
   */
  member: IReference;

  /**
   * @description The organization of the practitioner.
   */
  onBehalfOf?: IReference;

  /**
   * @description Indicates when the specific member or organization did (or is intended to) come into effect and end.
   */
  period?: IPeriod;
}
