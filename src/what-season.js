import { NotImplementedError } from '../extensions/index.js';

/**
 * Extract season from given date and expose the enemy scout!
 * 
 * @param {Date | FakeDate} date real or fake date
 * @returns {String} time of the year
 * 
 * @example
 * 
 * getSeason(new Date(2020, 02, 31)) => 'spring'
 * 
 */
 export default function getSeason(date) {
  if (!date) {
    return "Unable to determine the time of year!";
  }
  try {
      date.getTime();
  } catch (e) {
      throw new Error("Invalid date!");
  }
    let month = date.getMonth();
    if (month >= 2 && month <  5) {
      return "spring"
    }else if(month >= 5 && month <= 7) {
      return "summer"
    }else if(month >= 8 && month <= 10) {
      return "autumn"
    }
    else {
      return "winter"
    }
    
}

