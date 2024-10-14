import { IBackboneElement } from '../base';
import { IAttachment, IReference } from '../datatypes';

/**
 * @name IContractFriendly
 * @description Legally enforceable, formally recorded unilateral or bilateral directive i.e., a policy or agreement.
 * @see <a href="https://hl7.org/fhir/R4/contract-definitions.html#Contract.friendly">ContractFriendly</a>
 * @version R4
 * @extends {IBackboneElement}
 * @author Claudia Alarcón Lazo
 */
export interface IContractFriendly extends IBackboneElement {
  /**
   * @description Human readable rendering of this Contract in a format and representation intended to enhance comprehension and ensure understandability.
   */
  contentAttachment?: IAttachment;

  /**
   * @description Human readable rendering of this Contract in a format and representation intended to enhance comprehension and ensure understandability.
   */
  contentReference?: IReference;
}
