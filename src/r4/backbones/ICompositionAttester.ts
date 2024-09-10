import { IBackboneElement, IElement } from '../base';
import { IReference } from '../datatypes';
import { CompositionAttestationModeType } from '../types';

/**
 * @name ICompositionAttester
 * @description A set of healthcare-related information that is assembled together into a single logical package that provides a single coherent statement of meaning, establishes its own context and that has clinical attestation with regard to who is making the statement. A Composition defines the structure and narrative content necessary for a document. However, a Composition alone does not constitute a document. Rather, the Composition must be the first entry in a Bundle where Bundle.type\u003ddocument, and any other resources referenced from Composition must be included as subsequent entries in the Bundle (for example Patient, Practitioner, Encounter, etc.).
 * @see <a href="https://hl7.org/fhir/R4/composition-definitions.html#Composition.attester">CompositionAttester</a>
 * @version R4
 * @extends {IBackboneElement}
 * @author Roberto Araneda Espinoza
 */
export interface ICompositionAttester extends IBackboneElement {
  /**
   * @description The type of attestation the authenticator offers.
   */
  mode: CompositionAttestationModeType;

  /**
   * @description Extensions for mode
   */
  _mode?: IElement;

  /**
   * @description When the composition was attested by the party.
   */
  time?: string;

  /**
   * @description Extensions for time
   */
  _time?: IElement;

  /**
   * @description Who attested the composition in the specified way.
   */
  party?: IReference;
}
