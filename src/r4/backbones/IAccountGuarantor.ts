import { IBackboneElement, IElement } from '../base';
import { IPeriod, IReference } from '../datatypes';

/**
 * @name IAccountGuarantor
 * @description The parties responsible for balancing the account if other payment options fall short.
 * @see <a href="https://hl7.org/fhir/R4/account.html">AccountGuarantor</a>
 * @version R4
 * @extends {IBackboneElement}
 * @author Roberto Araneda Espinoza
 */
export interface IAccountGuarantor extends IBackboneElement {
  /**
   * @description The entity who is responsible.
   */
  party: IReference;

  /**
   * @description A guarantor may be placed on credit hold or otherwise have their role temporarily suspended.
   */
  onHold?: boolean;

  /**
   * @description Extensions for onHold
   */
  _onHold?: IElement;

  /**
   * @description The timeframe during which the guarantor accepts responsibility for the account.
   */
  period?: IPeriod;
}
