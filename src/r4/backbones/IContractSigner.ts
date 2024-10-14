import { IBackboneElement } from '../base';
import { ICoding, IReference, ISignature } from '../datatypes';

/**
 * @name IContractSigner
 * @description Legally enforceable, formally recorded unilateral or bilateral directive i.e., a policy or agreement.
 * @see <a href="https://hl7.org/fhir/R4/contract-definitions.html#Contract.signer">Contract</a>
 * @version R4
 * @extends {IBackboneElement}
 * @author Claudia Alarcón Lazo
 */
export interface IContractSigner extends IBackboneElement {
  /**
   * @description Role of this Contract signer, e.g. notary, grantee.
   */
  type: ICoding;

  /**
   * @description Party which is a signator to this Contract.
   */
  party: IReference;

  /**
   * @description Legally binding Contract DSIG signature contents in Base64.
   */
  signature: ISignature[];
}
