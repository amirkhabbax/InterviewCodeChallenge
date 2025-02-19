import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GoogleAdsFeeService {

  constructor() { }

  calculateFeeRate(input: number): number {

    let feeRate = 0;


    // let _50Counts = Math.floor(input / 50000000);
    let remindsFrom50 = input - 50000000;


    if (remindsFrom50 >= 0) {

      feeRate += ((input * 5) / 100) >= 1500000 ? 1500000 : ((input * 5) / 100);

      if (remindsFrom50 >= 40000000) {
        let remindsFrom40 = remindsFrom50 - 40000000;
        if (remindsFrom40 >= 0) {
          feeRate += ((remindsFrom50 * 3) / 100) >= 1000000 ? 1000000 : ((remindsFrom50 * 3) / 100);
          let remindsFrom30 = remindsFrom40 - 30000000;
          if (remindsFrom30 >= 0) {
            feeRate += ((remindsFrom40 * 1) / 100) >= 200000 ? 200000 : ((remindsFrom40 * 1) / 100);
            if( remindsFrom30 > 0){
              feeRate += 50000;
            }
          } else if (remindsFrom40 > 0) {
            feeRate += 50000;
          }
        } else {
          feeRate += 500000;
        }

      } else if (remindsFrom50 > 0){
        feeRate += 500000;
      }
    } else {
      feeRate += 500000;
    }

    return feeRate;
  }
}
