import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UsersComponent } from './pages/users/users.component';
import { AlbumsComponent } from './pages/albums/albums.component';
import { PhotosComponent } from './pages/photos/photos.component';
import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';
const appRoutes: Routes = [
  {
    path: 'users',
    component: UsersComponent
  },
  {
    path: 'albums/:id',
    component: AlbumsComponent
  },
  {
    path: 'photos/:id',
    component: PhotosComponent
  },
  { path: '',   redirectTo: '/users', pathMatch: 'full' },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [
    RouterModule.forRoot(
      appRoutes,
      {
        enableTracing: true, // <-- debugging purposes only
      }
    )
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }