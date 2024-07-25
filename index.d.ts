import * as DatatypesR4 from './r4/datatypes/index';
import * as DatatypesR5 from "./r5/datatypes/index";
import * as BackbonesR4 from './r4/backbones/index';
import * as EnumsR4 from './r4/enums/index';
import * as TypesR4 from './r4/types/index';
import * as BaseR4 from './r4/base/index';
import * as ResourceR4 from './r4/resources/index';

declare namespace FHIR {
  export namespace R4 {
    export namespace Datatypes {
      export import IAddress = DatatypesR4.IAddress;
    }

    export namespace Backbones {
      export import IEpisodeOfCareDiagnosis = BackbonesR4.IEpisodeOfCareDiagnosis;
      export import IEpisodeOfCareStatusHistory = BackbonesR4.IEpisodeOfCareStatusHistory;
      export import IPatientLink = BackbonesR4.IPatientLink;
      export import IPatientContact = BackbonesR4.IPatientContact
    }

    export namespace Enums {
      export import AdministrativeGenderEnum = EnumsR4.AdministrativeGenderEnum;
      export import EpisodeOfCareStatusEnum = EnumsR4.EpisodeOfCareStatusEnum;
      export import EpisodeOfCareStatusHistoryCodeEnum = EnumsR4.EpisodeOfCareStatusHistoryCodeEnum;
      export import LinkTypeEnum = EnumsR4.LinkTypeEnum;
    }

    export namespace Types {
      export import AdministrativeGenderType = TypesR4.AdministrativeGenderType;
      export import EpisodeOfCareStatusHistoryCodeType = TypesR4.EpisodeOfCareStatusHistoryCodeType;
      export import LinkTypeType = TypesR4.LinkTypeType;
    }

    export namespace Base {
      export import IBackboneElement = BaseR4.IBackboneElement;
      export import IElement = BaseR4.IElement;
    }

    export namespace Resource {
      export import IAccount = ResourceR4.IAccount;
      export import IEpisodeOfCare = ResourceR4.IEpisodeOfCare;
    }
  }
  export namespace R5 {
    export namespace Datatypes {
      export import IAddress = DatatypesR5.IAddress;
    }
  }
}

export { FHIR };

