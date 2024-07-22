import * as DatatypesR4 from './r4/datatypes/index';
import * as DatatypesR5 from "./r5/datatypes/index";

namespace FHIR {
  export namespace R4 {
    export namespace Datatypes {
      export import IAddress = DatatypesR4.IAddress;
    }
  }
  export namespace R5 {
    export namespace Datatypes {
      export import IAddress = DatatypesR5.IAddress;
    }
  }
}

export { FHIR };

