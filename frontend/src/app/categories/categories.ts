import { AsyncPipe } from '@angular/common';
import { Component, DestroyRef, inject, OnInit, signal } from '@angular/core';
import { interval, map } from 'rxjs';
import { RouterModule } from "@angular/router";
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';

import { SharedService } from '../services/shared-service';
import { SharedComponent } from "../components/shared-component/shared-component";

@Component({
  selector: 'app-categories',
  imports: [AsyncPipe, RouterModule, SharedComponent],
  templateUrl: './categories.html',
  styleUrl: './categories.scss',
})
export class Categories implements OnInit {
  private readonly destroyRef = inject(DestroyRef);
  private readonly sharedService = inject(SharedService);

  protected readonly someAppSharedData = signal(this.sharedService.getSomeAppSharedData());

  protected readonly asyncPipeCounter$ = interval(1000).pipe(
    map((value) => 1 + value)
  );

  protected destroyRefCounter: number = 0;

  ngOnInit(): void {
    interval(1000)
      .pipe(
        map((value) => 1 + value),
        takeUntilDestroyed(this.destroyRef)
      )
      .subscribe((value) => this.destroyRefCounter = value);
  }
}
