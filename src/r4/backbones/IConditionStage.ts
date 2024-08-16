import { IBackboneElement } from '../base';
import { ICodeableConcept, IReference } from '../datatypes';

export interface IConditionStage extends IBackboneElement {
  /**
   * @description A simple summary of the stage such as "Stage 3". The determination of the stage is disease-specific.
   */
  summary?: ICodeableConcept;

  /**
   * @description Reference to a formal record of the evidence on which the staging assessment is based.
   */
  assessment?: IReference[];

  /**
   * @description The kind of staging, such as pathological or clinical staging.
   */
  type?: ICodeableConcept;
}
