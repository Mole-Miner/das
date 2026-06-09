import { Service } from '@angular/core';

@Service()
export class SharedService {
  getSomeAppSharedData() {
    return 'some app shared data';
  }
}
