import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HttpClientModule } from '@angular/common/http';
import { HeaderComponent } from './component/header/header.component';
import { FooterComponent } from './component/footer/footer.component';
import { CardSushiBoxComponent } from './component/card-sushi-box/card-sushi-box.component';
import { ContainerCardSushiBoxesComponent } from './component/container-card-sushi-boxes/container-card-sushi-boxes.component';
import { RgpdComponent } from './component/rgpd/rgpd.component';
import { PagePanierComponent } from './component/panier/page-panier.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    CardSushiBoxComponent,
    ContainerCardSushiBoxesComponent,
    RgpdComponent,
    PagePanierComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
