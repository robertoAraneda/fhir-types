import { IBackboneElement } from '../base';
import { ICodeableConcept, IPeriod, IReference } from '../datatypes';

/**
 * @name ICompositionEvent
 * @description The clinical service, such as a colonoscopy or an appendectomy, being documented.
 * @see <a href="https://hl7.org/fhir/R4/composition-definitions.html#Composition.event">CompositionEvent</a>
 * @version R4
 * @extends {IBackboneElement}
 * @author Roberto Araneda Espinoza
 */
export interface ICompositionEvent extends IBackboneElement {
  /**
   * @description This list of codes represents the main clinical acts, such as a colonoscopy or an appendectomy, being documented. In some cases, the event is inherent in the typeCode, such as a \"History and Physical Report\" in which the procedure being documented is necessarily a \"History and Physical\" act.
   */
  code?: ICodeableConcept[];

  /**
   * @description The period of time covered by the documentation. There is no assertion that the documentation is a complete representation for this period, only that it documents events during this time.
   */
  period?: IPeriod;

  /**
   * @description The description and/or reference of the event(s) being documented. For example, this could be used to document such a colonoscopy or an appendectomy.
   */
  detail?: IReference[];
}
