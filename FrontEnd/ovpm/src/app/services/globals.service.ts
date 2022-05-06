import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GlobalsService {

  constructor() { }

  discoveryMethods = [
    {
        name: "Radial velocity",
        value: "Radial velocity"
    },
    {
        name: "Transit photometry",
        value: "Transit photometry"
    },
    {
        name: "Reflection and emission modulations",
        value: "Reflection and emission modulations"
    },
    {
        name: "Relativistic beaming",
        value: "Relativistic beaming"
    },
    {
        name: "Ellipsoidal variations",
        value: "Ellipsoidal variations"
    },
    {
        name: "Pulsar timing",
        value: "Pulsar timing"
    },
    {
        name: "Variable star timing",
        value: "Variable star timing"
    },
    {
        name: "Transit timing",
        value: "Transit timing"
    },
    {
        name: "Transit duration variation",
        value: "Transit duration variation"
    },
    {
        name: "Eclipsing binary minima timing",
        value: "Eclipsing binary minima timing"
    },
    {
        name: "Gravitational microlensing",
        value: "Gravitational microlensing"
    },
    {
        name: "Direct imaging",
        value: "Direct imaging"
    },
    {
        name: "Polarimetry",
        value: "Polarimetry"
    },
    {
        name: "Astrometry",
        value: "Astrometry"
    },
    {
        name: "X-ray eclipse",
        value: "X-ray eclipse"
    },
    {
        name: "Disc kinematics",
        value: "Disc kinematics"
    }
]
}
