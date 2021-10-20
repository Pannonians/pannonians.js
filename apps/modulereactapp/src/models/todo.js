class Todo {
  text = "";
  done = false;

  constructor(text, done = false) {
    this.done = false;
    this.text = done;
    this.time = new Date();
  }
  toggleDone() {
    if (this.done === true) {
      this.done = false;
    } else {
      this.done = true;
    }
    this.time = new Date();
    return this;
  }
}
// if we put DEFAULT only one function will be exported; without DEFAULT all functions will be exported
export default Todo;
