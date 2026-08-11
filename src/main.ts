import 'zone.js';
import { bootstrapApplication } from '@angular/platform-browser';
import { importProvidersFrom } from '@angular/core';
import { provideHttpClient } from '@angular/common/http';
import { provideAnimations } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';

import { AppComponent } from './app/app/app.component';

bootstrapApplication(AppComponent, {
  providers: [
    provideAnimations(),
    provideHttpClient(),
    importProvidersFrom(
      ToastrModule.forRoot({
        positionClass: 'toast-top-center',
        preventDuplicates: true,
        timeOut: 3000,
      })
    ),
  ],
}).catch((err) => console.error(err));
