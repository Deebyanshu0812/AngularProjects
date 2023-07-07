import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgIfComponent } from './Components/ng-if/ng-if.component';
import { FormsModule } from '@angular/forms';
import { ContentProjectionComponent } from './Components/content-projection/content-projection.component';
import { ProductComponent} from './Components/product/product.component';
import { NgForDemoComponent } from './Components/ng-for-demo/ng-for-demo.component';
import { ProductListComponent } from './Components/product-list/product-list.component';
import { NgforPropertiesComponent } from './Components/ngfor-properties/ngfor-properties.component';
import { TrackbyComponent } from './Components/trackby/trackby.component';
import { ClassBindingComponent } from './Components/class-binding/class-binding.component';
import { StyleBindingComponent } from './Components/style-binding/style-binding.component';

@NgModule({
  declarations: [
    AppComponent,
    NgIfComponent,
    ContentProjectionComponent,
    ProductComponent,
    NgForDemoComponent,
    ProductListComponent,
    NgforPropertiesComponent,
    TrackbyComponent,
    ClassBindingComponent,
    StyleBindingComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [StyleBindingComponent]
})
export class AppModule { }
