import {
  IEncounterClassHistory,
  IEncounterDiagnosis,
  IEncounterHospitalization,
  IEncounterLocation,
  IEncounterParticipant,
  IEncounterStatusHistory,
} from '../backbones';
import { IDomainResource, IElement } from '../base';
import { ICodeableConcept, ICoding, IDuration, IIdentifier, IPeriod, IReference } from '../datatypes';
import { EncounterStatusType } from '../types';

/**
 * @name IEncounter
 * @description An interaction between a patient and healthcare provider(s) for the purpose of providing healthcare service(s) or assessing the health status of a patient.
 * @see <a href="https://hl7.org/fhir/R4/encounter.html">Encounter</a>
 * @version R4
 * @extends {IDomainResource}
 * @author Roberto Araneda Espinoza
 */
export interface IEncounter extends IDomainResource {
  /**
   * @description Identifier(s) by which this encounter is known.
   */
  identifier?: IIdentifier[];

  /**
   * @description Current state of the encounter.
   * @description planned | arrived | triaged | in-progress | onleave | finished | cancelled
   * @see <a href="https://hl7.org/fhir/R4/valueset-encounter-status.html">EncounterStatus</a>
   */
  status: EncounterStatusType;

  /**
   * @description Extensions for status
   */
  _status?: IElement;

  /**
   * @description The status history permits the encounter resource to contain the status history without needing to read through the historical versions of the resource, or even have the server store them.
   */
  statusHistory?: IEncounterStatusHistory[];

  /**
   * @description Concepts representing classification of patient encounter such as ambulatory (outpatient), inpatient, emergency, home health or others due to local variations.
   */
  class: ICoding;

  /**
   * @description The class history permits the tracking of the encounters transitions without needing to go through the resource history.
   */
  classHistory?: IEncounterClassHistory[];

  /**
   * @description Specific type of encounter (e.g. e-mail consultation, surgical day-care, skilled nursing, rehabilitation).
   */
  type?: ICodeableConcept[];

  /**
   * @description Broad categorization of the service that is to be provided (e.g. cardiology).
   */
  serviceType?: ICodeableConcept;

  /**
   * @description Indicates the urgency of the encounter.
   */
  priority?: ICodeableConcept;

  /**
   * @description The patient or group present at the encounter.
   */
  subject?: IReference;

  /**
   * @description Where a specific encounter should be classified as a part of a specific episode(s) of care this field should be used.
   */
  episodeOfCare?: IReference[];

  /**
   * @description The request this encounter satisfies (e.g. incoming referral or procedure request).
   */
  basedOn?: IReference[];

  /**
   * @description The list of people responsible for providing the service.
   */
  participant?: IEncounterParticipant[];

  /**
   * @description The appointment that scheduled this encounter.
   */
  appointment?: IReference[];

  /**
   * @description The start and end time of the encounter.
   */
  period?: IPeriod;

  /**
   * @description Quantity of time the encounter lasted. This excludes the time during leaves of absence.
   */
  length?: IDuration;

  /**
   * @description Reason the encounter takes place, expressed as a code. For admissions, this can be used for a coded admission diagnosis.
   */
  reasonCode?: ICodeableConcept[];

  /**
   * @description Reason the encounter takes place, expressed as a code. For admissions, this can be used for a coded admission diagnosis.
   */
  reasonReference?: IReference[];

  /**
   * @description The list of diagnosis relevant to this encounter.
   */
  diagnosis?: IEncounterDiagnosis[];

  /**
   * @description The set of accounts that may be used for billing for this Encounter.
   */
  account?: IReference[];

  /**
   * @description Details about the admission to a healthcare service.
   */
  hospitalization?: IEncounterHospitalization;

  /**
   * @description List of locations where the patient has been during this encounter.
   */
  location?: IEncounterLocation[];

  /**
   * @description The organization that is primarily responsible for this Encounter's services.
   */
  serviceProvider?: IReference;

  /**
   * @description Another Encounter of which this encounter is a part of (administratively or in time).
   */
  partOf?: IReference;
}
