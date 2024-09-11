import { IBackboneElement, IElement } from '../base';
import { ICodeableConcept, IPeriod, IReference } from '../datatypes';
import { EncounterLocationStatusType } from '../types';

export interface IEncounterLocation extends IBackboneElement {
  /**
   * @description The location where the encounter takes place.
   */
  location: IReference;

  /**
   * @description The status of the participants' presence at the specified location during the period specified.
   */
  status?: EncounterLocationStatusType;

  /**
   * @description This will be used to specify the required levels (bed/ward/room/etc.) desired to be recorded to simplify either messaging or query.
   */
  physicalType?: ICodeableConcept;

  /**
   * @description Time period during which the patient was present at the location.
   */
  period?: IPeriod;

  // Extensions attributes
  /**
   * @description Extensions for status
   */
  _status?: IElement;
}
