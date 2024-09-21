import { IDomainResource, IElement } from '../base';
import { IAnnotation, IAttachment, ICodeableConcept, IIdentifier, IPeriod, IReference } from '../datatypes';
import { EventStatusType } from '../types';

/**
 * @name IMedia
 * @description A photo, video, or audio recording acquired or used in healthcare. The actual content may be inline or provided by direct reference.
 * @see <a href="https://hl7.org/fhir/R4/media.html">Media</a>
 * @version R4
 * @extends {IDomainResource}
 * @author Claudia Alarcón Lazo
 */
export interface IMedia extends IDomainResource {
  /**
   * @description Identifiers associated with the image - these may include identifiers for the image itself, identifiers for the context of its collection (e.g. series ids) and context ids such as accession numbers or other workflow identifiers.
   */
  identifier?: IIdentifier[];

  /**
   * @description A procedure that is fulfilled in whole or in part by the creation of this media.
   */
  basedOn?: IReference[];

  /**
   * @description A larger event of which this particular event is a component or step.
   */
  partOf?: IReference[];

  /**
   * @description The current state of the Media resource.
   */
  status: EventStatusType;

  /**
   * @description Extensions for status
   */
  _status?: IElement;

  /**
   * @description A code that classifies whether the media is an image, video or audio recording or some other media category.
   */
  type?: ICodeableConcept;

  /**
   * @description Details of the type of the media - usually, how it was acquired (what type of device). If images sourced from a DICOM system, are wrapped in a Media resource, then this is the modality.
   */
  modality?: ICodeableConcept;

  /**
   * @description The name of the imaging view e.g. Lateral or Antero-posterior (AP).
   */
  view?: ICodeableConcept;

  /**
   * @description Who/What this Media is a record of.
   */
  subject?: IReference;

  /**
   * @description The encounter that establishes the context for this media.
   */
  encounter?: IReference;

  /**
   * @description The date and time(s) at which the media was collected.
   */
  createdDateTime?: string;

  /**
   * @description Extensions for createdDateTime
   */
  _createdDateTime?: IElement;

  /**
   * @description The date and time(s) at which the media was collected.
   */
  createdPeriod?: IPeriod;

  /**
   * @description The date and time this version of the media was made available to providers, typically after having been reviewed.
   */
  issued?: string;

  /**
   * @description Extensions for issued
   */
  _issued?: IElement;

  /**
   * @description The person who administered the collection of the image.
   */
  operator?: IReference;

  /**
   * @description Describes why the event occurred in coded or textual form.
   */
  reasonCode?: ICodeableConcept[];

  /**
   * @description Indicates the site on the subject\u0027s body where the observation was made (i.e. the target site).
   */
  bodySite?: ICodeableConcept;

  /**
   * @description The name of the device / manufacturer of the device  that was used to make the recording.
   */
  deviceName?: string;

  /**
   * @description Extensions for deviceName
   */
  _deviceName?: IElement;

  /**
   * @description The device used to collect the media.
   */
  device?: IReference;

  /**
   * @description Height of the image in pixels (photo/video).
   */
  height?: number;

  /**
   * @description Extensions for height
   */
  _height?: IElement;

  /**
   * @description Width of the image in pixels (photo/video).
   */
  width?: number;

  /**
   * @description Extensions for width
   */
  _width?: IElement;

  /**
   * @description The number of frames in a photo. This is used with a multi-page fax, or an imaging acquisition context that takes multiple slices in a single image, or an animated gif. If there is more than one frame, this SHALL have a value in order to alert interface software that a multi-frame capable rendering widget is required.
   */
  frames?: number;

  /**
   * @description Extensions for frames
   */
  _frames?: IElement;

  /**
   * @description The duration of the recording in seconds - for audio and video.
   */
  duration?: number;

  /**
   * @description Extensions for duration
   */
  _duration?: IElement;

  /**
   * @description The actual content of the media - inline or by direct reference to the media source file.
   */
  content: IAttachment;

  /**
   * @description Comments made about the media by the performer, subject or other participants.
   */
  note?: IAnnotation[];
}
