class Observable {
  constructor() {
    this.promiseQueue = [];
    this.resolve = null;
    this.enqueue();
  }

  enqueue() {
    this.promiseQueue.push(
      new Promise(resolve => this.resolve = resolve)
    );
  }

  dequeue() {
    return this.promiseQueue.shift();
  }

  async *fromEvent (element, eventType) {
    element.addEventListener(eventType, (event) => {
      this.resolve(event);
      this.enqueue();
    });
    while (1) {
      yield await this.dequeue();
    }
  }
}