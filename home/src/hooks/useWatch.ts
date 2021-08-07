import * as React from "react";

export function useWatch<T>(value: T, callback: (value: T) => void) {
  const valueRef = React.useRef<T>(value);
  const callbackRef = React.useRef(callback);

  React.useEffect(() => {
    callbackRef.current = callback;
  }, [callback]);

  React.useEffect(() => {
    valueRef.current = value;
    callbackRef.current(valueRef.current);
  }, [value]);
}
