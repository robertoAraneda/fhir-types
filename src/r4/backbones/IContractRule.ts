import { IBackboneElement } from '../base';
import { IAttachment, IReference } from '../datatypes';

/**
 * @name IContractRule
 * @description Legally enforceable, formally recorded unilateral or bilateral directive i.e., a policy or agreement.
 * @see <a href="https://hl7.org/fhir/R4/contract-definitions.html#Contract.rule">ContractRule</a>
 * @version R4
 * @extends {IBackboneElement}
 * @author Claudia Alarcón Lazo
 */
export interface IContractRule extends IBackboneElement {
  /**
   * @description Computable Contract conveyed using a policy rule language (e.g. XACML, DKAL, SecPal).
   */
  contentAttachment?: IAttachment;

  /**
   * @description Computable Contract conveyed using a policy rule language (e.g. XACML, DKAL, SecPal).
   */
  contentReference?: IReference;
}
