//При запуске приложения первым выполняется код, который определен в файле main.ts.

import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';    //использует bootstrapModule для загрузки нужного модуля. После этого начинает работать вся логика, которая заложена в модуле AppModule,

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

if (environment.production) {
  enableProdMode();
}

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));
