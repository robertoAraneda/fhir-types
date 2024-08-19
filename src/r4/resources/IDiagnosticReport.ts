import { IDiagnosticReportMedia } from '../backbones';
import { IDomainResource, IElement } from '../base';
import { IAttachment, ICodeableConcept, IIdentifier, IPeriod, IReference } from '../datatypes';
import { DiagnosticReportStatusType } from '../types';

/**
 * @name IDiagnosticReport
 * @description The findings and interpretation of diagnostic tests performed on patients, groups of patients, devices, and locations, and/or specimens derived from these. The report includes clinical context such as requesting and provider information, and some mix of atomic results, images, textual and coded interpretations, and formatted representation of diagnostic reports.
 * @see <a href="https://hl7.org/fhir/R4/diagnosticreport.html">DiagnosticReport</a>
 * @version R4
 * @extends {IDomainResource}
 * @author Claudia Alarcón Lazo
 */
export interface IDiagnosticReport extends IDomainResource {
  /**
   * @description Identifiers assigned to this report by the performer or other systems.
   */
  identifier?: IIdentifier[];

  /**
   * @description Details concerning a service requested.
   */
  basedOn?: IReference[];

  /**
   * @description The status of the diagnostic report.
   * @description registered | partial | preliminary | final | amended | corrected | appended | cancelled | entered-in-error | unknown
   * @see <a href="https://hl7.org/fhir/R4/valueset-diagnostic-report-status.html">DiagnosticReportStatus</a>
   */
  status: DiagnosticReportStatusType;

  /**
   * @description A code that classifies the clinical discipline, department or diagnostic service that created the report (e.g. cardiology, biochemistry, hematology, MRI). This is used for searching, sorting and display purposes.
   */
  category?: ICodeableConcept[];

  /**
   * @description A code or name that describes this diagnostic report.
   */
  code: ICodeableConcept;

  /**
   * @description The subject of the report. Usually, but not always, this is a patient. However, diagnostic services also perform analyses on specimens collected from a variety of other sources.
   */
  subject: IReference;

  /**
   * @description The healthcare event (e.g. a patient and healthcare provider interaction) which this DiagnosticReport is about.
   */
  encounter?: IReference;

  /**
   * @description The time or time-period the observed values are related to. When the subject of the report is a patient, this is usually either the time of the procedure or of specimen collection(s), but very often the source of the date/time is not known, only the date/time itself.
   */
  effectiveDateTime?: string;

  /**
   * @description The time or time-period the observed values are related to. When the subject of the report is a patient, this is usually either the time of the procedure or of specimen collection(s), but very often the source of the date/time is not known, only the date/time itself.
   */
  effectivePeriod?: IPeriod;

  /**
   * @description The date and time that this version of the report was made available to providers, typically after the report was reviewed and verified.
   */
  issued?: string;

  /**
   * @description The diagnostic service that is responsible for issuing the report.
   */
  performer?: IReference[];

  /**
   * @description The practitioner or organization that is responsible for the report's conclusions and interpretations.
   */
  resultsInterpreter?: IReference[];

  /**
   * @description Details about the specimens on which this diagnostic report is based.
   */
  specimen?: IReference[];

  /**
   * @description Observations that are part of this diagnostic report.
   */
  result?: IReference[];

  /**
   * @description One or more links to full details of any imaging performed during the diagnostic investigation. Typically, this is imaging performed by DICOM enabled modalities, but this is not required. A fully enabled PACS viewer can use this information to provide views of the source images.
   */
  imagingStudy?: IReference[];

  /**
   * @description A list of key images associated with this report. The images are generally created during the diagnostic process, and may be directly of the patient, or of treated specimens (i.e. slides of interest).
   */
  media?: IDiagnosticReportMedia[];

  /**
   * @description Concise and clinically contextualized summary conclusion (interpretation/impression) of the diagnostic report.
   */
  conclusion?: string;

  /**
   * @description One or more codes that represent the summary conclusion (interpretation) of the diagnostic report.
   */
  conclusionCode?: ICodeableConcept[];

  /**
   * @description Rich text representation of the entire result as issued by the diagnostic service. Multiple formats are allowed but they SHALL be semantically equivalent.
   */
  presentedForm?: IAttachment[];

  // Extensions attributes
  /**
   * @description Extension for status
   */
  _status?: IElement;

  /**
   * @description Extension for issued
   */
  _issued?: IElement;

  /**
   * @description Extension for conslusion
   */
  _conclusion?: IElement;
}
