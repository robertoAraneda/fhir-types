import { ICarePlanActivity } from "../backbones";
import { IDomainResource, IElement } from "../base";
import { ICodeableConcept, IIdentifier, IPeriod, IReference } from "../datatypes";
import { CarePlanIntentType, RequestStatusType } from "../types";

export interface ICarePlan extends IDomainResource {
    
    /**
    * @description Business identifiers assigned to this care plan by the performer or other systems which remain constant as the resource is updated and propagates from server to server.
    */
    identifier?: IIdentifier[];

    /**
     * @description The URL pointing to a FHIR-defined protocol, guideline, questionnaire or other definition that is adhered to in whole or in part by this CarePlan.
     */
    instantiatesCanonical?: string[];

    /**
     * @description The URL pointing to an externally maintained protocol, guideline, questionnaire or other definition that is adhered to in whole or in part by this CarePlan.
     */
    instantiatesUri?: string[];

    /**
     * @description A care plan that is fulfilled in whole or in part by this care plan.
     */
    basedOn?: IReference[];

    /**
     * @description Completed or terminated care plan whose function is taken by this new care plan.
     */
    replaces?: IReference[];

    /**
     * @description A larger care plan of which this particular care plan is a component or step.
     */
    partOf?: IReference[];

    /**
     * @description Indicates whether the plan is currently being acted upon, represents future intentions or is now a historical record.
     * @description draft | active | on-hold | revoked | completed | entered-in-error | unknown
     * @see <a href="https://hl7.org/fhir/R4/valueset-request-status.html">RequestStatus</a>
     */
    status: RequestStatusType;

    /**
     * @description Indicates the level of authority/intentionality associated with the care plan and where the care plan fits into the workflow chain.
     * @description proposal | plan | order | option
     * @see <a href="https://hl7.org/fhir/R4/valueset-care-plan-intent.html">CarePlanIntent</a>
     */
    intent: CarePlanIntentType;

    /**
     * @description Identifies what "kind" of plan this is to support differentiation between multiple co-existing plans; e.g. "Home health", "psychiatric", "asthma", "disease management", "wellness plan", etc.
     */
    category?: ICodeableConcept[];

    /**
     * @description Human-friendly name for the CarePlan.
     */
    title?: string;

    /**
     * @description A description of the scope and nature of the plan.
     */
    description?: string;

    /**
     * @description Identifies the patient or group whose intended care is described by the plan.
     */
    subject: IReference;

    /**
     * @description The Encounter during which this CarePlan was created or to which the creation of this record is tightly associated.
     */
    encounter?: IReference;

    /**
     * @description Indicates when the plan did (or is intended to) come into effect and end.
     */
    period?: IPeriod;

    /**
     * @description Represents when this particular CarePlan record was created in the system, which is often a system-generated date.
     */
    created?: string;

    /**
     * @description When populated, the author is responsible for the care plan. The care plan is attributed to the author.
     */
    author?: IReference;

    /**
     * @description Identifies the individual(s) or organization who provided the contents of the care plan.
     */
    contributor?: IReference[];

    /**
     * @description Identifies all people and organizations who are expected to be involved in the care envisioned by this plan.
     */
    careTeam?: IReference[];

    /**
     * @description Identifies the conditions/problems/concerns/diagnoses/etc. whose management and/or mitigation are handled by this plan.
     */
    addresses?: IReference[];

    /**
     * @description Identifies portions of the patient's record that specifically influenced the formation of the plan. These might include comorbidities, recent procedures, limitations, recent assessments, etc.
     */
    supportingInfo?: IReference[];

    /**
     * @description Describes the intended objective(s) of carrying out the CarePlan.
     */
    goal?: IReference[];

    /**
     * @description Identifies a planned action to occur as part of the plan. For example, a medication to be used, lab tests to perform, self-monitoring, education, etc.
     */
    activity?: ICarePlanActivity[];

    // Extensions attributes
    /**
     * @description Extensions for status
     */
    _status?: IElement;

    /**
     * @description Extensions for intent
     */
    _intent?: IElement;

    /**
     * @description Extensions for title
     */
    _title?: IElement;

    /**
     * @description Extensions for description
     */
    _description?: IElement;

    /**
     * @description Extensions for created
     */
    _created?: IElement;
}