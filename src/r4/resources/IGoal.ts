import { IGoalTarget } from '../backbones';
import { IDomainResource, IElement } from '../base';
import { IAnnotation, ICodeableConcept, IIdentifier, IReference } from '../datatypes';
import { GoalLifecycleStatusType } from '../types';

/**
 * @name IGoal
 * @description Describes the intended objective(s) for a patient, group or organization care, for example, weight loss, restoring an activity of daily living, obtaining herd immunity via immunization, meeting a process improvement objective, etc.
 * @see <a href="https://hl7.org/fhir/R4/goal.html">Goal</a>
 * @version R4
 * @extends {IDomainResource}
 * @author Claudia Alarcón Lazo
 */
export interface IGoal extends IDomainResource {
  resourceType?: 'Goal';
  /**
   * @description Business identifiers assigned to this goal by the performer or other systems which remain constant as the resource is updated and propagates from server to server.
   */
  identifier?: IIdentifier[];

  /**
   * @description The state of the goal throughout its lifecycle.
   * @description proposed | planned | accepted | active | on-hold | completed | cancelled | entered-in-error | rejected
   * @see <a href="https://hl7.org/fhir/R4/valueset-goal-status.html">GoalLifecycleStatus</a>
   */
  lifecycleStatus: GoalLifecycleStatusType;

  /**
   * @description Describes the progression, or lack thereof, towards the goal against the target.
   */
  achievementStatus?: ICodeableConcept;

  /**
   * @description Indicates a category the goal falls within.
   */
  category?: ICodeableConcept[];

  /**
   * @description Identifies the mutually agreed level of importance associated with reaching/sustaining the goal.
   */
  priority?: ICodeableConcept;

  /**
   * @description Human-readable and/or coded description of a specific desired objective of care, such as "control blood pressure" or "negotiate an obstacle course" or "dance with child at wedding".
   */
  description: ICodeableConcept;

  /**
   * @description Identifies the patient, group or organization for whom the goal is being established.
   */
  subject: IReference;

  /**
   * @description The date or event after which the goal should begin being pursued.
   */
  startDate?: string;

  /**
   * @description The date or event after which the goal should begin being pursued.
   */
  startCodeableConcept?: ICodeableConcept;

  /**
   * @description Indicates what should be done by when.
   */
  target?: IGoalTarget[];

  /**
   * @description Identifies when the current status. I.e. When initially created, when achieved, when cancelled, etc.
   */
  statusDate?: string;

  /**
   * @description Captures the reason for the current status.
   */
  statusReason?: string;

  /**
   * @description Indicates whose goal this is - patient goal, practitioner goal, etc.
   */
  expressedBy?: IReference;

  /**
   * @description The identified conditions and other health record elements that are intended to be addressed by the goal.
   */
  addresses?: IReference[];

  /**
   * @description Any comments related to the goal.
   */
  note?: IAnnotation[];

  /**
   * @description Identifies the change (or lack of change) at the point when the status of the goal is assessed.
   */
  outcomeCode?: ICodeableConcept[];

  /**
   * @description Details of what's changed (or not changed).
   */
  outcomeReference?: IReference[];

  // Extensions attributes
  /**
   * @description Extension for lifecycleStatus
   */
  _lifecycleStatus?: IElement;

  /**
   * @description Extension for statusDate
   */
  _statusDate?: IElement;

  /**
   * @description Extension for statusReason
   */
  _statusReason?: IElement;
}
