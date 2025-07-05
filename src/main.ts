import 'zone.js';
import { bootstrapApplication } from '@angular/platform-browser';
import { importProvidersFrom } from '@angular/core';
import { AppComponent } from './app/app/app.component';
import { provideAnimations } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';

bootstrapApplication(AppComponent, {
  providers: [
    provideAnimations(),
  importProvidersFrom(
  ToastrModule.forRoot({
    positionClass: 'toast-top-center',
    preventDuplicates: true,
    timeOut: 3000,
  })
)

  ],
})
.catch(err => console.error(err));
