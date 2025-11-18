import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CharacterAppComponent } from './character-add.component';

describe('CharacterAppComponent', () => {
  let component: CharacterAppComponent;
  let fixture: ComponentFixture<CharacterAppComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CharacterAppComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CharacterAppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
