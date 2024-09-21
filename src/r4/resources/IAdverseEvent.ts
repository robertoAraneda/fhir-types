import { IAdverseEventSuspectEntity } from '../backbones';
import { IDomainResource, IElement } from '../base';
import { ICodeableConcept, IIdentifier, IReference } from '../datatypes';
import { AdverseEventActualityType } from '../types';

/**
 * @name IAdverseEvent
 * @description Actual or potential/avoided event causing unintended physical injury resulting from or contributed to by medical care, a research study or other healthcare setting factors that requires additional monitoring, treatment, or hospitalization, or that results in death.
 * @see <a href="https://hl7.org/fhir/R4/adverseevent.html">AdverseEvent</a>
 * @version R4
 * @extends {IDomainResource}
 * @author Claudia Alarcón Lazo
 */
export interface IAdverseEvent extends IDomainResource {
  /**
   * @description Business identifiers assigned to this adverse event by the performer or other systems which remain constant as the resource is updated and propagates from server to server.
   */
  identifier?: IIdentifier;

  /**
   * @description Whether the event actually happened, or just had the potential to. Note that this is independent of whether anyone was affected or harmed or how severely.
   * @description actual | potential
   * @see <a href="https://hl7.org/fhir/R4/valueset-adverse-event-actuality.html">AdverseEventActuality</a>
   */
  actuality: AdverseEventActualityType;

  /**
   * @description Extensions for actuality
   */
  _actuality?: IElement;

  /**
   * @description The overall type of event, intended for search and filtering purposes.
   */
  category?: ICodeableConcept[];

  /**
   * @description This element defines the specific type of event that occurred or that was prevented from occurring.
   */
  event?: ICodeableConcept;

  /**
   * @description This subject or group impacted by the event.
   */
  subject: IReference;

  /**
   * @description The Encounter during which AdverseEvent was created or to which the creation of this record is tightly associated.
   */
  encounter?: IReference;

  /**
   * @description The date (and perhaps time) when the adverse event occurred.
   */
  date?: string;

  /**
   * @description Extensions for date
   */
  _date?: IElement;

  /**
   * @description Estimated or actual date the AdverseEvent began, in the opinion of the reporter.
   */
  detected?: string;

  /**
   * @description Extensions for detected
   */
  _detected?: IElement;

  /**
   * @description The date on which the existence of the AdverseEvent was first recorded.
   */
  recordedDate?: string;

  /**
   * @description Extensions for recordedDate
   */
  _recordedDate?: IElement;

  /**
   * @description Includes information about the reaction that occurred as a result of exposure to a substance (for example, a drug or a chemical).
   */
  resultingCondition?: IReference[];

  /**
   * @description The information about where the adverse event occurred.
   */
  location?: IReference;

  /**
   * @description Assessment whether this event was of real importance.
   */
  seriousness?: ICodeableConcept;

  /**
   * @description Describes the severity of the adverse event, in relation to the subject. Contrast to AdverseEvent.seriousness - a severe rash might not be serious, but a mild heart problem is.
   */
  severity?: ICodeableConcept;

  /**
   * @description Describes the type of outcome from the adverse event.
   */
  outcome?: ICodeableConcept;

  /**
   * @description Information on who recorded the adverse event. May be the patient or a practitioner.
   */
  recorder?: IReference;

  /**
   * @description Parties that may or should contribute or have contributed information to the adverse event, which can consist of one or more activities.  Such information includes information leading to the decision to perform the activity and how to perform the activity (e.g. consultant), information that the activity itself seeks to reveal (e.g. informant of clinical history), or information about what activity was performed (e.g. informant witness).
   */
  contributor?: IReference[];

  /**
   * @description Describes the entity that is suspected to have caused the adverse event.
   */
  suspectEntity?: IAdverseEventSuspectEntity[];

  /**
   * @description AdverseEvent.subjectMedicalHistory.
   */
  subjectMedicalHistory?: IReference[];

  /**
   * @description AdverseEvent.referenceDocument.
   */
  referenceDocument?: IReference[];

  /**
   * @description AdverseEvent.study.
   */
  study?: IReference[];
}
