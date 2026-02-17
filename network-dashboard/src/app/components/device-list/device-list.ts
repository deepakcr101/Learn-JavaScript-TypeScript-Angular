import { Component } from '@angular/core';

@Component({
  selector: 'app-device-list',
  imports: [],
  templateUrl: './device-list.html',
  styleUrl: './device-list.scss',
})
export class DeviceList {
  devices = [
    { name: 'Device 1', status: 'Online' },
    { name: 'Device 2', status: 'Offline' },
    { name: 'Device 3', status: 'Online' },
  ];
  
  
  
}
