import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import {ReactiveFormsModule} from '@angular/forms';

import { AppComponent } from './app.component';
import { PropertybindingComponent } from './propertybinding/propertybinding.component';
import { EventbindingComponent } from './eventbinding/eventbinding.component';
import { TwowaydatabindingComponent } from './twowaydatabinding/twowaydatabinding.component';
import { ClassbindingComponent } from './classbinding/classbinding.component';
import { InputComponent } from './input/input.component';
import { OutputComponent } from './output/output.component';
import { NgifComponent } from './ngif/ngif.component';
import { NgforComponent } from './ngfor/ngfor.component';
import { NgswitchComponent } from './ngswitch/ngswitch.component';
import { LifecycleComponent } from './lifecycle/lifecycle.component';
import { FormularioComponent } from './formulario/formulario.component';
import { FormularioreativoComponent } from './formularioreativo/formularioreativo.component';
import { FormularioreativogrupoComponent } from './formularioreativogrupo/formularioreativogrupo.component';

@NgModule({
  declarations: [
    AppComponent,
    PropertybindingComponent,
    EventbindingComponent,
    TwowaydatabindingComponent,
    ClassbindingComponent,
    InputComponent,
    OutputComponent,
    NgifComponent,
    NgforComponent,
    NgswitchComponent,
    LifecycleComponent,
    FormularioComponent,
    FormularioreativoComponent,
    FormularioreativogrupoComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
