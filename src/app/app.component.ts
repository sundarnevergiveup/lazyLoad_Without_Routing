import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'lazy-load-example';

  click(){
  	console.log('button clicked');
  	import('./lazy-component/lazy-module.module').then(mod=>mod.LazyModule)
  	console.log('Lazy loaded module');
  }
}
