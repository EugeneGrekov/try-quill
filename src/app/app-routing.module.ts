import {NgModule} from '@angular/core';
import {Routes, RouterModule, PreloadAllModules} from '@angular/router';
import {EditPageComponent} from './contenet/edit-page/edit-page.component';
import {CreatePageComponent} from './contenet/create-page/create-page.component';
import {PostPageComponent} from './contenet/post-page/post-page.component';
import {MainLayoutComponent} from './contenet/main-layout/main-layout.component';


const routes: Routes = [
  {
    path: '', component: MainLayoutComponent, children: [
      {path: 'c', component: CreatePageComponent},
      {path: 's', component: PostPageComponent},
      {path: 'e', component: EditPageComponent},
    ]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    preloadingStrategy: PreloadAllModules
  })],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
