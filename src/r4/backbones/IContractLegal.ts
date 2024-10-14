import { IBackboneElement } from '../base';
import { IAttachment, IReference } from '../datatypes';

/**
 * @name IContractLegal
 * @description Legally enforceable, formally recorded unilateral or bilateral directive i.e., a policy or agreement.
 * @see <a href="https://hl7.org/fhir/R4/contract-definitions.html#Contract.legal">ContractLegal</a>
 * @version R4
 * @extends {IBackboneElement}
 * @author Claudia Alarcón Lazo
 */
export interface IContractLegal extends IBackboneElement {
  /**
   * @description Contract legal text in human renderable form.
   */
  contentAttachment?: IAttachment;

  /**
   * @description Contract legal text in human renderable form.
   */
  contentReference?: IReference;
}
