import { IElement } from '../base';

/**
 * @name ICoding
 * @description A reference to a code defined by a terminology system.
 * @see <a href="https://hl7.org/fhir/R4/datatypes.html#Coding">Coding</a>
 * @version R4
 * @extends {IElement}
 * @author Roberto Araneda Espinoza
 */
export interface ICoding extends IElement {
  /**
   * @description The identification of the code system that defines the meaning of the symbol in the code.
   */
  system?: string;

  /**
   * @description Extensions for system
   */
  _system?: IElement;

  /**
   * @description The version of the code system which was used when choosing this code. Note that a well-maintained code system does not need the version reported, because the meaning of codes is consistent across versions. However this cannot consistently be assured, and when the meaning is not guaranteed to be consistent, the version SHOULD be exchanged.
   */
  version?: string;

  /**
   * @description Extensions for version
   */
  _version?: IElement;

  /**
   * @description A symbol in syntax defined by the system. The symbol may be a predefined code or an expression in a syntax defined by the coding system (e.g. post-coordination).
   */
  code?: string;

  /**
   * @description Extensions for code
   */
  _code?: IElement;

  /**
   * @description A representation of the meaning of the code in the system, following the rules of the system.
   */
  display?: string;

  /**
   * @description Extensions for display
   */
  _display?: IElement;

  /**
   * @description Indicates that this coding was chosen by a user directly - e.g. off a pick list of available items (codes or displays).
   */
  userSelected?: boolean;

  /**
   * @description Extensions for userSelected
   */
  _userSelected?: IElement;
}
