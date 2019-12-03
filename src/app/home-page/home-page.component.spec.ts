import { HomePageComponent } from './home-page.component';
import { TestBed, async } from '@angular/core/testing';


describe('HomePageComponent', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [
        
      ],
    });
    TestBed.compileComponents();
  });

  it('should create the app', async(() => {
    const fixture = TestBed.createComponent(HomePageComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));

  it('should render title in a h1 tag', async(() => {
    const fixture = TestBed.createComponent(HomePageComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to Lena\'s Recipe Book');
  }));

});