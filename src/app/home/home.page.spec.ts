import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';
import { Component } from '@angular/core';
import { MenuController } from '@ionic/angular';

import { HomePage } from './home.page';

describe('HomePage', () => {
  let component: HomePage;
  let fixture: ComponentFixture<HomePage>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ HomePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(HomePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  interface MenuCustomEvent<T = any> extends CustomEvent {
    detail: T;
    target: HTMLIonMenuElement;
  }
  @Component({
    selector: 'menu-example',
    templateUrl: 'menu-example.html',
    styleUrls: ['./menu-example.css'],
  })
  export class MenuExample {
  
  constructor(private menu: MenuController) { }
  
    openFirst() {
      this.menu.enable(true, 'first');
      this.menu.open('first');
    }
  
    openEnd() {
      this.menu.open('end');
    }
  
    openCustom() {
      this.menu.enable(true, 'custom');
      this.menu.open('custom');
    }
});
