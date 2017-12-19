import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {BackendService} from './backend.service';
import {HttpClientModule} from '@angular/common/http';

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule
  ],
  declarations: [],
  providers: [BackendService]
})
export class SharedModule {
}
