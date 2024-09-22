/**
 * @name RepositoryType
 * @description Type for access of external URI.
 * @description directlink | openapi | login | oauth | other
 * @see <a href="https://hl7.org/fhir/R4/valueset-repository-type.html">RepositoryType</a>
 * @version R4
 * @author Claudia Alarcón Lazo
 */
export enum RepositoryTypeEnum {
  DIRECTLINK = 'directlink',
  OPENAPI = 'openapi',
  LOGIN = 'login',
  OAUTH = 'oauth',
  OTHER = 'other',
}
