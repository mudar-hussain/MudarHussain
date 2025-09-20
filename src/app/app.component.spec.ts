import { Component } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';

@Component({ selector: 'app-navbar', template: '' }) class NavbarStub {}
@Component({ selector: 'app-hero-section', template: '' }) class HeroStub {}
@Component({ selector: 'app-terminal', template: '' }) class TerminalStub {}
@Component({ selector: 'app-technical-expertise', template: '' }) class TechnicalExpertiseStub {}
@Component({ selector: 'app-skill-experience', template: '' }) class SkillExperienceStub {}
@Component({ selector: 'app-project', template: '' }) class ProjectStub {}
@Component({ selector: 'app-contact', template: '' }) class ContactStub {}
@Component({ selector: 'app-footer', template: '' }) class FooterStub {}
@Component({ selector: 'router-outlet', template: '' }) class RouterOutlet {}

describe('AppComponent', () => {
  let component: AppComponent;
  let fixture: ComponentFixture<AppComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        AppComponent,
        NavbarStub,
        HeroStub,
        TerminalStub,
        TechnicalExpertiseStub,
        SkillExperienceStub,
        ProjectStub,
        ContactStub,
        FooterStub,
        RouterOutlet
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(AppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create the app', () => {
    expect(component).toBeTruthy();
  });

  it('should have title "Mudar Hussain"', () => {
    expect(component.title).toEqual('Mudar Hussain');
  });


  it('should update isWindow on resize', () => {
    const mockEvent = { target: { innerWidth: 500 } };
    component.onResize(mockEvent as any);
    expect(component.isWindow).toBeFalse();

    const mockEvent2 = { target: { innerWidth: 700 } };
    component.onResize(mockEvent2 as any);
    expect(component.isWindow).toBeTrue();
  });
});
