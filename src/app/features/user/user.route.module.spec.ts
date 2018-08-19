import { UserRouteModule } from './user.route.module';

describe('UserRouteModule', () => {
  let userRouteModule: UserRouteModule;

  beforeEach(() => {
    userRouteModule = new UserRouteModule();
  });

  it('should create an instance', () => {
    expect(userRouteModule).toBeTruthy();
  });
});
