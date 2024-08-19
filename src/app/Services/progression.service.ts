import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProgressionService {

  constructor() { }

  private currentStepSubject = new BehaviorSubject<number>(0);
  currentStep$ = this.currentStepSubject.asObservable();

  setCurrentStep(step: number) {
    this.currentStepSubject.next(step);
  }
}
