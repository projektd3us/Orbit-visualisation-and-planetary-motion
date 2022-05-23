import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GlobalsService {

  constructor() { }

  discoveryMethods = [
    {
        name: "Radial Velocity",
        value: "Radial Velocity"
    },
    {
        name: "Transit",
        value: "Transit"
    },
    {
        name: "Transit Timing Variations",
        value: "Transit Timing Variations"
    },
    {
        name: "Pulsar Timing",
        value: "Pulsar Timing"
    },
    {
        name: "Pulsation Timing Variations",
        value: "Pulsation Timing Variations"
    },
    {
        name: "Microlensing",
        value: "Microlensing"
    },
    {
        name: "Imaging",
        value: "Imaging"
    },
    {
        name: "Astrometry",
        value: "Astrometry"
    },
    {
        name: "Eclipse Timing Variations",
        value: "Eclipse Timing Variations"
    },
    {
        name: "Disk kinematics",
        value: "Disk kinematics"
    },
    {
        name: "Orbital Brightness Modulation",
        value: "Orbital Brightness Modulation"
    }
]
}
