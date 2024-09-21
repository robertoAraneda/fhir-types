import { IBackboneElement, IElement } from '../base';
import { ICodeableConcept, IReference } from '../datatypes';

/**
 * @name IAdverseEventCausality
 * @description Actual or  potential/avoided event causing unintended physical injury resulting from or contributed to by medical care, a research study or other healthcare setting factors that requires additional monitoring, treatment, or hospitalization, or that results in death.
 * @see <a href="https://hl7.org/fhir/R4/adverseevent-definitions.html#AdverseEvent.suspectEntity.causality">AdverseEventCausality</a>
 * @version R4
 * @extends {IBackboneElement}
 * @author Claudia Alarcón Lazo
 */
export interface IAdverseEventCausality extends IBackboneElement {
  /**
   * @description Assessment of if the entity caused the event.
   */
  assessment?: ICodeableConcept;

  /**
   * @description AdverseEvent.suspectEntity.causalityProductRelatedness.
   */
  productRelatedness?: string;

  /**
   * @description Extensions for productRelatedness
   */
  _productRelatedness?: IElement;

  /**
   * @description AdverseEvent.suspectEntity.causalityAuthor.
   */
  author?: IReference;

  /**
   * @description ProbabilityScale | Bayesian | Checklist.
   */
  method?: ICodeableConcept;
}
