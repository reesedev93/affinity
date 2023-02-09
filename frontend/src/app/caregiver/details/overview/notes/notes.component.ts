import {Component, OnInit, Input} from '@angular/core';
import {AuthService} from '../../../../services/gaurd/auth.service';

@Component({
  selector: 'caregiver-overview-notes',
  templateUrl: './notes.component.html',
  styleUrls: ['./notes.component.scss']
})
export class OverviewNotesComponent implements OnInit {
  @Input() notes: [];

  check_access_on_init = true;
  access_group_id = 'Caregiver Data';

  acl_allow = {read: false, update: false, delete: false};

  ngAfterViewChecked() {}

  constructor(private authService: AuthService) {
    if (this.check_access_on_init) {
      this.acl_allow = authService.checkOverallAccess(this.access_group_id);
    }
  }

  ngOnInit() {}

  // for update Note
  openManageNotes(content) {
    content.show();
  }

  ngOnDestroy() {}
}
