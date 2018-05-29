export class VehicleCreation {
  constructor(
    public brand: string,
    public model: string,
    public type: string,
    public registrationNumber: string,
    public productionYear: string,
    public active: boolean,
    public note: string,
    public deleted: boolean
  ){}
}
