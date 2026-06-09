import { Service } from '@angular/core';

@Service()
export class AboutSomethingService {
  getSomething() {
    return 'something from service';
  }
}
