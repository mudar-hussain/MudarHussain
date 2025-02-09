import { importProvidersFrom, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { provideFirebaseApp, initializeApp } from '@angular/fire/app';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';
import { getStorage, provideStorage } from '@angular/fire/storage';
import { getAuth, provideAuth } from '@angular/fire/auth';
import { AngularFireModule } from '@angular/fire/compat';
import { AngularFireAuthModule } from '@angular/fire/compat/auth';
import { environment } from 'src/environments/environment.prod';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TerminalComponent } from './terminal/terminal.component';
import { TerminalNavComponent } from './terminal/terminal-nav/terminal-nav.component';
import { TerminalOutputComponent } from './terminal/terminal-output/terminal-output.component';
import { FormsModule } from '@angular/forms';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { MenuIconComponent } from './shared/menu-icon/menu-icon.component';
import { SafeHtmlPipe } from './shared/pipes/safe-html.pipe';
import { FooterComponent } from './shared/footer/footer.component';
import { RestrictUserActionsDirective } from './directives/restrict-user-actions.directive';
import { ContactComponent } from './components/contact/contact.component';
import { LoadingScreenComponent } from './components/loading-screen/loading-screen.component';
import { HeroSectionComponent } from './components/hero-section/hero-section.component';
import { SkillExperienceComponent } from './components/skill-experience/skill-experience.component';
import { SkillIconComponent } from './components/skill-icon/skill-icon.component';
import { SkillCardComponent } from './components/skill-card/skill-card.component';
import { ExperienceCardComponent } from './components/experience-card/experience-card.component';

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
    ExperienceCardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireAuthModule,
    FormsModule
  ],
  providers: [
    importProvidersFrom(
    provideFirebaseApp(() => initializeApp(environment.firebaseConfig)),
    provideFirestore(() => getFirestore()),
    provideStorage(() => getStorage()),
    provideAuth(() => getAuth())
  )],
  bootstrap: [AppComponent]
})
export class AppModule { }
