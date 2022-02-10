import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ModalModule } from 'ngx-bootstrap/modal';



import { DemoModalServiceConfirmWindowComponent } from './ngx-bootstrap-demo.component'
@NgModule({
  declarations: [DemoModalServiceConfirmWindowComponent],
  imports: [
    ModalModule.forRoot(),
    
    BrowserAnimationsModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserModule
  ],
  entryComponents: [],
  bootstrap: [DemoModalServiceConfirmWindowComponent]
})
export class AppModule {
}
