import { IBackboneElement } from '../base';
import { ICodeableConcept, IPeriod } from '../datatypes';

/**
 * @name ICoverageException
 * @description A suite of codes indicating exceptions or reductions to patient costs and their effective periods.
 * @see <a href="https://hl7.org/fhir/R4/coverage-definitions.html#Coverage.costToBeneficiary.exception">CoverageCostToBeneficiaryException</a>
 * @version R4
 * @extends {IBackboneElement}
 * @author Claudia Alarcón Lazo
 */
export interface ICoverageException extends IBackboneElement {
  /**
   * @description The exception category for patient payments.
   */
  type: ICodeableConcept;

  /**
   * @description The effective period of the exception.
   */
  period?: IPeriod;
}
