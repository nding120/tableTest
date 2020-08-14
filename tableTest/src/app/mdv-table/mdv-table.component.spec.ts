import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MdvTableComponent } from './mdv-table.component';

describe('MdvTableComponent', () => {
  let component: MdvTableComponent;
  let fixture: ComponentFixture<MdvTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MdvTableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MdvTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
