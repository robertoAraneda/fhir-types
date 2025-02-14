import { IElement } from '../base';

/**
 * @name IExpression
 * @description A expression that is evaluated in a specified context and returns a value. The context of use of the expression must specify the context in which the expression is evaluated, and how the result of the expression is used.
 * @see <a href="https://hl7.org/fhir/R4/metadatatypes.html#Expression">Expression</a>
 * @version R4
 * @extends {IElement}
 * @author Claudia Alarcón Lazo
 */
export interface IExpression extends IElement {
  /**
   * @description A brief, natural language description of the condition that effectively communicates the intended semantics.
   */
  description?: string;

  /**
   * @description Extensions for description
   */
  _description?: IElement;

  /**
   * @description A short name assigned to the expression to allow for multiple reuse of the expression in the context where it is defined.
   */
  name?: string;

  /**
   * @description Extensions for name
   */
  _name?: IElement;

  /**
   * @description The media type of the language for the expression.
   */
  language: string;

  /**
   * @description Extensions for language
   */
  _language?: IElement;

  /**
   * @description An expression in the specified language that returns a value.
   */
  expression?: string;

  /**
   * @description Extensions for expression
   */
  _expression?: IElement;

  /**
   * @description A URI that defines where the expression is found.
   */
  reference?: string;

  /**
   * @description Extensions for reference
   */
  _reference?: IElement;
}
