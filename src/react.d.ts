// react.d.ts
interface RefObject<T> {
    // immutable
    readonly current: T | null
  }
  
function createRef<T>(): RefObject<T>