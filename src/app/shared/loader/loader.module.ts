import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { LoaderComponent } from './loader-component/loader.component'
import {
  NgxUiLoaderConfig,
  NgxUiLoaderHttpModule,
  NgxUiLoaderModule,
  POSITION,
  SPINNER,
} from 'ngx-ui-loader'

const ngxUiLoaderConfig: NgxUiLoaderConfig = {
  fgsColor: '#03e9f4',
  fgsPosition: 'center-center',
  bgsOpacity: 0.5,
  fgsSize: 80,
  fgsType: SPINNER.pulse,
  gap: 69,
  logoPosition: POSITION.centerCenter,
  logoSize: 120,
  logoUrl: '',
  blur: 35,
  masterLoaderId: 'master',
  overlayBorderRadius: '0',
  overlayColor: 'rgba(40, 40, 40, 0.8)',
  pbColor: '#03e9f4',
  pbDirection: 'ltr',
  pbThickness: 3,
  hasProgressBar: true,
  text: 'VIMA Airlines ©',
  textColor: '#FFFFFF',
  textPosition: 'center-center',
  minTime: 300,
};

@NgModule({
  declarations: [LoaderComponent],
  imports: [
    CommonModule,
    NgxUiLoaderModule.forRoot(ngxUiLoaderConfig),
    NgxUiLoaderHttpModule.forRoot({ showForeground: true }),
  ],
  exports: [LoaderComponent],
})
export class LoaderModule {}
