import { IBackboneElement, IElement } from '../base';
import { ICodeableConcept, IReference } from '../datatypes';

/**
 * @name IContractContext
 * @description Legally enforceable, formally recorded unilateral or bilateral directive i.e., a policy or agreement.
 * @see <a href="https://hl7.org/fhir/R4/contract-definitions.html#Contract.term.asset.context">ContractContext</a>
 * @version R4
 * @extends {IBackboneElement}
 * @author Claudia Alarcón Lazo
 */
export interface IContractContext extends IBackboneElement {
  /**
   * @description Asset context reference may include the creator, custodian, or owning Person or Organization (e.g., bank, repository),  location held, e.g., building,  jurisdiction.
   */
  reference?: IReference;

  /**
   * @description Coded representation of the context generally or of the Referenced entity, such as the asset holder type or location.
   */
  code?: ICodeableConcept[];

  /**
   * @description Context description.
   */
  text?: string;

  /**
   * @description Extensions for text
   */
  _text?: IElement;
}
