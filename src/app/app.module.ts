import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TerminalComponent } from './terminal/terminal.component';
import { TerminalNavComponent } from './terminal/terminal-nav/terminal-nav.component';
import { TerminalOutputComponent } from './terminal/terminal-output/terminal-output.component';
import { FormsModule } from '@angular/forms';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { MenuIconComponent } from './shared/menu-icon/menu-icon.component';
import { SafeHtmlPipe } from './shared/pipes/safe-html.pipe';

@NgModule({
  declarations: [
    AppComponent,
    TerminalComponent,
    TerminalNavComponent,
    TerminalOutputComponent,
    NavbarComponent,
    MenuIconComponent,
    SafeHtmlPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
