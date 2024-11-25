import { IBackboneElement, IElement } from '../base';
import { IAttachment, ICodeableConcept, IPeriod, IQuantity, IReference } from '../datatypes';

/**
 * @name IClaimSupportingInfo
 * @description A provider issued list of professional services and products which have been provided, or are to be provided, to a patient which is sent to an insurer for reimbursement.
 * @see <a href="https://hl7.org/fhir/R4/claim-definitions.html#Claim.supportingInfo">ClaimSupportingInfo</a>
 * @version R4
 * @extends {IBackboneElement}
 * @author Claudia Alarcón Lazo
 */
export interface IClaimSupportingInfo extends IBackboneElement {
  /**
   * @description A number to uniquely identify supporting information entries.
   */
  sequence: number;

  /**
   * @description Extensions for sequence
   */
  _sequence?: IElement;

  /**
   * @description The general class of the information supplied: information; exception; accident, employment; onset, etc.
   */
  category: ICodeableConcept;

  /**
   * @description System and code pertaining to the specific information regarding special conditions relating to the setting, treatment or patient  for which care is sought.
   */
  code?: ICodeableConcept;

  /**
   * @description The date when or period to which this information refers.
   */
  timingDate?: string;

  /**
   * @description Extensions for timingDate
   */
  _timingDate?: IElement;

  /**
   * @description The date when or period to which this information refers.
   */
  timingPeriod?: IPeriod;

  /**
   * @description Additional data or information such as resources, documents, images etc. including references to the data or the actual inclusion of the data.
   */
  valueBoolean?: boolean;

  /**
   * @description Extensions for valueBoolean
   */
  _valueBoolean?: IElement;

  /**
   * @description Additional data or information such as resources, documents, images etc. including references to the data or the actual inclusion of the data.
   */
  valueString?: string;

  /**
   * @description Extensions for valueString
   */
  _valueString?: IElement;

  /**
   * @description Additional data or information such as resources, documents, images etc. including references to the data or the actual inclusion of the data.
   */
  valueQuantity?: IQuantity;

  /**
   * @description Additional data or information such as resources, documents, images etc. including references to the data or the actual inclusion of the data.
   */
  valueAttachment?: IAttachment;

  /**
   * @description Additional data or information such as resources, documents, images etc. including references to the data or the actual inclusion of the data.
   */
  valueReference?: IReference;

  /**
   * @description Provides the reason in the situation where a reason code is required in addition to the content.
   */
  reason?: ICodeableConcept;
}
