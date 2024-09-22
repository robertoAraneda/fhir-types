import { ISpecimenCollection, ISpecimenContainer, ISpecimenProcessing } from '../backbones';
import { IDomainResource, IElement } from '../base';
import { IAnnotation, ICodeableConcept, IIdentifier, IReference } from '../datatypes';
import { SpecimenStatusType } from '../types';

/**
 * @name ISpecimen
 * @description A sample to be used for analysis.
 * @see <a href="https://hl7.org/fhir/R4/specimen.html">Specimen</a>
 * @version R4
 * @extends {IDomainResource}
 * @author Claudia Alarcón Lazo
 */
export interface ISpecimen extends IDomainResource {
  /**
   * @description Id for specimen.
   */
  identifier?: IIdentifier[];

  /**
   * @description The identifier assigned by the lab when accessioning specimen(s). This is not necessarily the same as the specimen identifier, depending on local lab procedures.
   */
  accessionIdentifier?: IIdentifier;

  /**
   * @description The availability of the specimen.
   * @description available | unavailable | unsatisfactory | entered-in-error
   * @see <a href="https://hl7.org/fhir/R4/valueset-specimen-status.html">SpecimenStatus</a>
   */
  status?: SpecimenStatusType;

  /**
   * @description Extensions for status
   */
  _status?: IElement;

  /**
   * @description The kind of material that forms the specimen.
   */
  type?: ICodeableConcept;

  /**
   * @description Where the specimen came from. This may be from patient(s), from a location (e.g., the source of an environmental sample), or a sampling of a substance or a device.
   */
  subject?: IReference;

  /**
   * @description Time when specimen was received for processing or testing.
   */
  receivedTime?: string;

  /**
   * @description Extensions for receivedTime
   */
  _receivedTime?: IElement;

  /**
   * @description Reference to the parent (source) specimen which is used when the specimen was either derived from or a component of another specimen.
   */
  parent?: IReference[];

  /**
   * @description Details concerning a service request that required a specimen to be collected.
   */
  request?: IReference[];

  /**
   * @description Details concerning the specimen collection.
   */
  collection?: ISpecimenCollection;

  /**
   * @description Details concerning processing and processing steps for the specimen.
   */
  processing?: ISpecimenProcessing[];

  /**
   * @description The container holding the specimen.  The recursive nature of containers; i.e. blood in tube in tray in rack is not addressed here.
   */
  container?: ISpecimenContainer[];

  /**
   * @description A mode or state of being that describes the nature of the specimen.
   */
  condition?: ICodeableConcept[];

  /**
   * @description To communicate any details or issues about the specimen or during the specimen collection. (for example: broken vial, sent with patient, frozen).
   */
  note?: IAnnotation[];
}
