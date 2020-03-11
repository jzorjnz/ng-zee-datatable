import { Component } from '@angular/core';
import { NgZeeDataTableColumn } from 'projects/ng-zee-datatable/src/public-api';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  columns: NgZeeDataTableColumn[] = [
    // { value: 'serverTime', displayName: 'Time', type: 'string', pipe: null, pipeArgs: ['medium'] },
    { value: 'serverTime', displayName: 'Time', type: 'string', pipe: DatePipe, pipeArgs: ['medium'] },
    { value: 'type', displayName: 'Type', type: 'string' },
    { value: 'open', displayName: 'Open', type: 'button' },
    { value: 'geofenceId', displayName: 'Geofence', type: 'number' },
    { value: 'maintenanceId', displayName: 'Maintenance', type: 'string' },
    { value: 'positionId', displayName: 'Position', type: 'number' },
  ];

  data: any[] = [
    {
      "id": 3107416,
      "attributes": {},
      "deviceId": 2,
      "type": "deviceOnline",
      "serverTime": "2020-03-01T19:01:51.748+0000",
      "positionId": 0,
      "geofenceId": 0,
      "maintenanceId": 0,
      "open": "click!"
    },
    {
      "id": 3107421,
      "attributes": {},
      "deviceId": 2,
      "type": "deviceOffline",
      "serverTime": "2020-03-01T19:02:09.373+0000",
      "positionId": 0,
      "geofenceId": 0,
      "maintenanceId": 0
    },
    {
      "id": 3107450,
      "attributes": {},
      "deviceId": 2,
      "type": "deviceOnline",
      "serverTime": "2020-03-01T19:04:10.099+0000",
      "positionId": 0,
      "geofenceId": 0,
      "maintenanceId": 0
    },
    {
      "id": 3107453,
      "attributes": {},
      "deviceId": 2,
      "type": "deviceOffline",
      "serverTime": "2020-03-01T19:04:22.462+0000",
      "positionId": 0,
      "geofenceId": 0,
      "maintenanceId": 0
    },
    {
      "id": 3107479,
      "attributes": {},
      "deviceId": 2,
      "type": "deviceOnline",
      "serverTime": "2020-03-01T19:06:23.097+0000",
      "positionId": 0,
      "geofenceId": 0,
      "maintenanceId": 0
    },
    {
      "id": 3107484,
      "attributes": {},
      "deviceId": 2,
      "type": "deviceOffline",
      "serverTime": "2020-03-01T19:06:35.293+0000",
      "positionId": 0,
      "geofenceId": 0,
      "maintenanceId": 0
    },
    {
      "id": 3107515,
      "attributes": {},
      "deviceId": 2,
      "type": "deviceOnline",
      "serverTime": "2020-03-01T19:08:36.106+0000",
      "positionId": 0,
      "geofenceId": 0,
      "maintenanceId": 0
    },
    {
      "id": 3107518,
      "attributes": {},
      "deviceId": 2,
      "type": "deviceOffline",
      "serverTime": "2020-03-01T19:08:48.528+0000",
      "positionId": 0,
      "geofenceId": 0,
      "maintenanceId": 0
    },
    {
      "id": 3107551,
      "attributes": {},
      "deviceId": 2,
      "type": "deviceOnline",
      "serverTime": "2020-03-01T19:10:47.090+0000",
      "positionId": 0,
      "geofenceId": 0,
      "maintenanceId": 0
    },
    {
      "id": 3107554,
      "attributes": {},
      "deviceId": 2,
      "type": "deviceOffline",
      "serverTime": "2020-03-01T19:10:59.605+0000",
      "positionId": 0,
      "geofenceId": 0,
      "maintenanceId": 0
    },
    {
      "id": 3107577,
      "attributes": {},
      "deviceId": 2,
      "type": "deviceOnline",
      "serverTime": "2020-03-01T19:12:59.058+0000",
      "positionId": 0,
      "geofenceId": 0,
      "maintenanceId": 0
    },
    {
      "id": 3107582,
      "attributes": {},
      "deviceId": 2,
      "type": "deviceOffline",
      "serverTime": "2020-03-01T19:13:11.403+0000",
      "positionId": 0,
      "geofenceId": 0,
      "maintenanceId": 0
    },
    {
      "id": 3107613,
      "attributes": {},
      "deviceId": 2,
      "type": "deviceOnline",
      "serverTime": "2020-03-01T19:15:12.108+0000",
      "positionId": 0,
      "geofenceId": 0,
      "maintenanceId": 0
    },
    {
      "id": 3107617,
      "attributes": {},
      "deviceId": 2,
      "type": "deviceOffline",
      "serverTime": "2020-03-01T19:15:24.624+0000",
      "positionId": 0,
      "geofenceId": 0,
      "maintenanceId": 0
    }
  ];


  // options: NgZeeDataTableOptions = {
  //   element: {
  //     background: '#f97c7c', titleColor: 'white', subTitleColor: '#862424'
  //   },
  //   rowLabel: {
  //     background: '#d83d3d',
  //     labelColor: 'white'
  //   }
  // };

  // days: string[] = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"];
}
