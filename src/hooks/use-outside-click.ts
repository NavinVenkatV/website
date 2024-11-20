import React, { useEffect } from "react";

// Define a more specific type for the callback function
type EventCallback = (event: MouseEvent | TouchEvent) => void;

export const useOutsideClick = (
  ref: React.RefObject<HTMLElement>,
  callback: EventCallback // Use the specific EventCallback type
) => {
  useEffect(() => {
    const listener = (event: MouseEvent | TouchEvent) => {
      if (!ref.current || ref.current.contains(event.target as Node)) {
        return;
      }
      callback(event); // Call the callback with the event
    };

    // Add event listeners for mousedown and touchstart events
    document.addEventListener("mousedown", listener);
    document.addEventListener("touchstart", listener);

    // Cleanup function to remove the event listeners
    return () => {
      document.removeEventListener("mousedown", listener);
      document.removeEventListener("touchstart", listener);
    };
  }, [ref, callback]); // Ensure that ref and callback are stable references
};
