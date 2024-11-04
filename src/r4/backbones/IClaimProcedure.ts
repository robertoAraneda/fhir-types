import { IBackboneElement, IElement } from '../base';
import { ICodeableConcept, IReference } from '../datatypes';

/**
 * @name IClaimProcedure
 * @description A provider issued list of professional services and products which have been provided, or are to be provided, to a patient which is sent to an insurer for reimbursement.
 * @see <a href="https://hl7.org/fhir/R4/claim-definitions.html#Claim.procedure">ClaimProcedure</a>
 * @version R4
 * @extends {IBackboneElement}
 * @author Claudia Alarcón Lazo
 */
export interface IClaimProcedure extends IBackboneElement {
  /**
   * @description A number to uniquely identify procedure entries.
   */
  sequence: number;

  /**
   * @description Extensions for sequence
   */
  _sequence?: IElement;

  /**
   * @description When the condition was observed or the relative ranking.
   */
  type?: ICodeableConcept[];

  /**
   * @description Date and optionally time the procedure was performed.
   */
  date?: string;

  /**
   * @description Extensions for date
   */
  _date?: IElement;

  /**
   * @description The code or reference to a Procedure resource which identifies the clinical intervention performed.
   */
  procedureCodeableConcept?: ICodeableConcept;

  /**
   * @description The code or reference to a Procedure resource which identifies the clinical intervention performed.
   */
  procedureReference?: IReference;

  /**
   * @description Unique Device Identifiers associated with this line item.
   */
  udi?: IReference[];
}
