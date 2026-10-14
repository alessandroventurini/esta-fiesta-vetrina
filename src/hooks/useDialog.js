import { useLayoutEffect, useRef } from 'react';

// Native dialogs provide a shared top layer and keep the rest of the page inert.
export default function useDialog() {
  const ref = useRef(null);
  useLayoutEffect(() => {
    const dialog = ref.current;
    const previousFocus = document.activeElement;
    const scrollY = window.scrollY;
    const bodyOverflow = document.body.style.overflow;
    const htmlOverflow = document.documentElement.style.overflow;
    document.body.style.overflow = 'hidden';
    document.documentElement.style.overflow = 'hidden';
    dialog.showModal();
    const keepFocusInside = (event) => {
      if (event.key !== 'Tab') return;
      const controls = [...dialog.querySelectorAll('a[href], button:not(:disabled), [tabindex="0"]')].filter((element) => element.getClientRects().length);
      const first = controls[0];
      const last = controls[controls.length - 1];
      if (!first) return;
      if ((!event.shiftKey && document.activeElement === last) || !dialog.contains(document.activeElement)) {
        event.preventDefault(); first.focus();
      } else if (event.shiftKey && document.activeElement === first) {
        event.preventDefault(); last.focus();
      }
    };
    dialog.addEventListener('keydown', keepFocusInside);
    return () => {
      dialog.removeEventListener('keydown', keepFocusInside);
      dialog.close();
      document.body.style.overflow = bodyOverflow;
      document.documentElement.style.overflow = htmlOverflow;
      window.scrollTo({ top: scrollY, behavior: 'instant' });
      if (previousFocus?.isConnected) previousFocus.focus({ preventScroll: true });
    };
  }, []);
  return ref;
}
