import { IBackboneElement } from '../base';
import { ICodeableConcept, IDuration, IQuantity, IRange, IRatio } from '../datatypes';

/**
 * @name IGoalTarget
 * @description Indicates what should be done by when.
 * @see <a href="https://hl7.org/fhir/R4/goal-definitions.html#Goal.target">GoalTarget</a>
 * @version R4
 * @extends {IBackboneElement}
 * @author Claudia Alarcón Lazo
 */
export interface IGoalTarget extends IBackboneElement {
  /**
   * @description The parameter whose value is being tracked, e.g. body weight, blood pressure, or hemoglobin A1c level.
   */
  measure?: ICodeableConcept;

  /**
   * @description The target value of the focus to be achieved to signify the fulfillment of the goal, e.g. 150 pounds, 7.0%. Either the high or low or both values of the range can be specified. When a low value is missing, it indicates that the goal is achieved at any focus value at or below the high value. Similarly, if the high value is missing, it indicates that the goal is achieved at any focus value at or above the low value.
   */
  detailQuantity?: IQuantity;

  /**
   * @description The target value of the focus to be achieved to signify the fulfillment of the goal, e.g. 150 pounds, 7.0%. Either the high or low or both values of the range can be specified. When a low value is missing, it indicates that the goal is achieved at any focus value at or below the high value. Similarly, if the high value is missing, it indicates that the goal is achieved at any focus value at or above the low value.
   */
  detailRange?: IRange;

  /**
   * @description The target value of the focus to be achieved to signify the fulfillment of the goal, e.g. 150 pounds, 7.0%. Either the high or low or both values of the range can be specified. When a low value is missing, it indicates that the goal is achieved at any focus value at or below the high value. Similarly, if the high value is missing, it indicates that the goal is achieved at any focus value at or above the low value.
   */
  detailCodeableConcept?: ICodeableConcept;

  /**
   * @description The target value of the focus to be achieved to signify the fulfillment of the goal, e.g. 150 pounds, 7.0%. Either the high or low or both values of the range can be specified. When a low value is missing, it indicates that the goal is achieved at any focus value at or below the high value. Similarly, if the high value is missing, it indicates that the goal is achieved at any focus value at or above the low value.
   */
  detailString?: string;

  /**
   * @description The target value of the focus to be achieved to signify the fulfillment of the goal, e.g. 150 pounds, 7.0%. Either the high or low or both values of the range can be specified. When a low value is missing, it indicates that the goal is achieved at any focus value at or below the high value. Similarly, if the high value is missing, it indicates that the goal is achieved at any focus value at or above the low value.
   */
  detailBoolean?: boolean;

  /**
   * @description The target value of the focus to be achieved to signify the fulfillment of the goal, e.g. 150 pounds, 7.0%. Either the high or low or both values of the range can be specified. When a low value is missing, it indicates that the goal is achieved at any focus value at or below the high value. Similarly, if the high value is missing, it indicates that the goal is achieved at any focus value at or above the low value.
   */
  detailInteger?: number;

  /**
   * @description The target value of the focus to be achieved to signify the fulfillment of the goal, e.g. 150 pounds, 7.0%. Either the high or low or both values of the range can be specified. When a low value is missing, it indicates that the goal is achieved at any focus value at or below the high value. Similarly, if the high value is missing, it indicates that the goal is achieved at any focus value at or above the low value.
   */
  detailRatio?: IRatio;

  /**
   * @description Indicates either the date or the duration after start by which the goal should be met.
   */
  dueDate?: string;

  /**
   * @description Indicates either the date or the duration after start by which the goal should be met.
   */
  dueDuration?: IDuration;
}
