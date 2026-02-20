import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { DeviceCard, NetworkDevice } from './components/device-card/device-card';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, DeviceCard],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('network-dashboard');

  // Create some mock data for our devices
  devices: NetworkDevice[] = [
    { id: 'dev-01', name: 'Ciena 6500-A', ipAddress: '10.0.1.10', status: 'Active' },
    { id: 'dev-02', name: 'Ciena 8700-B', ipAddress: '10.0.1.20', status: 'Down' },
    { id: 'dev-03', name: 'Router-C', ipAddress: '10.0.1.30', status: 'Maintenance' }
  ];
}
