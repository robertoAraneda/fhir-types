import { IVisionPrescriptionLensSpecification } from '../backbones';
import { IDomainResource, IElement } from '../base';
import { IIdentifier, IReference } from '../datatypes';
import { FmStatusType } from '../types';

/**
 * @name IVisionPrescription
 * @description An authorization for the provision of glasses and/or contact lenses to a patient.
 * @see <a href="https://hl7.org/fhir/R4/visionprescription.html">VisionPrescription</a>
 * @version R4
 * @extends {DomainResource}
 * @author Claudia Alarcón Lazo
 */
export interface IVisionPrescription extends IDomainResource {
  /**
   * @description A unique identifier assigned to this vision prescription.
   */
  identifier?: IIdentifier[];

  /**
   * @description The status of the resource instance.
   * @description active | cancelled | draft | entered-in-error
   * @see <a href="https://hl7.org/fhir/R4/valueset-fm-status.html">FmStatus</a>
   */
  status: FmStatusType;

  /**
   * @description Extensions for status
   */
  _status?: IElement;

  /**
   * @description The date this resource was created.
   */
  created: string;

  /**
   * @description Extensions for created
   */
  _created?: IElement;

  /**
   * @description A resource reference to the person to whom the vision prescription applies.
   */
  patient: IReference;

  /**
   * @description A reference to a resource that identifies the particular occurrence of contact between patient and health care provider during which the prescription was issued.
   */
  encounter?: IReference;

  /**
   * @description The date (and perhaps time) when the prescription was written.
   */
  dateWritten: string;

  /**
   * @description Extensions for dateWritten
   */
  _dateWritten?: IElement;

  /**
   * @description The healthcare professional responsible for authorizing the prescription.
   */
  prescriber: IReference;

  /**
   * @description Contain the details of  the individual lens specifications and serves as the authorization for the fullfillment by certified professionals.
   */
  lensSpecification: IVisionPrescriptionLensSpecification[];
}
