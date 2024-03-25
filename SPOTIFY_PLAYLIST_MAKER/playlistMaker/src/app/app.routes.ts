import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { PlaylistComponent } from './playlist/playlist.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

export const routes: Routes = [
    {path: '', component: HomeComponent},
    {path: 'playlist', component: PlaylistComponent},
    {path: '**', component: PageNotFoundComponent}
];
