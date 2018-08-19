import { AirportRouteModule } from './airport.route.module';

describe('AirportRouteModule', () => {
  let airportRouteModule: AirportRouteModule;

  beforeEach(() => {
    airportRouteModule = new AirportRouteModule();
  });

  it('should create an instance', () => {
    expect(airportRouteModule).toBeTruthy();
  });
});
