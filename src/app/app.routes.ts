import { TermsConditionsComponent } from './terms-conditions/terms-conditions.component';
import { Routes } from '@angular/router';
import { PrivacyPolicyComponent } from './privacy-policy/privacy-policy.component';
import { HomeComponent } from './home/home.component';
import { DisclaimerComponent } from './disclaimer/disclaimer.component';
import { DisclosureComponent } from './disclosure/disclosure.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { KnowledgeHubComponent } from './knowledge-hub/knowledge-hub.component';
import { ComplaintsComponent } from './complaints/complaints.component';

export const routes: Routes = [
    {path: 'complaints', component: ComplaintsComponent},
    { path: 'privacy-policy', component: PrivacyPolicyComponent },
    { path: 'disclaimer', component: DisclaimerComponent },
    { path: 'disclosure', component: DisclosureComponent },
    { path: 'terms-condition', component: TermsConditionsComponent },
    { path: 'contact-us', component: ContactUsComponent },
    { path: 'about-us', component: AboutUsComponent },
    { path: 'knowledge-hub', component: KnowledgeHubComponent },
    { path: 'home', component: HomeComponent },
    {
        path: '', redirectTo: '/home', pathMatch: 'full'
    },
];
