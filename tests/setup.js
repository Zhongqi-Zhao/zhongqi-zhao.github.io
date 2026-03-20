import { afterEach, beforeEach } from 'vitest';

let storageData = {};

beforeEach(() => {
  storageData = {};

  if (typeof localStorage?.getItem !== 'function') {
    Object.defineProperty(globalThis, 'localStorage', {
      configurable: true,
      value: {
        getItem(key) {
          return Object.prototype.hasOwnProperty.call(storageData, key)
            ? storageData[key]
            : null;
        },
        setItem(key, value) {
          storageData[key] = String(value);
        },
        removeItem(key) {
          delete storageData[key];
        },
        clear() {
          storageData = {};
        },
      },
    });
  }
});

afterEach(() => {
  document.body.innerHTML = '';
  if (typeof localStorage?.clear === 'function') {
    localStorage.clear();
  }
});
