import { ComponentFixture, TestBed } from '@angular/core/testing';
import { InstallationFormComponent } from './installation-form.component';

describe('InstallationFormComponent', () => {
  let fixture: ComponentFixture<InstallationFormComponent>;
  let compiled: HTMLElement;

  /** מחזיר את כפתור "היכנס" כטיפוס Button. */
  const getButton = (): HTMLButtonElement =>
    compiled.querySelector('button') as HTMLButtonElement;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InstallationFormComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(InstallationFormComponent);
    fixture.detectChanges();
    compiled = fixture.nativeElement as HTMLElement;
  });

  it('should create the component', () => {
    expect(fixture.componentInstance).toBeTruthy();
  });

  it('should render the heading', () => {
    expect(compiled.querySelector('h2')?.textContent).toContain(
      'כניסה להתקנת תוכנות לימודיות על המחשב'
    );
  });

  it('should render an id number input', () => {
    expect(compiled.querySelector('input[type="text"]')).toBeTruthy();
  });

  it('should render the terms checkbox', () => {
    expect(compiled.querySelector('input[type="checkbox"]')).toBeTruthy();
  });

  it('should disable the button while the checkbox is unchecked', () => {
    expect(getButton().disabled).toBeTrue();
  });

  it('should enable the button after the checkbox is checked', () => {
    const checkbox = compiled.querySelector(
      'input[type="checkbox"]'
    ) as HTMLInputElement;

    checkbox.click();
    fixture.detectChanges();

    expect(getButton().disabled).toBeFalse();
  });

  it('should disable the button again after the checkbox is unchecked', () => {
    const checkbox = compiled.querySelector(
      'input[type="checkbox"]'
    ) as HTMLInputElement;

    checkbox.click();
    fixture.detectChanges();
    checkbox.click();
    fixture.detectChanges();

    expect(getButton().disabled).toBeTrue();
  });
});
