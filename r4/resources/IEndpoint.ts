import { EndpointStatusEnum } from '../../enums';
import { EndpointStatusType } from '../../types';
import { ICodeableConcept, ICoding, IContactPoint, IIdentifier, IPeriod, IReference } from '../datatypes';
import { IDomainResource, IElement } from '../base';

/**
 * @resume FHIR R4 Endpoint Resource
 */
export interface IEndpoint extends IDomainResource {
  resourceType: 'Endpoint';
  /**
   * Identifies this endpoint across multiple systems.
   */
  identifier?: IIdentifier[];
  /**
   * active | suspended | error | off | test.
   * @summary Required field
   */
  status?: EndpointStatusEnum | EndpointStatusType;

  /**
   * Extension for status
   */
  _status?: IElement;
  /**
   * Protocol/Profile/Standard to be used with this endpoint connection.
   * @summary Required field
   */
  connectionType: ICoding;
  /**
   * A name that this endpoint can be identified by.
   */
  name?: string;

  /**
   * Extension for name
   */
  _name?: IElement;

  /**
   * Organization that manages this endpoint (might not be the organization that exposes the endpoint).
   */
  managingOrganization?: IReference;
  /**
   * Contact details for source (e.g. troubleshooting).
   */
  contact?: IContactPoint[];
  /**
   * The interval during which the endpoint is expected to be operational.
   */
  period?: IPeriod;
  /**
   * Set of payloads that are provided by this endpoint.
   * @summary Required field
   */
  payloadType: ICodeableConcept[];

  /**
   * Mimetype to send. If not specified, the content could be anything (including no payload, if the connectionType defined this):
   */
  payloadMimeType?: string[];

  /**
   * Extension for payloadMimeType
   */
  _payloadMimeType?: IElement[];
  /**
   * The technical base address for connecting to this endpoint.
   * @summary Required field
   */
  address?: string;

  /**
   * Extension for address
   */
  _address?: IElement;
  /**
   * Usage depends on the channel type.
   */
  header?: string[];

  /**
   * Extension for header
   */
  _header?: IElement[];
}
