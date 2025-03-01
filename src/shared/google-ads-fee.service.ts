import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class GoogleAdsFeeService {
  constructor() {}

  calculateFeeRate(input: number): Promise<number> {
    let firstCeiling = 50000000;
    let secondCeiling = 40000000;
    let thirdCeiling = 30000000;

    return new Promise((resolve) => {
      let feeRate = 0;
      if (input < firstCeiling && input > 0) {
        feeRate = 500000;
      } else if (input >= firstCeiling) {
        feeRate = (input * 5) / 100 >= 1500000 ? 1500000 : (input * 5) / 100;
      }
      resolve(feeRate);
    })
      .then((feeRate) => {
        let reminded = input - firstCeiling;
        if (reminded > 0 && reminded < secondCeiling) {
          (feeRate as number) += 500000;
        } else if (reminded >= secondCeiling) {
          (feeRate as number) +=
            (reminded * 3) / 100 >= 1000000 ? 1000000 : (reminded * 3) / 100;
        }
        return feeRate as number;
      })
      .then((feeRate: number) => {
        let reminded = input - firstCeiling - secondCeiling;
        if (reminded > 0 && reminded < thirdCeiling) {
          feeRate += 50000;
        } else if (reminded >= thirdCeiling) {
          feeRate +=
            (reminded * 1) / 100 >= 200000 ? 200000 : (reminded * 1) / 100;
        }
        return feeRate;
      })
      .then((feeRate: number) => {
        let reminded = input - firstCeiling - secondCeiling - thirdCeiling;
        if (reminded > 0) {
          feeRate += 50000;
        }
        return feeRate;
      });

    // let remindsFrom50 = input - 50000000;

    // if (remindsFrom50 >= 0) {

    //   feeRate += ((input * 5) / 100) >= 1500000 ? 1500000 : ((input * 5) / 100);

    //   if (remindsFrom50 >= 40000000) {
    //     let remindsFrom40 = remindsFrom50 - 40000000;
    //     if (remindsFrom40 >= 0) {
    //       feeRate += ((remindsFrom50 * 3) / 100) >= 1000000 ? 1000000 : ((remindsFrom50 * 3) / 100);
    //       let remindsFrom30 = remindsFrom40 - 30000000;
    //       if (remindsFrom30 >= 0) {
    //         feeRate += ((remindsFrom40 * 1) / 100) >= 200000 ? 200000 : ((remindsFrom40 * 1) / 100);
    //         if( remindsFrom30 > 0){
    //           feeRate += 50000;
    //         }
    //       } else if (remindsFrom40 > 0) {
    //         feeRate += 50000;
    //       }
    //     } else {
    //       feeRate += 500000;
    //     }

    //   } else if (remindsFrom50 > 0){
    //     feeRate += 500000;
    //   }
    // } else {
    //   feeRate += 500000;
    // }

    // return feeRate;
  }
}
