import { IElement } from '../base';
import { IAddress } from './IAddress';
import { IAttachment } from './IAttachment';
import { ICodeableConcept } from './ICodeableConcept';
import { ICoding } from './ICoding';
import { IContactPoint } from './IContactPoint';
import { IDuration } from './IDuration';
import { IHumanName } from './IHumanName';
import { IIdentifier } from './IIdentifier';
import { IMeta } from './IMeta';
import { IPeriod } from './IPeriod';
import { IQuantity } from './IQuantity';
import { IRange } from './IRange';
import { IReference } from './IReference';
import { ISignature } from './ISignature';

export interface IExtension extends IElement {
  url: string;
  _url?: IElement;
  valueBase64Binary?: string;
  _valueBase64Binary?: IElement;
  valueBoolean?: boolean;
  _valueBoolean?: IElement;
  valueCanonical?: string;
  _valueCanonical?: IElement;
  valueCode?: string;
  _valueCode?: IElement;
  valueDate?: string;
  _valueDate?: IElement;
  valueDateTime?: string;
  _valueDateTime?: IElement;
  valueDecimal?: number;
  _valueDecimal?: IElement;
  valueId?: string;
  _valueId?: IElement;
  valueInstant?: string;
  _valueInstant?: IElement;
  valueInteger?: number;
  _valueInteger?: IElement;
  valueMarkdown?: string;
  _valueMarkdown?: IElement;
  valueOid?: string;
  _valueOid?: IElement;
  valuePositiveInt?: number;
  _valuePositiveInt?: IElement;
  valueString?: string;
  _valueString?: IElement;
  valueTime?: string;
  _valueTime?: IElement;
  valueUnsignedInt?: number;
  _valueUnsignedInt?: IElement;
  valueUri?: string;
  _valueUri?: IElement;
  valueUrl?: string;
  _valueUrl?: IElement;
  valueUuid?: string;
  _valueUuid?: IElement;
  valueAddress?: IAddress;
  // TODO missing age
  // TODO missing annotation
  valueAttachment?: IAttachment;
  valueCodeableConcept?: ICodeableConcept;
  valueCoding?: ICoding;
  valueContactPoint?: IContactPoint;
  // TODO missing count
  // TODO missing distance
  valueDuration?: IDuration;
  valueHumanName?: IHumanName;
  valueIdentifier?: IIdentifier;
  // TODO missing money
  valuePeriod?: IPeriod;
  valueQuantity?: IQuantity;
  valueRange?: IRange;
  // TODO missing ratio
  valueReference?: IReference;
  // TODO missing sampledData
  valueSignature?: ISignature;
  // TODO missing timing
  // TODO missing contactDetail
  // TODO missing contributor
  // TODO missing dataRequirement
  // TODO missing expression
  // TODO missing parameterDefinition
  // TODO missing relatedArtifact
  // TODO missing triggerDefinition
  // TODO missing usageContext
  // TODO missing dosage
  valueMeta?: IMeta;
}
