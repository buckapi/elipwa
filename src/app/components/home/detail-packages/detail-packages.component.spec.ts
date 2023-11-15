import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailPackagesComponent } from './detail-packages.component';

describe('DetailPackagesComponent', () => {
  let component: DetailPackagesComponent;
  let fixture: ComponentFixture<DetailPackagesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetailPackagesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DetailPackagesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
