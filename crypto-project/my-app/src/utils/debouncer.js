export const debouncer = (fn, delay) => {
    let timeId;
    return (...rest) => {
      if (timeId) {
        clearTimeout(timeId);
      }
      timeId = setTimeout(() => fn(...rest), delay);
    };
  };
