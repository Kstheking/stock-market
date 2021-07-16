import { AppComponent } from "./app.component";
import { Stock } from "./model/stock";

describe('AppComponent', () => {

  it('should have stock instantiated on ngInit', () => {
    const appComponent = new AppComponent();
    expect(appComponent.stockObj).toBeUndefined();
    appComponent.ngOnInit();
    expect(appComponent.stockObj).toEqual(new Stock('Test stock company', 'TSC', 35, 30));
  });

  it('should toggle stock favorite ', () => {
    const appComponent = new AppComponent();
    appComponent.ngOnInit();
    expect(appComponent.stockObj.favorite).toBeFalsy();
    appComponent.toggly(new Stock('Test', 'TST', 54, 55));
    expect(appComponent.stockObj.favorite).toBeTruthy();
    appComponent.toggly(new Stock('Test', 'TST', 54, 55));
    expect(appComponent.stockObj.favorite).toBeFalsy();
  });

})

// import { TestBed } from '@angular/core/testing';
// import { RouterTestingModule } from '@angular/router/testing';
// import { AppComponent } from './app.component';

// describe('AppComponent', () => {
//   beforeEach(async () => {
//     await TestBed.configureTestingModule({
//       imports: [
//         RouterTestingModule
//       ],
//       declarations: [
//         AppComponent
//       ],
//     }).compileComponents();
//   });

//   it('should create the app', () => {
//     const fixture = TestBed.createComponent(AppComponent);
//     const app = fixture.componentInstance;
//     expect(app).toBeTruthy();
//   });

//   it(`should have as title 'stock-market'`, () => {
//     const fixture = TestBed.createComponent(AppComponent);
//     const app = fixture.componentInstance;
//     expect(app.title).toEqual('stock-market');
//   });

//   it('should render title', () => {
//     const fixture = TestBed.createComponent(AppComponent);
//     fixture.detectChanges();
//     const compiled = fixture.nativeElement;
//     expect(compiled.querySelector('.content span').textContent).toContain('stock-market app is running!');
//   });
// });
