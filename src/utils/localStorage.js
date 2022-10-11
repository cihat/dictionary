const loadLocalStorage = (localKey) => {
  try {
    if (
      localStorage.getItem(localKey) === null ||
      Object.keys(localStorage.getItem(localKey)).length === 0
    ) {
      localStorage.setItem(localKey, []);
      return [];
    }
    return JSON.parse(localStorage.getItem(localKey));
  } catch (err) {
    return undefined;
  }
};

const saveLocalStorage = (localKey, data) => {
  try {
    const workingData = JSON.stringify(data);
    localStorage.setItem(localKey, workingData);
  } catch (err) {
    console.log(err);
  }
};

export { loadLocalStorage, saveLocalStorage };