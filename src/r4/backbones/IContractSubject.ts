import { IBackboneElement } from '../base';
import { ICodeableConcept, IReference } from '../datatypes';

/**
 * @name IContractSubject
 * @description Legally enforceable, formally recorded unilateral or bilateral directive i.e., a policy or agreement.
 * @see <a href="https://hl7.org/fhir/R4/contract-definitions.html#Contract.term.action.subject">ContractSubject</a>
 * @version R4
 * @extends {IBackboneElement}
 * @author Claudia Alarcón Lazo
 */
export interface IContractSubject extends IBackboneElement {
  /**
   * @description The entity the action is performed or not performed on or for.
   */
  reference: IReference[];

  /**
   * @description Role type of agent assigned roles in this Contract.
   */
  role?: ICodeableConcept;
}
