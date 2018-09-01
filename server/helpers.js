const findById = (arr, id) => {
  return arr.find(a => a.id === id);
};
const getNewId = arr => {
  return arr[arr.length - 1].id + 1;
};
const getIndexOf = (arr, id) => {
  const itemFound = findById(arr, parseInt(id));
  return arr.indexOf(itemFound);
};
module.exports = {
  findById,
  getNewId,
  getIndexOf
};
