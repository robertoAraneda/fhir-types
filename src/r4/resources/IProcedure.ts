import { IProcedureFocalDevice, IProcedurePerformer } from '../backbones';
import { IDomainResource, IElement } from '../base';
import { IAge, IAnnotation, ICodeableConcept, IIdentifier, IPeriod, IRange, IReference } from '../datatypes';
import { EventStatusType } from '../types';

export interface IProcedure extends IDomainResource {
  /**
   * @description Business identifiers assigned to this procedure by the performer or other systems which remain constant as the resource is updated and is propagated from server to server.
   */
  identifier?: IIdentifier[];

  /**
   * @description The URL pointing to a FHIR-defined protocol, guideline, order set or other definition that is adhered to in whole or in part by this Procedure.
   */
  instantiatesCanonical?: string[];

  /**
   * @description The URL pointing to an externally maintained protocol, guideline, order set or other definition that is adhered to in whole or in part by this Procedure.
   */
  instantiatesUri?: string[];

  /**
   * @description A reference to a resource that contains details of the request for this procedure.
   */
  basedOn?: IReference[];

  /**
   * @description A larger event of which this particular procedure is a component or step.
   */
  partOf?: IReference[];

  /**
   * @description A code specifying the state of the procedure. Generally, this will be the in-progress or completed state.
   * @description preparation | in-progress | not-done | on-hold | stopped | completed | entered-in-error | unknown
   * @see <a href="https://hl7.org/fhir/R4/valueset-event-status.html">EventStatus</a>
   */
  status: EventStatusType;

  /**
   * @description Captures the reason for the current state of the procedure.
   */
  statusReason?: ICodeableConcept;

  /**
   * @description A code that classifies the procedure for searching, sorting and display purposes (e.g. "Surgical Procedure").
   */
  category?: ICodeableConcept;

  /**
   * @description The specific procedure that is performed. Use text if the exact nature of the procedure cannot be coded (e.g. "Laparoscopic Appendectomy").
   */
  code?: ICodeableConcept;

  /**
   * @description The person, animal or group on which the procedure was performed.
   */
  subject: IReference;

  /**
   * @description The Encounter during which this Procedure was created or performed or to which the creation of this record is tightly associated.
   */
  encounter?: IReference;

  /**
   * @description Estimated or actual date, date-time, period, or age when the procedure was performed. Allows a period to support complex procedures that span more than one date, and also allows for the length of the procedure to be captured.
   */
  performedDateTime?: string;

  /**
   * @description Estimated or actual date, date-time, period, or age when the procedure was performed. Allows a period to support complex procedures that span more than one date, and also allows for the length of the procedure to be captured.
   */
  performedPeriod?: IPeriod;

  /**
   * @description Estimated or actual date, date-time, period, or age when the procedure was performed. Allows a period to support complex procedures that span more than one date, and also allows for the length of the procedure to be captured.
   */
  performedString?: string;

  /**
   * @description Estimated or actual date, date-time, period, or age when the procedure was performed. Allows a period to support complex procedures that span more than one date, and also allows for the length of the procedure to be captured.
   */
  performedAge?: IAge;

  /**
   * @description Estimated or actual date, date-time, period, or age when the procedure was performed. Allows a period to support complex procedures that span more than one date, and also allows for the length of the procedure to be captured.
   */
  performedRange?: IRange;

  /**
   * @description Individual who recorded the record and takes responsibility for its content.
   */
  recorder?: IReference;

  /**
   * @description Individual who is making the procedure statement.
   */
  asserter?: IReference;

  /**
   * @description Limited to "real" people rather than equipment.
   */
  performer?: IProcedurePerformer[];

  /**
   * @description The location where the procedure actually happened. E.g. a newborn at home, a tracheostomy at a restaurant.
   */
  location?: IReference;

  /**
   * @description The coded reason why the procedure was performed. This may be a coded entity of some type, or may simply be present as text.
   */
  reasonCode?: ICodeableConcept[];

  /**
   * @description The justification of why the procedure was performed.
   */
  reasonReference?: IReference[];

  /**
   * @description Detailed and structured anatomical location information. Multiple locations are allowed - e.g. multiple punch biopsies of a lesion.
   */
  bodySite?: ICodeableConcept[];

  /**
   * @description The outcome of the procedure - did it resolve the reasons for the procedure being performed?
   */
  outcome?: ICodeableConcept;

  /**
   * @description This could be a histology result, pathology report, surgical report, etc.
   */
  report?: IReference[];

  /**
   * @description Any complications that occurred during the procedure, or in the immediate post-performance period. These are generally tracked separately from the notes, which will typically describe the procedure itself rather than any 'post procedure' issues.
   */
  complication?: ICodeableConcept[];

  /**
   * @description Any complications that occurred during the procedure, or in the immediate post-performance period.
   */
  complicationDetail?: IReference[];

  /**
   * @description If the procedure required specific follow up - e.g. removal of sutures. The follow up may be represented as a simple note or could potentially be more complex, in which case the CarePlan resource can be used.
   */
  followUp?: ICodeableConcept[];

  /**
   * @description Any other notes and comments made about the procedure.
   */
  note?: IAnnotation[];

  /**
   * @description A device that is implanted, removed or otherwise manipulated (calibration, battery replacement, fitting a prosthesis, attaching a wound-vac, etc.) as a focal portion of the Procedure.
   */
  focalDevice?: IProcedureFocalDevice[];

  /**
   * @description Identifies medications, devices and any other substance used as part of the procedure.
   */
  usedReference?: IReference[];

  /**
   * @description Identifies coded items that were used as part of the procedure.
   */
  usedCode?: ICodeableConcept[];

  // Extensions attributes
  /**
   * @description Extension for instantiatesCanonical
   */
  _instantiatesCanonical?: IElement;

  /**
   * @description Extension for instantiatesUri
   */
  _instantiatesUri?: IElement;

  /**
   * @description Extension for status
   */
  _status?: IElement;
}
