import { IBackboneElement } from '../base';
import { ICodeableConcept, IPeriod, IReference } from '../datatypes';

export interface IEncounterParticipant extends IBackboneElement {
  /**
   * @description Role of participant in encounter.
   */
  type?: ICodeableConcept[];

  /**
   * @description The period of time that the specified participant participated in the encounter. These can overlap or be sub-sets of the overall encounter's period.
   */
  period?: IPeriod;

  /**
   * @description Persons involved in the encounter other than the patient.
   */
  individual?: IReference;
}
