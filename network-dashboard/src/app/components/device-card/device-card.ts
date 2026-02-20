import { Component,Input} from '@angular/core';

// A good practice is to define the 'shape' of our data
export interface NetworkDevice {
  id: string;
  name: string;
  ipAddress: string;
  status: 'Active' | 'Down' | 'Maintenance';
}

@Component({
  selector: 'app-device-card',
  imports: [],
  templateUrl: './device-card.html',
  styleUrl: './device-card.scss',
})


export class DeviceCard {
  // Use the @Input decorator to create a property that can receive data
  // from a parent component. We tell it to expect an object matching
  // our NetworkDevice interface. The "!" tells TypeScript we expect
  // this to be provided by the parent.
  @Input() device!: NetworkDevice;
}
