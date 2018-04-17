import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModuleAComponent } from './module-a.component';

describe('ModuleAComponent', () => {
  let component: ModuleAComponent;
  let fixture: ComponentFixture<ModuleAComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModuleAComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModuleAComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
