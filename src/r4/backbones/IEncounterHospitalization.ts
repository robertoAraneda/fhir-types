import { IBackboneElement } from "../base";
import { ICodeableConcept, IIdentifier, IReference } from "../datatypes";

export interface IEncounterHospitalization extends IBackboneElement {
    
    /**
    * @description Pre-admission identifier.
    */
    preAdmissionIdentifier?: IIdentifier;

    /**
    * @description The location/organization from which the patient came before admission.
    */
    origin?: IReference;

    /**
    * @description From where patient was admitted (physician referral, transfer).
    */
    admitSource?: ICodeableConcept;

    /**
    * @description Whether this hospitalization is a readmission and why if known.
    */
    reAdmission?: ICodeableConcept;

    /**
    * @description Diet preferences reported by the patient.
    */
    dietPreference?: ICodeableConcept[];

    /**
    * @description Special courtesies (VIP, board member).
    */
    specialCourtesy?: ICodeableConcept[];

    /**
    * @description Any special requests that have been made for this hospitalization encounter, such as the provision of specific equipment or other things.
    */
    specialArrangement?: ICodeableConcept[];

    /**
    * @description Location/organization to which the patient is discharged.
    */
    destination?: IReference;

    /**
    * @description Category or kind of location after discharge.
    */
    dischargeDisposition?: ICodeableConcept;
}