import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { Details2Page } from './details2.page';

describe('Details2Page', () => {
  let component: Details2Page;
  let fixture: ComponentFixture<Details2Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Details2Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(Details2Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
