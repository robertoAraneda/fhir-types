import { IImagingStudySeries } from '../backbones';
import { IDomainResource, IElement } from '../base';
import { IAnnotation, ICodeableConcept, ICoding, IIdentifier, IReference } from '../datatypes';
import { ImagingStudyStatusType } from '../types';

/**
 * @name IImagingStudy
 * @description Representation of the content produced in a DICOM imaging study. A study comprises a set of series, each of which includes a set of Service-Object Pair Instances (SOP Instances - images or other data) acquired or produced in a common context.  A series is of only one modality (e.g. X-ray, CT, MR, ultrasound), but a study may have multiple series of different modalities.
 * @see <a href="https://hl7.org/fhir/R4/imagingstudy.html">ImagingStudy</a>
 * @version R4
 * @extends {IDomainResource}
 * @author Claudia Alarcón Lazo
 */
export interface IImagingStudy extends IDomainResource {
  /**
   * @description Identifiers for the ImagingStudy such as DICOM Study Instance UID, and Accession Number.
   */
  identifier?: IIdentifier[];

  /**
   * @description The current state of the ImagingStudy.
   * @description registered | available | cancelled | entered-in-error | unknown
   * @see <a href="https://hl7.org/fhir/R4/valueset-imagingstudy-status.html">ImagingStudyStatus</a>
   */
  status: ImagingStudyStatusType;

  /**
   * @description Extensions for status
   */
  _status?: IElement;

  /**
   * @description A list of all the series.modality values that are actual acquisition modalities, i.e. those in the DICOM Context Group 29 (value set OID 1.2.840.10008.6.1.19).
   */
  modality?: ICoding[];

  /**
   * @description The subject, typically a patient, of the imaging study.
   */
  subject: IReference;

  /**
   * @description The healthcare event (e.g. a patient and healthcare provider interaction) during which this ImagingStudy is made.
   */
  encounter?: IReference;

  /**
   * @description Date and time the study started.
   */
  started?: string;

  /**
   * @description Extensions for started
   */
  _started?: IElement;

  /**
   * @description A list of the diagnostic requests that resulted in this imaging study being performed.
   */
  basedOn?: IReference[];

  /**
   * @description The requesting/referring physician.
   */
  referrer?: IReference;

  /**
   * @description Who read the study and interpreted the images or other content.
   */
  interpreter?: IReference[];

  /**
   * @description The network service providing access (e.g., query, view, or retrieval) for the study. See implementation notes for information about using DICOM endpoints. A study-level endpoint applies to each series in the study, unless overridden by a series-level endpoint with the same Endpoint.connectionType.
   */
  endpoint?: IReference[];

  /**
   * @description Number of Series in the Study. This value given may be larger than the number of series elements this Resource contains due to resource availability, security, or other factors. This element should be present if any series elements are present.
   */
  numberOfSeries?: number;

  /**
   * @description Extensions for numberOfSeries
   */
  _numberOfSeries?: IElement;

  /**
   * @description Number of SOP Instances in Study. This value given may be larger than the number of instance elements this resource contains due to resource availability, security, or other factors. This element should be present if any instance elements are present.
   */
  numberOfInstances?: number;

  /**
   * @description Extensions for numberOfInstances
   */
  _numberOfInstances?: IElement;

  /**
   * @description The procedure which this ImagingStudy was part of.
   */
  procedureReference?: IReference;

  /**
   * @description The code for the performed procedure type.
   */
  procedureCode?: ICodeableConcept[];

  /**
   * @description The principal physical location where the ImagingStudy was performed.
   */
  location?: IReference;

  /**
   * @description Description of clinical condition indicating why the ImagingStudy was requested.
   */
  reasonCode?: ICodeableConcept[];

  /**
   * @description Indicates another resource whose existence justifies this Study.
   */
  reasonReference?: IReference[];

  /**
   * @description Per the recommended DICOM mapping, this element is derived from the Study Description attribute (0008,1030). Observations or findings about the imaging study should be recorded in another resource, e.g. Observation, and not in this element.
   */
  note?: IAnnotation[];

  /**
   * @description The Imaging Manager description of the study. Institution-generated description or classification of the Study (component) performed.
   */
  description?: string;

  /**
   * @description Extensions for description
   */
  _description?: IElement;

  /**
   * @description Each study has one or more series of images or other content.
   */
  series?: IImagingStudySeries[];
}
