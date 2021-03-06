import { Component, OnInit } from '@angular/core';
import { AdminProjectService } from '../../services/admin-project-service/admin-project.service';
import { Router } from '@angular/router';
import { FormBuilder } from '@angular/forms';
import {
  CATEGORY_API_URL,
  CITIES_API_URL,
  TEAMS_API_URL
} from '../../registration.const';

@Component({
  selector: 'app-admin-project',
  templateUrl: './admin-project.component.html',
  styleUrls: ['./admin-project.component.css']
})
export class AdminProjectComponent implements OnInit {
  teams = [];
  cities = [];
  categories = [];
  approved;

  constructor(private router: Router, private formBuilder: FormBuilder, private adminProjectService: AdminProjectService) {
  }

  ngOnInit() {
    this.getTeams().subscribe(data => {
      this.teams = data;
    });
    this.adminProjectService.getCitiesData(CITIES_API_URL)
      .subscribe(data => {
        this.cities = data;
      });
    this.adminProjectService.getCategoriesData(CATEGORY_API_URL)
      .subscribe(data => {
        this.categories = data;
      });
  }

  getTeams() {
    return this.adminProjectService.getTeamsData(TEAMS_API_URL);
  }

  approveProject(projectId: any, team) {
    this.adminProjectService.changeProjectValueToApproved(projectId);
    team.ideas[0].project.approved = true;
  }

  markProjectAsDone(projectId: any, team) {
    this.adminProjectService.changeProjectValueToDone(projectId);
    team.ideas[0].project.done = true;
  }

  onSelect(leadName, teamEmail, teamName, category, organization, city, description, id, ideaId, projectId, state) {
    this.router.navigate([
      '/admin/project/update',
      this.b64EncodeUnicode(leadName),
      this.b64EncodeUnicode(teamEmail),
      this.b64EncodeUnicode(teamName),
      this.b64EncodeUnicode(category),
      this.b64EncodeUnicode(organization),
      this.b64EncodeUnicode(city),
      this.b64EncodeUnicode(description),
      this.b64EncodeUnicode(id),
      this.b64EncodeUnicode(ideaId),
      this.b64EncodeUnicode(projectId),
      this.b64EncodeUnicode(state)
    ]);
  }

  b64EncodeUnicode(param) {
    return btoa(encodeURIComponent(param).replace(/%([0-9A-F]{2})/g,
      function toSolidBytes(match, p1) {
        return String.fromCharCode(Number('0x' + p1));
      }));
  }
}
