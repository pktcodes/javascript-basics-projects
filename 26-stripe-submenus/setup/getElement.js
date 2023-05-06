const getElement = (selection) => {
  const element = document.querySelector(selection);
  if (element) {
    return element;
  }
  throw new Error(`No element found with "${selection}" selector`);
};

export default getElement;
