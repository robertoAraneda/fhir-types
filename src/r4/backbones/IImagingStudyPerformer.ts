import { IBackboneElement } from '../base';
import { ICodeableConcept, IReference } from '../datatypes';

/**
 * @name IImagingStudyPerformer
 * @description Representation of the content produced in a DICOM imaging study. A study comprises a set of series, each of which includes a set of Service-Object Pair Instances (SOP Instances - images or other data) acquired or produced in a common context.  A series is of only one modality (e.g. X-ray, CT, MR, ultrasound), but a study may have multiple series of different modalities.
 * @see <a href="https://hl7.org/fhir/R4/imagingstudy-definitions.html#ImagingStudy.series.performer">ImagingStudyPerformer</a>
 * @version R4
 * @extends {IBackboneElement}
 * @author Claudia Alarcón Lazo
 */
export interface IImagingStudyPerformer extends IBackboneElement {
  /**
   * @description Distinguishes the type of involvement of the performer in the series.
   */
  function?: ICodeableConcept;

  /**
   * @description Indicates who or what performed the series.
   */
  actor: IReference;
}
