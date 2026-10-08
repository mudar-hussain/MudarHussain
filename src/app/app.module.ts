import { importProvidersFrom, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { provideFirebaseApp, initializeApp } from '@angular/fire/app';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';
import { getStorage, provideStorage } from '@angular/fire/storage';
import { getAuth, provideAuth } from '@angular/fire/auth';
import { environment } from 'src/environments/environment';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TerminalComponent } from './components/terminal/terminal.component';
import { TerminalNavComponent } from './components/terminal/terminal-nav/terminal-nav.component';
import { TerminalOutputComponent } from './components/terminal/terminal-output/terminal-output.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { MenuIconComponent } from './shared/menu-icon/menu-icon.component';
import { SafeHtmlPipe } from './shared/pipes/safe-html.pipe';
import { FooterComponent } from './shared/footer/footer.component';
import { RestrictUserActionsDirective } from './directives/restrict-user-actions.directive';
import { ContactComponent } from './components/contact/contact.component';
import { LoadingScreenComponent } from './components/loading-screen/loading-screen.component';
import { HeroSectionComponent } from './components/hero-section/hero-section.component';
import { SkillExperienceComponent } from './components/skill-experience/skill-experience.component';
import { SkillIconComponent } from './components/skill-experience/skill-icon/skill-icon.component';
import { SkillCardComponent } from './components/skill-experience/skill-card/skill-card.component';
import { ExperienceCardComponent } from './components/skill-experience/experience-card/experience-card.component';
import { RotatingSphereComponent } from './components/technical-expertise/rotating-sphere/rotating-sphere.component';
import { ProjectComponent } from './components/project/project.component';
import { TechnicalExpertiseComponent } from './components/technical-expertise/technical-expertise.component';
import { ProjectCardComponent } from './components/project/project-card/project-card.component';
import { ProjectDetailsComponent } from './components/project/project-details/project-details.component';
import { TypewriterComponent } from './components/hero-section/TypewriterComponent';

@NgModule({
  declarations: [
    AppComponent,
    TerminalComponent,
    TerminalNavComponent,
    TerminalOutputComponent,
    NavbarComponent,
    MenuIconComponent,
    SafeHtmlPipe,
    FooterComponent,
    RestrictUserActionsDirective,
    ContactComponent,
    LoadingScreenComponent,
    HeroSectionComponent,
    SkillExperienceComponent,
    SkillIconComponent,
    SkillCardComponent,
    ExperienceCardComponent,
    RotatingSphereComponent,
    ProjectComponent,
    TechnicalExpertiseComponent,
    ProjectCardComponent,
    ProjectDetailsComponent,
    TypewriterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    // AngularFireModule.initializeApp(environment.firebaseConfig),
    // AngularFireAuthModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [
    importProvidersFrom(
    provideFirebaseApp(() => initializeApp(environment.firebaseConfig)),
    provideFirestore(() => getFirestore()),
    provideStorage(() => getStorage()),
    provideAuth(() => getAuth())
  )
],
  bootstrap: [AppComponent]
})
export class AppModule { }
