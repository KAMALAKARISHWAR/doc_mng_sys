import { Injectable, Inject, PLATFORM_ID } from '@angular/core';
import { Router } from '@angular/router';
import { isPlatformBrowser } from '@angular/common';

@Injectable({ providedIn: 'root' })
export class AuthService {
  private loggedIn = false;

  constructor(
    private router: Router,
    @Inject(PLATFORM_ID) private platformId: Object
  ) {
    // Check if user is already logged in from localStorage
    this.loggedIn = this.getStoredAuthStatus();
  }

  private getStoredAuthStatus(): boolean {
    if (isPlatformBrowser(this.platformId)) {
      const authStatus = localStorage.getItem('isAuthenticated');
      return authStatus === 'true';
    }
    return false;
  }

  private setStoredAuthStatus(status: boolean): void {
    if (isPlatformBrowser(this.platformId)) {
      localStorage.setItem('isAuthenticated', status.toString());
    }
  }

  login(email: string, password: string): boolean {
    if (email === 'admin@avsinsotech.com' && password === 'admin123') {
      this.loggedIn = true;
      this.setStoredAuthStatus(true);
      return true;
    }
    return false;
  }

  logout(): void {
    this.loggedIn = false;
    this.setStoredAuthStatus(false);
    this.router.navigate(['/auth/login']);
  }

  isAuthenticated(): boolean {
    return this.loggedIn;
  }
}
