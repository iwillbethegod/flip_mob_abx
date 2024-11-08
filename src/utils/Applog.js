import {LOG_TAG} from './constant';

export function logData(message) {
  console.log(LOG_TAG, message);
}

export function logDetails(tag, message) {
  console.log(tag + ': ', message);
}
