import { IBackboneElement, IElement } from '../base';
import { ICodeableConcept, INarrative, IReference } from '../datatypes';
import { ListModeType } from '../types';

/**
 * @name ICompositionSection
 * @description The root of the sections that make up the composition.
 * @see <a href="https://hl7.org/fhir/R4/composition-definitions.html#Composition.section">CompositionSection</a>
 * @version R4
 * @extends {IBackboneElement}
 * @author Roberto Araneda Espinoza
 */
export interface ICompositionSection extends IBackboneElement {
  /**
   * @description The label for this particular section.  This will be part of the rendered content for the document, and is often used to build a table of contents.
   */
  title?: string;

  /**
   * @description Extensions for title
   */
  _title?: IElement;

  /**
   * @description A code identifying the kind of content contained within the section. This must be consistent with the section title.
   */
  code?: ICodeableConcept;

  /**
   * @description Identifies who is responsible for the information in this section, not necessarily who typed it in.
   */
  author?: IReference[];

  /**
   * @description The actual focus of the section when it is not the subject of the composition, but instead represents something or someone associated with the subject such as (for a patient subject) a spouse, parent, fetus, or donor. If not focus is specified, the focus is assumed to be focus of the parent section, or, for a section in the Composition itself, the subject of the composition. Sections with a focus SHALL only include resources where the logical subject (patient, subject, focus, etc.) matches the section focus, or the resources have no logical subject (few resources).
   */
  focus?: IReference;

  /**
   * @description A human-readable narrative that contains the attested content of the section, used to represent the content of the resource to a human. The narrative need not encode all the structured data, but is required to contain sufficient detail to make it \"clinically safe\" for a human to just read the narrative.
   */
  text?: INarrative;

  /**
   * @description How the entry list was prepared - whether it is a working list that is suitable for being maintained on an ongoing basis, or if it represents a snapshot of a list of items from another source, or whether it is a prepared list where items may be marked as added, modified or deleted.
   */
  mode?: ListModeType;

  /**
   * @description Extensions for mode
   */
  _mode?: IElement;

  /**
   * @description Specifies the order applied to the items in the section entries.
   */
  orderedBy?: ICodeableConcept;

  /**
   * @description A reference to the actual resource from which the narrative in the section is derived.
   */
  entry?: IReference[];

  /**
   * @description If the section is empty, why the list is empty. An empty section typically has some text explaining the empty reason.
   */
  emptyReason?: ICodeableConcept;

  /**
   * @description A nested sub-section within this section.
   */
  section?: ICompositionSection[];
}
