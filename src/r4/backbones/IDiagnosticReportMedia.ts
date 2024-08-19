import { IBackboneElement, IElement } from '../base';
import { IReference } from '../datatypes';

/**
 * @name IDiagnosticReportMedia
 * @description A list of key images associated with this report. The images are generally created during the diagnostic process, and may be directly of the patient, or of treated specimens (i.e. slides of interest).
 * @see <a href="https://hl7.org/fhir/R4/diagnosticreport-definitions.html#DiagnosticReport.media">DiagnosticReportMedia</a>
 * @version R4
 * @extends {IBackboneElement}
 * @author Claudia Alarcón Lazo
 */
export interface IDiagnosticReportMedia extends IBackboneElement {
  /**
   * @description A comment about the image. Typically, this is used to provide an explanation for why the image is included, or to draw the viewer's attention to important features.
   */
  comment?: string;

  /**
   * @description Reference to the image source.
   */
  link: IReference;

  // Extensions attributes
  /**
   * @description Extension for comment
   */
  _comment?: IElement;
}
