import { IBackboneElement, IElement } from '../base';
import { IExpression } from '../datatypes';

/**
 * @name IActivityDefinitionDynamicValue
 * @description This resource allows for the definition of some activity to be performed, independent of a particular patient, practitioner, or other performance context.
 * @see <a href="https://hl7.org/fhir/R4/activitydefinition-definitions.html#ActivityDefinition.dynamicValue">ActivityDefinitionDynamicValue</a>
 * @version R4
 * @extends {IBackboneElement}
 * @author Claudia Alarcón Lazo
 */
export interface IActivityDefinitionDynamicValue extends IBackboneElement {
  /**
   * @description The path to the element to be customized. This is the path on the resource that will hold the result of the calculation defined by the expression. The specified path SHALL be a FHIRPath resolveable on the specified target type of the ActivityDefinition, and SHALL consist only of identifiers, constant indexers, and a restricted subset of functions. The path is allowed to contain qualifiers (.) to traverse sub-elements, as well as indexers ([x]) to traverse multiple-cardinality sub-elements (see the [Simple FHIRPath Profile](fhirpath.html#simple) for full details).
   */
  path: string;

  /**
   * @description Extensions for path
   */
  _path?: IElement;

  /**
   * @description An expression specifying the value of the customized element.
   */
  expression: IExpression;
}
