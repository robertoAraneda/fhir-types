import { IBackboneElement } from '../base';
import { ICodeableConcept, IMoney, ISimpleQuantity } from '../datatypes';
import { ICoverageException } from './ICoverageException';

/**
 * @name ICoverageCostToBeneficiary
 * @description A suite of codes indicating the cost category and associated amount which have been detailed in the policy and may have been included on the health card.
 * @see <a href="https://hl7.org/fhir/R4/coverage-definitions.html#Coverage.costToBeneficiary">CoverageCostToBeneficiary</a>
 * @version R4
 * @extends {IBackboneElement}
 * @author Claudia Alarcón Lazo
 */
export interface ICoverageCostToBeneficiary extends IBackboneElement {
  /**
   * @description The category of patient centric costs associated with treatment.
   */
  type?: ICodeableConcept;

  /**
   * @description The quantity amount due from the patient for the cost category.
   */
  valueQuantity?: ISimpleQuantity;

  /**
   * @description The money amount due from the patient for the cost category.
   */
  valueMoney?: IMoney;

  /**
   * @description A suite of codes indicating exceptions or reductions to patient costs and their effective periods.
   */
  exception?: ICoverageException[];
}
