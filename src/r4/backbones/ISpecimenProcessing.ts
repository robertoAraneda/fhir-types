import { IBackboneElement, IElement } from '../base';
import { ICodeableConcept, IPeriod, IReference } from '../datatypes';

/**
 * @name ISpecimenProcessing
 * @description A sample to be used for analysis.
 * @see <a href="https://hl7.org/fhir/R4/specimen-definitions.html#Specimen.processing">SpecimenProcessing</a>
 * @version R4
 * @extends {IBackboneElement}
 * @author Claudia Alarcón Lazo
 */
export interface ISpecimenProcessing extends IBackboneElement {
  /**
   * @description Textual description of procedure.
   */
  description?: string;

  /**
   * @description Extensions for description
   */
  _description?: IElement;

  /**
   * @description A coded value specifying the procedure used to process the specimen.
   */
  procedure?: ICodeableConcept;

  /**
   * @description Material used in the processing step.
   */
  additive?: IReference[];

  /**
   * @description A record of the time or period when the specimen processing occurred.  For example the time of sample fixation or the period of time the sample was in formalin.
   */
  timeDateTime?: string;

  /**
   * @description Extensions for timeDateTime
   */
  _timeDateTime?: IElement;

  /**
   * @description A record of the time or period when the specimen processing occurred.  For example the time of sample fixation or the period of time the sample was in formalin.
   */
  timePeriod?: IPeriod;
}
