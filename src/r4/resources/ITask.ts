import { ITaskInput, ITaskOutput, ITaskRestriction } from '../backbones';
import { IDomainResource, IElement } from '../base';
import { IAnnotation, ICodeableConcept, IIdentifier, IPeriod, IReference } from '../datatypes';
import { RequestPriorityType, TaskIntentType, TaskStatusType } from '../types';

export interface ITask extends IDomainResource {
  /**
   * @description The business identifier for this task.
   */
  identifier?: IIdentifier[];

  /**
   * @description The URL pointing to a FHIR-defined protocol, guideline, orderset or other definition that is adhered to in whole or in part by this Task.
   */
  instantiatesCanonical?: string;

  /**
   * @description The URL pointing to an externally maintained protocol, guideline, orderset or other definition that is adhered to in whole or in part by this Task.
   */
  instantesUri?: string;

  /**
   * @description BasedOn refers to a higher-level authorization that triggered the creation of the task. It references a "request" resource such as a ServiceRequest, MedicationRequest, ServiceRequest, CarePlan, etc. which is distinct from the "request" resource the task is seeking to fulfill. This latter resource is referenced by FocusOn. For example, based on a ServiceRequest (= BasedOn), a task is created to fulfill a procedureRequest ( = FocusOn ) to collect a specimen from a patient.
   */
  basedOn?: IReference[];

  /**
   * @description An identifier that links together multiple tasks and other requests that were created in the same context.
   */
  groupIdentifier?: IIdentifier;

  /**
   * @description Task that this particular task is part of.
   */
  partOf?: IReference[];

  /**
   * @description The current status of the task.
   * @description 'draft' | 'requested' | 'received' | 'accepted' | 'rejected' | 'ready' | 'cancelled' | 'in-progress' | 'on-hold' | 'failed' | 'completed' | 'entered-in-error'
   * @see <a href="https://hl7.org/fhir/R4/valueset-task-status.html">TaskStatus</a>
   */
  status: TaskStatusType;

  /**
   * @description An explanation as to why this task is held, failed, was refused, etc.
   */
  statusReason?: ICodeableConcept;

  /**
   * @description Contains business-specific nuances of the business state.
   */
  businessStatus?: ICodeableConcept;

  /**
   * @description Indicates the "level" of actionability associated with the Task, i.e. i+R[9]Cs this a proposed task, a planned task, an actionable task, etc.
   * @description 'unknown' | 'proposal' | 'plan' | 'order' | 'original-order' | 'reflex-order' | 'filler-order' | 'instance-order' | 'option'
   * @see <a href="https://hl7.org/fhir/R4/valueset-task-intent.html">TaskIntent</a>
   */
  intent: TaskIntentType;

  /**
   * @description Indicates how quickly the Task should be addressed with respect to other requests.
   */
  priority?: RequestPriorityType;

  /**
   * @description A name or code (or both) briefly describing what the task involves.
   */
  code?: ICodeableConcept;

  /**
   * @description A free-text description of what is to be performed.
   */
  description?: string;

  /**
   * @description The request being actioned or the resource being manipulated by this task.
   */
  focus?: IReference;

  /**
   * @description The entity who benefits from the performance of the service specified in the task (e.g., the patient).
   */
  for?: IReference;

  /**
   * @description The healthcare event  (e.g. a patient and healthcare provider interaction) during which this task was created.
   */
  encounter?: IReference;

  /**
   * @description Identifies the time action was first taken against the task (start) and/or the time final action was taken against the task prior to marking it as completed (end).
   */
  executionPeriod?: IPeriod;

  /**
   * @description The date and time this task was created.
   */
  authoredOn?: string;

  /**
   * @description The date and time of last modification to this task.
   */
  lastModified?: string;

  /**
   * @description The creator of the task.
   */
  requester?: IReference;

  /**
   * @description The kind of participant that should perform the task.
   */
  performerType?: ICodeableConcept[];

  /**
   * @description Individual organization or Device currently responsible for task execution.
   */
  owner?: IReference;

  /**
   * @description Principal physical location where the this task is performed.
   */
  location?: IReference;

  /**
   * @description A description or code indicating why this task needs to be performed.
   */
  reasonCode?: ICodeableConcept;

  /**
   * @description A resource reference indicating why this task needs to be performed.
   */
  reasonReference?: IReference;

  /**
   * @description Insurance plans, coverage extensions, pre-authorizations and/or pre-determinations that may be relevant to the Task.
   */
  insurance?: IReference[];

  /**
   * @description Free-text information captured about the task as it progresses.
   */
  note?: IAnnotation[];

  /**
   * @description Links to Provenance records for past versions of this Task that identify key state transitions or updates that are likely to be relevant to a user looking at the current version of the task.
   */
  relevantHistory?: IReference[];

  /**
   * @description If the Task.focus is a request resource and the task is seeking fulfillment (i.e. is asking for the request to be actioned), this element identifies any limitations on what parts of the referenced request should be actioned.
   */
  restriction?: ITaskRestriction;

  /**
   * @description Additional information that may be needed in the execution of the task.
   */
  input?: ITaskInput[];

  /**
   * @description Outputs produced by the Task.
   */
  output?: ITaskOutput[];

  // Extensions attributes
  /**
   * @description Extensions for instantiatesCanonical
   */
  _instantiatesCanonical?: IElement;

  /**
   * @description Extensions for instantiatesUri
   */
  _instantiatesUri?: IElement;

  /**
   * @description Extensions for status
   */
  _status?: IElement;

  /**
   * @description Extensions for intent
   */
  _intent?: IElement;

  /**
   * @description Extensions for priority
   */
  _priority?: IElement;

  /**
   * @description Extensions for description
   */
  _description?: IElement;

  /**
   * @description Extensions for authoredOn
   */
  _authoredOn?: IElement;

  /**
   * @description Extensions for lastModified
   */
  _lastModified?: IElement;
}
