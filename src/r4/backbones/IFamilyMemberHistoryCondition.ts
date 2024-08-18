import { IBackboneElement, IElement } from '../base';
import { IAge, IAnnotation, ICodeableConcept, IPeriod, IRange } from '../datatypes';

export interface IFamilyMemberHistoryCondition extends IBackboneElement {
  /**
   * @description The actual condition specified. Could be a coded condition (like MI or Diabetes) or a less specific string like 'cancer' depending on how much is known about the condition and the capabilities of the creating system.
   */
  code: ICodeableConcept;

  /**
   * @description Indicates what happened following the condition. If the condition resulted in death, deceased date is captured on the relation.
   */
  outcome?: ICodeableConcept;

  /**
   * @description This condition contributed to the cause of death of the related person. If contributedToDeath is not populated, then it is unknown.
   */
  contributedToDeath?: boolean;

  /**
   * @description Either the age of onset, range of approximate age or descriptive string can be recorded. For conditions with multiple occurrences, this describes the first known occurrence.
   */
  onsetAge?: IAge;

  /**
   * @description Either the age of onset, range of approximate age or descriptive string can be recorded. For conditions with multiple occurrences, this describes the first known occurrence.
   */
  onsetRange?: IRange;

  /**
   * @description Either the age of onset, range of approximate age or descriptive string can be recorded. For conditions with multiple occurrences, this describes the first known occurrence.
   */
  onsetPeriod?: IPeriod;

  /**
   * @description Either the age of onset, range of approximate age or descriptive string can be recorded. For conditions with multiple occurrences, this describes the first known occurrence.
   */
  onsetString?: string;

  /**
   * @description An area where general notes can be placed about this specific condition.
   */
  note?: IAnnotation[];

  // Extensions attributes
  /**
   * @description Extension for contributedToDeath
   */
  _contributedToDeath?: IElement;
}
