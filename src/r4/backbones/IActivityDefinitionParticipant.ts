import { IBackboneElement, IElement } from '../base';
import { ICodeableConcept } from '../datatypes';
import { ActionParticipantTypeType } from '../types';

/**
 * @name IActivityDefinitionParticipant
 * @description This resource allows for the definition of some activity to be performed, independent of a particular patient, practitioner, or other performance context.
 * @see <a href="https://hl7.org/fhir/R4/activitydefinition-definitions.html#ActivityDefinition.participant">ActivityDefinition.participant</a>
 * @version R4
 * @extends {IBackboneElement}
 * @author Claudia Alarcón Lazo
 */
export interface IActivityDefinitionParticipant extends IBackboneElement {
  /**
   * @description The type of participant in the action.
   */
  type: ActionParticipantTypeType;

  /**
   * @description Extensions for type
   */
  _type?: IElement;

  /**
   * @description The role the participant should play in performing the described action.
   */
  role?: ICodeableConcept;
}
