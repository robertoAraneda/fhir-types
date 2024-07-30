import { IBackboneElement, IElement } from '../base';
import { ICodeableConcept, IPeriod, IQuantity, IRange, IReference } from '../datatypes';

export interface IGroupCharacteristic extends IBackboneElement {
  code: ICodeableConcept;
  valueCodeableConcept?: ICodeableConcept;
  valueBoolean?: boolean;
  valueQuantity?: IQuantity;
  valueRange?: IRange;
  valueReference?: IReference;
  exclude: boolean;
  period?: IPeriod;

  _valueBoolean?: IElement;
  _exclude?: IElement;
}
