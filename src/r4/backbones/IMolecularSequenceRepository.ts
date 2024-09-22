import { IBackboneElement, IElement } from '../base';
import { RepositoryTypeType } from '../types';

/**
 * @name IMolecularSequenceRepository
 * @description Raw data describing a biological sequence.
 * @see <a href="https://hl7.org/fhir/R4/molecularsequence-definitions.html#MolecularSequence.repository">IMolecularSequenceRepository</a>
 * @version R4
 * @extends {IBackboneElement}
 * @author Claudia Alarcón Lazo
 */
export interface IMolecularSequenceRepository extends IBackboneElement {
  /**
   * @description Click and see / RESTful API / Need login to see / RESTful API with authentication / Other ways to see resource.
   * @description directlink | openapi | login | oauth | other
   * @see <a href="https://hl7.org/fhir/R4/valueset-repository-type.html">RepositoryType</a>
   */
  type: RepositoryTypeType;

  /**
   * @description Extensions for type
   */
  _type?: IElement;

  /**
   * @description URI of an external repository which contains further details about the genetics data.
   */
  url?: string;

  /**
   * @description Extensions for url
   */
  _url?: IElement;

  /**
   * @description URI of an external repository which contains further details about the genetics data.
   */
  name?: string;

  /**
   * @description Extensions for name
   */
  _name?: IElement;

  /**
   * @description Id of the variant in this external repository. The server will understand how to use this id to call for more info about datasets in external repository.
   */
  datasetId?: string;

  /**
   * @description Extensions for datasetId
   */
  _datasetId?: IElement;

  /**
   * @description Id of the variantset in this external repository. The server will understand how to use this id to call for more info about variantsets in external repository.
   */
  variantsetId?: string;

  /**
   * @description Extensions for variantsetId
   */
  _variantsetId?: IElement;

  /**
   * @description Id of the read in this external repository.
   */
  readsetId?: string;

  /**
   * @description Extensions for readsetId
   */
  _readsetId?: IElement;
}
