import { useLayoutEffect, useState } from "preact/hooks";

function useHasChanged<T>(oldValue: T, newValue: T) {
  const [hasChanged, setHasChanged] = useState<boolean>(false);

  useLayoutEffect(() => {
    setHasChanged(oldValue !== newValue);
  }, [newValue]);

  return hasChanged;
}

export default useHasChanged;
