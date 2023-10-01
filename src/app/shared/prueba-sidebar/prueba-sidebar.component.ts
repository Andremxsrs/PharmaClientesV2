import { Component,  } from '@angular/core';
import { NzBreadCrumbModule } from 'ng-zorro-antd/breadcrumb';
@Component({
  selector: 'app-prueba-sidebar',
  templateUrl: './prueba-sidebar.component.html',
  styleUrls: ['./prueba-sidebar.component.css']
})
export class PruebaSidebarComponent {
  isDropdownHidden = true;
  isAnotherDropdownHidden  = true;
  isTransactionsHidden = true;
    isCollapsed = false;
  
    toggleDropdown() {
      this.isDropdownHidden = !this.isDropdownHidden;
    }
  
    istoggleDropdown2() {
      this.isAnotherDropdownHidden = !this.isAnotherDropdownHidden;
    }
  
    isTransactionsToggle() {
      this.isTransactionsHidden = !this.isTransactionsHidden;
    }
}
