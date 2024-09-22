import { IBackboneElement, IElement } from '../base';
import { ICodeableConcept, IDuration, IPeriod, IReference, ISimpleQuantity } from '../datatypes';

/**
 * @name ISpecimenCollection
 * @description A sample to be used for analysis.
 * @see <a href="https://hl7.org/fhir/R4/specimen-definitions.html#Specimen.collection">SpecimenCollection</a>
 * @version R4
 * @extends {IBackboneElement}
 * @author Claudia Alarcón Lazo
 */
export interface ISpecimenCollection extends IBackboneElement {
  /**
   * @description Person who collected the specimen.
   */
  collector?: IReference;

  /**
   * @description Time when specimen was collected from subject - the physiologically relevant time.
   */
  collectedDateTime?: string;

  /**
   * @description Extensions for collectedDateTime
   */
  _collectedDateTime?: IElement;

  /**
   * @description Time when specimen was collected from subject - the physiologically relevant time.
   */
  collectedPeriod?: IPeriod;

  /**
   * @description The span of time over which the collection of a specimen occurred.
   */
  duration?: IDuration;

  /**
   * @description The quantity of specimen collected; for instance the volume of a blood sample, or the physical measurement of an anatomic pathology sample.
   */
  quantity?: ISimpleQuantity;

  /**
   * @description A coded value specifying the technique that is used to perform the procedure.
   */
  method?: ICodeableConcept;

  /**
   * @description Anatomical location from which the specimen was collected (if subject is a patient). This is the target site.  This element is not used for environmental specimens.
   */
  bodySite?: ICodeableConcept;

  /**
   * @description Abstinence or reduction from some or all food, drink, or both, for a period of time prior to sample collection.
   */
  fastingStatusCodeableConcept?: ICodeableConcept;

  /**
   * @description Abstinence or reduction from some or all food, drink, or both, for a period of time prior to sample collection.
   */
  fastingStatusDuration?: IDuration;
}
