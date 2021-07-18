import { AppComponent } from "./app.component";
import { Stock } from "./model/stock";
import {ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { StockItemComponent } from './stock/stock-item/stock-item.component';
import { By } from '@angular/platform-browser';

describe('AppComponent', () => {

  describe('No angular aware unit tests', () => {
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
  });

  describe('Angular-aware test', ()=> {
    let fixture: ComponentFixture<AppComponent>, component: AppComponent;
    beforeEach(waitForAsync(() => {
      TestBed.configureTestingModule({
        declarations: [
          AppComponent,
          StockItemComponent
        ]
      }).compileComponents();
    }));

    beforeEach(()=> {
      fixture = TestBed.createComponent(AppComponent);
      component = fixture.componentInstance;
      fixture.detectChanges();
    });

    it('should load stock with default values', ()=> {
      const titleEl = fixture.debugElement.query(By.css("h1"));
      expect(titleEl.nativeElement.textContent.trim()).toEqual('Welcome to stock-market!');

      const nameEl = fixture.debugElement.query(By.css('.name'));
      expect(nameEl.nativeElement.textContent).toEqual('Test stock company (TSC)');

      const priceEl = fixture.debugElement.query(By.css('.price.positive'));
      expect(priceEl.nativeElement.textContent).toEqual('$ 35');

      const addToFavoriteBtnEl = fixture.debugElement.query(By.css('button'));
      expect(addToFavoriteBtnEl).toBeDefined();
    });

    it('should toggle stock favorite correctly', ()=> {
      expect(component.stockObj.favorite).toBeFalsy();
      let addToFavoriteBtnEl = fixture.debugElement.query(By.css('button'));
      expect(addToFavoriteBtnEl).toBeDefined();
      addToFavoriteBtnEl.triggerEventHandler('click', null);

      fixture.detectChanges();
      expect(component.stockObj.favorite).toBeTruthy();
      addToFavoriteBtnEl = fixture.debugElement.query(By.css("button"));
      expect(addToFavoriteBtnEl).toBeNull();
    });
  });

})
