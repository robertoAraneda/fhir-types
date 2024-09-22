import { IBackboneElement, IElement } from '../base';
import { ICoding } from '../datatypes';

/**
 * @name IImagingStudyInstance
 * @description Representation of the content produced in a DICOM imaging study. A study comprises a set of series, each of which includes a set of Service-Object Pair Instances (SOP Instances - images or other data) acquired or produced in a common context.  A series is of only one modality (e.g. X-ray, CT, MR, ultrasound), but a study may have multiple series of different modalities.
 * @see <a href="https://hl7.org/fhir/R4/imagingstudy-definitions.html#ImagingStudy.series.instance">ImagingStudyInstance</a>
 * @version R4
 * @extends {IBackboneElement}
 * @author Claudia Alarcón Lazo
 */
export interface IImagingStudyInstance extends IBackboneElement {
  /**
   * @description The DICOM SOP Instance UID for this image or other DICOM content.
   */
  uid: string;

  /**
   * @description Extensions for uid
   */
  _uid?: IElement;

  /**
   * @description DICOM instance  type.
   */
  sopClass: ICoding;

  /**
   * @description The number of instance in the series.
   */
  number?: number;

  /**
   * @description Extensions for number
   */
  _number?: IElement;

  /**
   * @description The description of the instance.
   */
  title?: string;

  /**
   * @description Extensions for title
   */
  _title?: IElement;
}
