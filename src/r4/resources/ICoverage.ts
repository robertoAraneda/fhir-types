import { ICoverageClass, ICoverageCostToBeneficiary } from "../backbones";
import { IDomainResource, IElement } from "../base";
import { ICodeableConcept, IIdentifier, IPeriod, IReference } from "../datatypes";
import { FinancialResourceStatusCodesType } from "../types";

export interface ICoverage extends IDomainResource {

    /**
    * @description A unique identifier assigned to this coverage.
    */
    identifier?: IIdentifier[];

    /**
     * @description The status of the resource instance.
     * @description active | cancelled | draft | entered-in-error
     * @see <a href="https://hl7.org/fhir/R4/valueset-fm-status.html">FinancialResourceStatusCodes</a>
     */
    status: FinancialResourceStatusCodesType;

    /**
    * @description The type of coverage: social program, medical plan, accident coverage (workers compensation, auto), group health or payment by an individual or organization.
    */
    type?: ICodeableConcept;

    /**
     * @description The party who 'owns' the insurance policy.
     */
    policeHolder?: IReference;

    /**
     * @description The party who has signed-up for or 'owns' the contractual relationship to the policy or to whom the benefit of the policy for services rendered to them or their family is due.
     */
    suscriber?: IReference;

    /**
     * @description The insurer assigned ID for the Subscriber.
     */
    suscriberId?: string;

    /**
     * @description The party who benefits from the insurance coverage; the patient when products and/or services are provided.
     */
    beneficary: IReference;

    /**
    * @description A unique identifier for a dependent under the coverage.
    */
    dependent?: string;

    /**
    * @description The relationship of beneficiary (patient) to the subscriber.
    */
    relationship?: ICodeableConcept;

    /**
    * @description Time period during which the coverage is in force. A missing start date indicates the start date isn't known, a missing end date means the coverage is continuing to be in force.
    */
    period?: IPeriod;

    /**
    * @description The program or plan underwriter or payor including both insurance and non-insurance agreements, such as patient-pay agreements.
    */
    payor: IReference[];

    /**
    * @description Additional information regarding the plan.
    */
    class?: ICoverageClass[];

    /**
     * @description The order of applicability of this coverage relative to other coverages which are currently in force.
     */
    order?: number;

    /**
     * @description The insurer-specific identifier for the insurer-defined network of providers to which the beneficiary may seek treatment which will be covered at the 'in-network' rate, otherwise 'out of network' terms and conditions apply.
     */
    network?: string;

    /**
     * @description A suite of codes indicating the cost category and associated amount which have been detailed in the policy and may have been included on the health card.
     */
    costToBeneficiary?: ICoverageCostToBeneficiary[];

    /**
     * @description When 'subrogation=true' this insurance instance has been included not for adjudication but to provide insurers with the details to recover costs.
     */
    subrogation?: boolean;

    /**
     * @description The policy(s) which constitute this insurance coverage.
     */
    contract?: IReference[];

    // Extensions attributes
    /**
     * @description Extensions for suscriberId
     */
    _suscriberId?: IElement;

    /**
     * @description Extensions for dependent
     */
    _dependent?: IElement;

    /**
     * @description Extensions for order
     */
    _order?: IElement;

    /**
     * @description Extensions for network
     */
    _network?: IElement;

    /**
     * @description Extensions for subrogation
     */
    _subrogation?: IElement;
} 