export class Todo {
  public id: number;
  public text: string;
  public completed: boolean;

  constructor(text: string) {
    this.id = Math.random();
    const capitalize = text.charAt(0).toUpperCase() + text.slice(1);
    this.text = capitalize;
    this.completed = false;
  }
}
