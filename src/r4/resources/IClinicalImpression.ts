import { IClinicalImpressionFinding, IClinicalImpressionInvestigation } from '../backbones';
import { IDomainResource, IElement } from '../base';
import { IAnnotation, ICodeableConcept, IIdentifier, IPeriod, IReference } from '../datatypes';
import { ClinicalImpressionStatusType } from '../types';

/**
 * @name IClinicalImpression
 * @description A record of a clinical assessment performed to determine what problem(s) may affect the patient and before planning the treatments or management strategies that are best to manage a patient\u0027s condition. Assessments are often 1:1 with a clinical consultation / encounter,  but this varies greatly depending on the clinical workflow. This resource is called \"ClinicalImpression\" rather than \"ClinicalAssessment\" to avoid confusion with the recording of assessment tools such as Apgar score.
 * @see <a href="https://hl7.org/fhir/R4/clinicalimpression.html">ClinicalImpression</a>
 * @version R4
 * @extends {IDomainResource}
 * @author Claudia Alarcón Lazo
 */
export interface IClinicalImpression extends IDomainResource {
  /**
   * @description Business identifiers assigned to this clinical impression by the performer or other systems which remain constant as the resource is updated and propagates from server to server.
   */
  identifier?: IIdentifier[];

  /**
   * @description Identifies the workflow status of the assessment.
   * @description in-progress | completed | entered-in-error
   * @see <a href="https://hl7.org/fhir/R4/valueset-clinicalimpression-status.html">ClinicalImpressionStatus</a>
   */
  status: ClinicalImpressionStatusType;

  /**
   * @description Extensions for status
   */
  _status?: IElement;

  /**
   * @description Captures the reason for the current state of the ClinicalImpression.
   */
  statusReason?: ICodeableConcept;

  /**
   * @description Categorizes the type of clinical assessment performed.
   */
  code?: ICodeableConcept;

  /**
   * @description A summary of the context and/or cause of the assessment - why / where it was performed, and what patient events/status prompted it.
   */
  description?: string;

  /**
   * @description Extensions for description
   */
  _description?: IElement;

  /**
   * @description The patient or group of individuals assessed as part of this record.
   */
  subject: IReference;

  /**
   * @description The Encounter during which this ClinicalImpression was created or to which the creation of this record is tightly associated.
   */
  encounter?: IReference;

  /**
   * @description The point in time or period over which the subject was assessed.
   */
  effectiveDateTime?: string;

  /**
   * @description Extensions for effectiveDateTime
   */
  _effectiveDateTime?: IElement;

  /**
   * @description The point in time or period over which the subject was assessed.
   */
  effectivePeriod?: IPeriod;

  /**
   * @description Indicates when the documentation of the assessment was complete.
   */
  date?: string;

  /**
   * @description Extensions for date
   */
  _date?: IElement;

  /**
   * @description The clinician performing the assessment.
   */
  assessor?: IReference;

  /**
   * @description A reference to the last assessment that was conducted on this patient. Assessments are often/usually ongoing in nature; a care provider (practitioner or team) will make new assessments on an ongoing basis as new data arises or the patient\u0027s conditions changes.
   */
  previous?: IReference;

  /**
   * @description A list of the relevant problems/conditions for a patient.
   */
  problem?: IReference[];

  /**
   * @description One or more sets of investigations (signs, symptoms, etc.). The actual grouping of investigations varies greatly depending on the type and context of the assessment. These investigations may include data generated during the assessment process, or data previously generated and recorded that is pertinent to the outcomes.
   */
  investigation?: IClinicalImpressionInvestigation[];

  /**
   * @description Reference to a specific published clinical protocol that was followed during this assessment, and/or that provides evidence in support of the diagnosis.
   */
  protocol?: string[];

  /**
   * @description Extensions for protocol
   */
  _protocol?: IElement[];

  /**
   * @description A text summary of the investigations and the diagnosis.
   */
  summary?: string;

  /**
   * @description Extensions for summary
   */
  _summary?: IElement;

  /**
   * @description Specific findings or diagnoses that were considered likely or relevant to ongoing treatment.
   */
  finding?: IClinicalImpressionFinding[];

  /**
   * @description Estimate of likely outcome.
   */
  prognosisCodeableConcept?: ICodeableConcept[];

  /**
   * @description RiskAssessment expressing likely outcome.
   */
  prognosisReference?: IReference[];

  /**
   * @description Information supporting the clinical impression.
   */
  supportingInfo?: IReference[];

  /**
   * @description Commentary about the impression, typically recorded after the impression itself was made, though supplemental notes by the original author could also appear.
   */
  note?: IAnnotation[];
}
