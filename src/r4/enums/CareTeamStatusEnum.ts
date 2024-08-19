/**
 * @name CareTeamStatus
 * @description Indicates the current state of the care team.
 * @description proposed | active | suspended | inactive | entered-in-error
 * @see <a href="https://hl7.org/fhir/R4/valueset-care-team-status.html">CareTeamStatus</a>
 * @version R4
 * @author Claudia Alarcón Lazo
 */
export enum CareTeamStatusEnum {
  PROPOSED = 'proposed',
  ACTIVE = 'active',
  SUSPENDED = 'suspended',
  INACTIVE = 'inactive',
  ENTERED_IN_ERROR = 'entered-in-error',
}
