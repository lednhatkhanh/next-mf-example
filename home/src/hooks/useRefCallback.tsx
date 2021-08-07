import * as React from "react";

export function useRefCallback<T extends (...params: any[]) => void>(callback: T) {
  const callbackRef = React.useRef(callback);

  React.useEffect(() => {
    callbackRef.current = callback;
  }, [callback]);

  return callbackRef;
}
