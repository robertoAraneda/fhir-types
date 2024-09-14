import { IBackboneElement } from '../base';
import { ICoding, IPeriod } from '../datatypes';

export interface IEncounterClassHistory extends IBackboneElement {
  /**
   * @description inpatient | outpatient | ambulatory | emergency +.
   */
  class: ICoding;

  /**
   * @description The time that the episode was in the specified class.
   */
  period: IPeriod;
}
