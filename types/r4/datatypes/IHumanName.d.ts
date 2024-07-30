import { IPeriod } from './IPeriod';
import { IElement } from '../base';
import { NameUseEnum } from '../enums';
import { NameUseType } from '../types';
declare type HumanNameUse = NameUseEnum | NameUseType;
/**
 * @summary FHIR R4
 * @description Name of a human or other living entity - parts and usage
 * @property {NameUseEnum} use - usual | official | temp | nickname | anonymous | old | maiden
 * @property {string} text - Text representation of the full name
 * @property {string} family - Family name (often called 'Surname')
 * @property {string[]} given - Given names (not always 'first'). Includes middle names
 * @property {string[]} prefix - Parts that come before the name
 * @property {string[]} suffix - Parts that come after the name
 * @property {IPeriod} period - Time period when name was/is in use
 * @property {IElement} _use - Extension of use
 * @property {IElement} _text - Extension of text
 * @property {IElement} _family - Extension of family
 * @property {IElement[]} _given - Extension of given
 * @property {IElement[]} _prefix - Extension of prefix
 * @property {IElement[]} _suffix - Extension of suffix
 * @see http://hl7.org/fhir/R4/datatypes.html#HumanName http://hl7.org/fhir/R4/datatypes.html#HumanName
 * @author Roberto Araneda
 */
export interface IHumanName extends IElement {
    /**
     * @description usual | official | temp | nickname | anonymous | old | maiden
     */
    use?: HumanNameUse;
    /**
     * @description Text representation of the full name
     */
    text?: string;
    /**
     * @description Family name (often called 'Surname')
     */
    family?: string;
    /**
     * @description Given names (not always 'first'). Includes middle names
     */
    given?: string[];
    /**
     * @description Parts that come before the name
     */
    prefix?: string[];
    /**
     * @description Parts that come after the name
     */
    suffix?: string[];
    /**
     * @description Time period when name was/is in use
     */
    period?: IPeriod;
    /**
     * @description Extension of use
     */
    _use?: IElement;
    /**
     * @description Extension of text
     */
    _text?: IElement;
    /**
     * @description Extension of family
     */
    _family?: IElement;
    /**
     * @description Extension of given
     */
    _given?: IElement[];
    /**
     * @description Extension of prefix
     */
    _prefix?: IElement[];
    /**
     * @description Extension of suffix
     */
    _suffix?: IElement[];
}
export {};
