import { IElement } from "../../r4/base";
import { IEpisodeOfCareDiagnosis, IEpisodeOfCareStatusHistory } from "../backbones";
import { IDomainResource } from "../base";
import { ICodeableConcept, IIdentifier, IPeriod, IReference } from "../datatypes";
import { EpisodeOfCareStatusEnum } from "../enums";
import { EpisodeOfCareStatusType } from "../types";


type EpisodeOfCareStatus = EpisodeOfCareStatusEnum | EpisodeOfCareStatusType;
/**
 * @name IEpisodeOfCare
 * @description An association of a Patient with an Organization and Healthcare Provider(s) for a period of time that the Organization assumes some level of responsibility
 * @see <a href="https://hl7.org/fhir/R4/episodeofcare.html">EpisodeOfCare</a>
 * @example ```json
 *  {
      "resourceType": "EpisodeOfCare",
      "id": "example",
      "identifier": [
        {
          "system": "http://example.org/sampleepisodeofcare-identifier",
          "value": "123"
        }
      ],
      "status": "active",
      "type": [
        {
          "coding": [
            {
              "system": "http://terminology.hl7.org/CodeSystem/episodeofcare-type",
              "code": "hacc",
              "display": "Home and Community Care"
            }
          ]
        }
      ],
      "diagnosis": [
        {
          "condition": {
            "reference": "Condition/stroke"
          },
          "rank": 1
        }
      ],
      "patient": {
        "reference": "Patient/example"
      },
      "managingOrganization": {
        "reference": "Organization/hl7"
      },
      "period": {
        "start": "2014-09-01"
      },
      "referralRequest": [
        {
          "display": "Referral from Example Aged Care Services"
        }
      ],
      "careManager": {
        "reference": "Practitioner/14",
        "display": "Amanda Assigned"
      },
      "team": [
        {
          "reference": "CareTeam/example",
          "display": "example care team"
        }
      ],
      "account": [
        {
          "reference": "Account/example",
          "display": "example account"
        }
      ]
    }
  ```
  @version R4
  @extends IDomainResource
 */
export interface IEpisodeOfCare extends IDomainResource {

  /**
   * @description 	Business Identifier(s) relevant for this EpisodeOfCare
   */
  identifier?: IIdentifier[];

  /**
   * @description planned | waitlist | active | onhold | finished | cancelled | entered-in-error
   * @see <a href="https://hl7.org/fhir/R4/valueset-episode-of-care-status.html">EpisodeOfCareDiagnosis</a>
   */
  status: EpisodeOfCareStatus;

  /**
   * @description Past list of status codes (the current status may be included to cover the start date of the status)
   */
  statusHistory?: IEpisodeOfCareStatusHistory[];

  /**
   * @description Type/class  - e.g. specialist referral, disease management
   */
  type?: ICodeableConcept[];

  /**
   * @description The list of diagnosis relevant to this episode of care
   */
  diagnosis?: IEpisodeOfCareDiagnosis[];

  /**
   * @description The patient who is the focus of this episode of care
   */
  patient: IReference;

  /**
   * @description Organization that assumes care
   */
  managingOrganization?: IReference;

  /**
   * @description Interval during responsibility is assumed
   */
  period?: IPeriod;

  /**
   * @description Originating Referral Request(s)
   */
  referralRequest?: IReference[];

  /**
   * @description Care manager/care coordinator for the patient
   */
  careManager?: IReference;

  /**
   * @description Other practitioners facilitating this episode of care
   */
  team?: IReference[];

  /**
   * @description The set of accounts that may be used for billing for this EpisodeOfCare
   */
  account?: IReference[];

  /**
   * @description Extension for status
   */
  _status?: IElement;
}