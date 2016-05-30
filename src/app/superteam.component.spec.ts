import {
  beforeEachProviders,
  describe,
  expect,
  it,
  inject
} from '@angular/core/testing';
import { SuperteamAppComponent } from '../app/superteam.component';

beforeEachProviders(() => [SuperteamAppComponent]);

describe('App: Superteam', () => {
  it('should create the app',
      inject([SuperteamAppComponent], (app: SuperteamAppComponent) => {
    expect(app).toBeTruthy();
  }));

  it('should have as title \'superteam works!\'',
      inject([SuperteamAppComponent], (app: SuperteamAppComponent) => {
    expect(app.title).toEqual('superteam works!');
  }));
});
