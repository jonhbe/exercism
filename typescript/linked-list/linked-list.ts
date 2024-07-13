type Node<T> = {
  value: T;
  previous?: Node<T>;
  next?: Node<T>
}

export class LinkedList<TElement> {
  private _first?: Node<TElement>= undefined;
  private _last?: Node<TElement> = undefined
  private _count = 0;

  public push(element: TElement) {
    if (this._count === 0) {
      this._first = {
        value: element,
      };
      this._last = this._first;
      this._count++;
      return;
    }
    const oldFirst = this._first

    this._first = {value: element, next: oldFirst}
    oldFirst!.previous = this._first;
        this._count++;
    return;
  }

  public pop(): TElement | undefined{
    if (this._count === 0) {
      return
    }
    const toBePopped = this._first;
    if (this._count === 1) {
      this._last = undefined;
      this._first = undefined;
      this._count--;
      return toBePopped?.value
    }
    this._first = toBePopped?.next;
    this._count--
    return toBePopped?.value;

  }

  public shift(): TElement |undefined {
    if (this._count === 0) {
      return
    }

    const toBeShifted = this._last;

    if (this._count === 1) {
      this._first = undefined;
      this._last = undefined;
      this._count--;
      return toBeShifted?.value
    }


    this._last = toBeShifted?.previous;
    this._count--
    return toBeShifted?.value;
  }

  public unshift(element: TElement) {
    if (this._count === 0) {
      this._last = {
        value: element,
      };
      this._first = this._last;
      this._count++;
      return;
    }
    const oldLast = this._last
    this._last = {value: element, previous: oldLast}
    oldLast!.next = this._last;
    this._count++;
    return;
  }

  public delete(element: TElement) {
    let index: Node<TElement> | undefined = this._first;
    while (index !== undefined) {
      if (index.value === element) {

        let previousNode = index.previous;
        let nextNode = index.next;

        if (previousNode === undefined && nextNode === undefined) {
          this._first = undefined;
          this._last = undefined
          this._count--;
          break;
        }

        if (previousNode === undefined && nextNode !== undefined) {
          this._first = nextNode;
          nextNode.previous = undefined;
          this._count--;
          break;
        }

        if (previousNode !== undefined && nextNode === undefined) {
          this._last = previousNode;
          previousNode.next = undefined;
          this._count--;
          break;
        }

        previousNode!.next = nextNode;
        nextNode!.previous = previousNode
        this._count--;
        break;
      }
      index = index.next;
    }
  }

  public count(): number {
    return this._count;
  }
}
