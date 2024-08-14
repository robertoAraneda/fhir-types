import { IDomainResource, IElement } from '../base';
import { ICodeableConcept, IIdentifier, IPeriod, IReference } from '../datatypes';

export interface ISchedule extends IDomainResource {
  /**
   * @desdcription External Ids for this item.
   */
  identifier?: IIdentifier[];

  /**
   * @description Whether this schedule record is in active use or should not be used (such as was entered in error).
   */
  active?: boolean;

  /**
   * @description A broad categorization of the service that is to be performed during this appointment.
   */
  serviceCategory?: ICodeableConcept[];

  /**
   * @description The specific service that is to be performed during this appointment.
   */
  serviceType?: ICodeableConcept[];

  /**
   * @description The specialty of a practitioner that would be required to perform the service requested in this appointment.
   */
  specialty?: ICodeableConcept[];

  /**
   * @description Slots that reference this schedule resource provide the availability details to these referenced resource(s).
   */
  actor: IReference[];

  /**
   * @description The period of time that the slots that reference this Schedule resource cover (even if none exist). These cover the amount of time that an organization's planning horizon; the interval for which they are currently accepting appointments. This does not define a "template" for planning outside these dates.
   */
  planningHorizon?: IPeriod;

  /**
   * @description Comments on the availability to describe any extended information. Such as custom constraints on the slots that may be associated.
   */
  comment?: string;

  // Extensions attributes
  /**
   * @description Extension for comment
   */
  _comment?: IElement;
}
