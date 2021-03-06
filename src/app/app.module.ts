import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { CommonModule } from '@angular/common';
import { AppComponent } from './app.component';
import { MainHeaderComponent } from './main-header/main-header.component';
import { RegistrationComponent } from './registration/registration.component';
import { SuccessPageComponent } from './registration/success-page/success-page.component';
import { MainPageCarouselComponent } from './main-page/main-page-carousel/main-page-carousel.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { RouterModule, Routes } from '@angular/router';
import { MainPageComponent } from './main-page/main-page.component';
import { HttpClientModule } from '@angular/common/http';
import { JobRegistrationService } from './services/job-registration-service/job-registration.service';
import { AdminProjectComponent } from './admin/admin-project/admin-project.component';
import { AdminLoginComponent } from './admin/admin-login/admin-login.component';
import { AdminIdeaAddComponent } from './admin/admin-idea-add/admin-idea-add.component';
import { ProjectPageComponent } from './project-page/project-page.component';
import { ProjectPageService } from './services/project-page-service/project-page.service';
import { IdeasPageComponent } from './ideas-page/ideas-page.component';
import { AuthGuardService as AuthGuard } from './services/auth-guard-service/auth-guard.service';
import { FaqPageComponent } from './faq-page/faq-page.component';
import { FinishedProjectsPageComponent } from './finished-projects-page/finished-projects-page.component';
import { AdminIdeaComponent } from './admin/admin-idea/admin-idea.component';
import { MainPageProgressBarComponent } from './main-page/main-page-progress-bar/main-page-progress-bar.component';
import { AdminComponent } from './admin/admin.component';
import { AdminEditProjectComponent } from './admin/admin-edit-project/admin-edit-project.component';
import { AdminEditIdeaComponent } from './admin/admin-edit-idea/admin-edit-idea.component';

const routes: Routes = [
  { path: '', component: MainPageCarouselComponent },
  { path: '', component: MainPageProgressBarComponent },
  { path: 'registration', component: RegistrationComponent },
  { path: 'registration/success', component: SuccessPageComponent },
  { path: 'registration/:organization/:description/:category/:city/:id', component: RegistrationComponent} ,
  { path: 'home', component: MainPageComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'admin', component: AdminLoginComponent},
  { path: 'admin/project', component: AdminProjectComponent, canActivate: [AuthGuard] },
  { path: 'admin/ideas/add', component: AdminIdeaAddComponent, canActivate: [AuthGuard] },
  { path: 'admin/ideas', component: AdminIdeaComponent, canActivate: [AuthGuard] },
  { path: 'admin/ideas/update', component: AdminEditIdeaComponent, canActivate: [AuthGuard] },
  { path: 'admin/ideas/update/:description/:city/:category/:organization/:state/:projectId/:id',
    component: AdminEditIdeaComponent, canActivate: [AuthGuard] },
  { path: 'admin/project/update', component: AdminEditProjectComponent, canActivate: [AuthGuard] },
  { path: 'admin/project/update/:leadName/:leadEmail/:teamName/:category/:organization/:city/:description/:id/:ideaId/:projectId/:state',
    component: AdminEditProjectComponent, canActivate: [AuthGuard] },
  { path: 'project', component: ProjectPageComponent},
  { path: 'ideas', component: IdeasPageComponent},
  { path: 'faq', component: FaqPageComponent},
  { path: 'finished', component: FinishedProjectsPageComponent},
  { path: '**', component: PageNotFoundComponent }
];


@NgModule({
  declarations: [
    AppComponent,
    MainHeaderComponent,
    RegistrationComponent,
    SuccessPageComponent,
    RegistrationComponent,
    MainPageCarouselComponent,
    PageNotFoundComponent,
    MainPageComponent,
    AdminLoginComponent,
    AdminProjectComponent,
    ProjectPageComponent,
    AdminIdeaAddComponent,
    IdeasPageComponent,
    FaqPageComponent,
    FinishedProjectsPageComponent,
    AdminIdeaComponent,
    MainPageProgressBarComponent,
    AdminComponent,
    AdminEditProjectComponent,
    AdminEditIdeaComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    CommonModule,
    RouterModule.forRoot(routes),
    HttpClientModule
  ],
  exports: [
    [RouterModule],
    [MainHeaderComponent]
  ],
  providers: [
    JobRegistrationService,
    ProjectPageService,
    AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule {
}
