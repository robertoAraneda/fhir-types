import { IBackboneElement, IElement } from '../base';
import { ICoding, IReference } from '../datatypes';
import { IImagingStudyInstance } from './IImagingStudyInstance';
import { IImagingStudyPerformer } from './IImagingStudyPerformer';

/**
 * @name IImagingStudySeries
 * @description Representation of the content produced in a DICOM imaging study. A study comprises a set of series, each of which includes a set of Service-Object Pair Instances (SOP Instances - images or other data) acquired or produced in a common context.  A series is of only one modality (e.g. X-ray, CT, MR, ultrasound), but a study may have multiple series of different modalities.
 * @see <a href="https://hl7.org/fhir/R4/imagingstudy.html">ImagingStudySeries</a>
 * @version R4
 * @extends {IBackboneElement}
 * @author Claudia Alarcón Lazo
 */
export interface IImagingStudySeries extends IBackboneElement {
  /**
   * @description The DICOM Series Instance UID for the series.
   */
  uid: string;

  /**
   * @description Extensions for uid
   */
  _uid?: IElement;

  /**
   * @description The numeric identifier of this series in the study.
   */
  number?: number;

  /**
   * @description Extensions for number
   */
  _number?: IElement;

  /**
   * @description The modality of this series sequence.
   */
  modality: ICoding;

  /**
   * @description A description of the series.
   */
  description?: string;

  /**
   * @description Extensions for description
   */
  _description?: IElement;

  /**
   * @description Number of SOP Instances in the Study. The value given may be larger than the number of instance elements this resource contains due to resource availability, security, or other factors. This element should be present if any instance elements are present.
   */
  numberOfInstances?: number;

  /**
   * @description Extensions for numberOfInstances
   */
  _numberOfInstances?: IElement;

  /**
   * @description The network service providing access (e.g., query, view, or retrieval) for this series. See implementation notes for information about using DICOM endpoints. A series-level endpoint, if present, has precedence over a study-level endpoint with the same Endpoint.connectionType.
   */
  endpoint?: IReference[];

  /**
   * @description The anatomic structures examined. See DICOM Part 16 Annex L (http://dicom.nema.org/medical/dicom/current/output/chtml/part16/chapter_L.html) for DICOM to SNOMED-CT mappings. The bodySite may indicate the laterality of body part imaged; if so, it shall be consistent with any content of ImagingStudy.series.laterality.
   */
  bodySite?: ICoding;

  /**
   * @description The laterality of the (possibly paired) anatomic structures examined. E.g., the left knee, both lungs, or unpaired abdomen. If present, shall be consistent with any laterality information indicated in ImagingStudy.series.bodySite.
   */
  laterality?: ICoding;

  /**
   * @description The specimen imaged, e.g., for whole slide imaging of a biopsy.
   */
  specimen?: IReference[];

  /**
   * @description The date and time the series was started.
   */
  started?: string;

  /**
   * @description Extensions for started
   */
  _started?: IElement;

  /**
   * @description Indicates who or what performed the series and how they were involved.
   */
  performer?: IImagingStudyPerformer[];

  /**
   * @description A single SOP instance within the series, e.g. an image, or presentation state.
   */
  instance?: IImagingStudyInstance[];
}
