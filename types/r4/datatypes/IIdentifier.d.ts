import { IElement } from '../base';
import { IPeriod } from './IPeriod';
import { ICodeableConcept } from './ICodeableConcept';
import { IReference } from './IReference';
import { IdentifierUseEnum } from '../enums';
import { IdentifierUseType } from '../types';
declare type IdentifierUse = IdentifierUseEnum | IdentifierUseType;
/**
 * @summary FHIR R4
 * @description A numeric or alphanumeric string that is associated with a single object or entity within a given system. Typically, identifiers are used to connect content in resources to external content available in other frameworks or protocols. Identifiers are associated with objects and may be changed or retired due to human or system process and errors.
 * @property {IdentifierUseEnum | IdentifierUseType} use - 	usual | official | temp | secondary | old (If known). Binding: IdentifierUse (Required)
 * @property {ICodeableConcept} type - Description of identifier
 * @property {string} system - The namespace for the identifier value
 * @property {string} value - The value that is unique
 * @property {IPeriod} period - Time period when id is/was valid for use
 * @property {IReference} assigner - Organization that issued id (may-be just text)
 * @property {IElement} _use - Extension of use
 * @property {IElement} _system - Extension of system
 * @property {IElement} _value - Extension of value
 * @see http://hl7.org/fhir/R4/datatypes.html#Identifier http://hl7.org/fhir/R4/datatypes.html#Identifier
 * @author Roberto Araneda
 * @example JSON Template for Identifier
 * {
 *   // from Element: extension
 *   "use" : "<code>", // usual | official | temp | secondary | old (If known)
 *   "type" : { CodeableConcept }, // Description of identifier
 *   "system" : "<uri>", // The namespace for the identifier value
 *   "value" : "<string>", // I The value that is unique
 *   "period" : { Period }, // Time period when id is/was valid for use
 *   "assigner" : { Reference(Organization) } // Organization that issued id (may-be just text)
 * }
 */
export interface IIdentifier extends IElement {
    /**
     * @description usual | official | temp | secondary | old (If known)
     */
    use?: IdentifierUse;
    /**
     * @description Description of identifier
     */
    type?: ICodeableConcept;
    /**
     * @description The namespace for the identifier value
     */
    system?: string;
    /**
     * @description The value that is unique
     */
    value?: string;
    /**
     * @description Time period when id is/was valid for use
     */
    period?: IPeriod;
    /**
     * @description Organization that issued id (may-be just text)
     */
    assigner?: IReference;
    /**
     * @description Extension of use
     */
    _use?: IElement;
    /**
     * @description Extension of system
     */
    _system?: IElement;
    /**
     * @description Extension of value
     */
    _value?: IElement;
}
export {};
