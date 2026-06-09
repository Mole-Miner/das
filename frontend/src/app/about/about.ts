import { Component, inject, signal } from '@angular/core';

import { AboutSomethingService } from './services/about-something.service';
import { SharedService } from '../services/shared-service';
import { SharedComponent } from "../components/shared-component/shared-component";

@Component({
  selector: 'app-about',
  imports: [SharedComponent],
  templateUrl: './about.html',
  styleUrl: './about.scss',
  providers: [AboutSomethingService, SharedService],
})
export class About {
  private readonly sharedService = inject(SharedService);
  private readonly aboutSomethingService = inject(AboutSomethingService);

  protected readonly someAppSharedData = signal(this.sharedService.getSomeAppSharedData());
  protected readonly data = signal(this.aboutSomethingService.getSomething());
}
