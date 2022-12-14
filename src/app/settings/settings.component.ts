import { Component } from '@angular/core';

interface Setting {
  icon: string;
  name: string;
}

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.scss'],
})
export class SettingsComponent {
  settings: Setting[];

  selectedSetting!: Setting;

  constructor() {
    this.settings = [
      { name: 'Profile', icon: 'pi pi-user-edit' },
      { name: 'Vehicle', icon: 'pi pi-car' },
      { name: 'Bills', icon: 'pi pi-money-bill' },
      { name: 'App Settings', icon: 'pi pi-wrench' },
    ];
  }
}
