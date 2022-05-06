// - Create interface for the workload json
interface WorkLoad {
    Nose: string;
    Station: string;
    BOW: Bow[];
    CheckType: string;
  }
  
  interface Bow {
    Nose: string;
    ATA: string;
    BOWTYPE: string;
    COMMENTIND: string;
    Priority: string;
    Carrier: string;
    CRITUPGRADE: boolean;
    Created: string;
    EMPLOYEENUMBER: string;
    FLEET: string;
    IDENTIFY: string;
    ID: number,
    MEL: string;
    MENUMBER: string;
    Modified: string;
    REF: string;
    TASKDESCRIPTION: string;
    TOTALHRS: number;
    CRIT: number;
    partsData: PartsData[];
  }
  
  interface PartsData {
    CPN: string;
    Total: number;
    Required: number;
  }
  
  // - Create types
  type Developer = {
    name: string;
    skill: string;
    email: string;
    phone: string;
  }
  
  
  // - Create simple person class, that accepts the persons first name
  class Person {
    firstName: string;
  
    constructor(name: string) {
      this.firstName = name;
    }
  }
  
  // - Create a Mecahnic class that exstends the above person class and has a field 'title' set to 'AMT'
  class Mecahnic extends Person {
    private _title: string = '';
    constructor(name: string) {
      super(name);
    }
  
    setTitle(value: string) {
      this._title = value;
    }
    getTitle() {
      return this._title;
    }
  }
  
  let mecahnic = new Mecahnic("Susie");
  mecahnic.setTitle("AMT");
  console.log(mecahnic.getTitle());
  