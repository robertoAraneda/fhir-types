import { IDomainResource, IElement } from '../base';
import { ICodeableConcept, IIdentifier, IReference } from '../datatypes';
import { ICompositionAttester, ICompositionEvent, ICompositionRelatesTo, ICompositionSection } from '../backbones';
import { ConfidentialityClassificationType, CompositionStatusType } from '../types';

/**
 * @name IComposition
 * @descriptionA set of healthcare-related information that is assembled together into a single logical package that provides a single coherent statement of meaning, establishes its own context and that has clinical attestation with regard to who is making the statement. A Composition defines the structure and narrative content necessary for a document. However, a Composition alone does not constitute a document. Rather, the Composition must be the first entry in a Bundle where Bundle.type\u003ddocument, and any other resources referenced from Composition must be included as subsequent entries in the Bundle (for example Patient, Practitioner, Encounter, etc.).
 * @see <a href="https://hl7.org/fhir/R4/composition.html">Composition</a>
 * @version R4
 * @extends {IDomainResource}
 * @author Roberto Araneda Espinoza
 */
export interface IComposition extends IDomainResource {
  /**
   * @description A version-independent identifier for the Composition. This identifier stays constant as the composition is changed over time.
   */
  identifier?: IIdentifier;

  /**
   * @description The workflow/clinical status of this composition. The status is a marker for the clinical standing of the document.
   * @description preliminary | final | amended | entered-in-error
   * @see <a href="https://hl7.org/fhir/R4/valueset-composition-status.html">CompositionStatus</a>
   */
  status?: CompositionStatusType;

  /**
   * @description Extensions for status
   */
  _status?: IElement;

  /**
   * @description Specifies the particular kind of composition (e.g. History and Physical, Discharge Summary, Progress Note). This usually equates to the purpose of making the composition.
   */
  type: ICodeableConcept;

  /**
   * @description A categorization for the type of the composition - helps for indexing and searching. This may be implied by or derived from the code specified in the Composition Type.
   */
  category?: ICodeableConcept[];

  /**
   * @description "Who or what the composition is about. The composition can be about a person, (patient or healthcare practitioner), a device (e.g. a machine) or even a group of subjects (such as a document about a herd of livestock, or a set of patients that share a common exposure).
   */
  subject?: IReference;

  /**
   * @description Describes the clinical encounter or type of care this documentation is associated with.
   */
  encounter?: IReference;

  /**
   * @description The composition editing time, when the composition was last logically changed by the author.
   */
  date?: string;

  /**
   * @description Extensions for date
   */
  _date?: IElement;

  /**
   * @description Identifies who is responsible for the information in the composition, not necessarily who typed it in.
   */
  author: IReference[];

  /**
   * @description Official human-readable label for the composition.
   */
  title?: string;

  /**
   * @description Extensions for title
   */
  _title?: IElement;

  /**
   * @description The code specifying the level of confidentiality of the Composition.
   * @description U | L | M | N | R | V
   * @see <a href="https://hl7.org/fhir/R4/v3/ConfidentialityClassification/vs.html">ConfidentialityClassification</a>
   */
  confidentiality?: ConfidentialityClassificationType;

  /**
   * @description Extensions for confidentiality
   */
  _confidentiality?: IElement;

  /**
   * @description A participant who has attested to the accuracy of the composition/document.
   */
  attester?: ICompositionAttester[];

  /**
   * @description Identifies the organization or group who is responsible for ongoing maintenance of and access to the composition/document information.
   */
  custodian?: IReference;

  /**
   * @description Relationships that this composition has with other compositions or documents that already exist.
   */
  relatesTo?: ICompositionRelatesTo[];

  /**
   * @description The clinical service, such as a colonoscopy or an appendectomy, being documented.
   */
  event?: ICompositionEvent[];

  /**
   * @description The root of the sections that make up the composition.
   */
  section?: ICompositionSection[];
}
