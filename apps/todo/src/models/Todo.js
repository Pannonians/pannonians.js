class Todo {
  text = "";
  done = false;

  constructor(text, done = false) {
    this.text = text;
    this.done = done;
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

export default Todo;
