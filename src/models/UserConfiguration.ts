// src/models/UserConfiguration.ts

export class UserConfiguration {
  constructor(
    public username: string,
    public email: string,
    public phone: string | undefined,
    public isAdmin: boolean,
    public theme: 'light' | 'dark'
  ) {}

  public displayConfig(): string {
    return `Name: ${this.username}, Email: ${this.email}, Admin: ${this.isAdmin}, Theme: ${this.theme}`;
  }
}
