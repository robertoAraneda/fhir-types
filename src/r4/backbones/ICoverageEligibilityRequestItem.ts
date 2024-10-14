import { IBackboneElement, IElement } from '../base';
import { ICodeableConcept, IMoney, IReference, ISimpleQuantity } from '../datatypes';
import { ICoverageEligibilityRequestDiagnosis } from './ICoverageEligibilityRequestDiagnosis';

/**
 * @name ICoverageEligibilityRequestItem
 * @description The CoverageEligibilityRequest provides patient and insurance coverage information to an insurer for them to respond, in the form of an CoverageEligibilityResponse, with information regarding whether the stated coverage is valid and in-force and optionally to provide the insurance details of the policy.
 * @see <a href="https://hl7.org/fhir/R4/coverageeligibilityrequest-definitions.html#CoverageEligibilityRequest.item">CoverageEligibilityRequestItem</a>
 * @version R4
 * @extends {IBackboneElement}
 * @author Claudia Alarcón Lazo
 */
export interface ICoverageEligibilityRequestItem extends IBackboneElement {
  /**
   * @description Exceptions, special conditions and supporting information applicable for this service or product line.
   */
  supportingInfoSequence?: number[];

  /**
   * @description Extensions for supportingInfoSequence
   */
  _supportingInfoSequence?: IElement[];

  /**
   * @description Code to identify the general type of benefits under which products and services are provided.
   */
  category?: ICodeableConcept;

  /**
   * @description This contains the product, service, drug or other billing code for the item.
   */
  productOrService?: ICodeableConcept;

  /**
   * @description Item typification or modifiers codes to convey additional context for the product or service.
   */
  modifier?: ICodeableConcept[];

  /**
   * @description The practitioner who is responsible for the product or service to be rendered to the patient.
   */
  provider?: IReference;

  /**
   * @description The number of repetitions of a service or product.
   */
  quantity?: ISimpleQuantity;

  /**
   * @description The amount charged to the patient by the provider for a single unit.
   */
  unitPrice?: IMoney;

  /**
   * @description Facility where the services will be provided.
   */
  facility?: IReference;

  /**
   * @description Patient diagnosis for which care is sought.
   */
  diagnosis?: ICoverageEligibilityRequestDiagnosis[];

  /**
   * @description The plan/proposal/order describing the proposed service in detail.
   */
  detail?: IReference[];
}
