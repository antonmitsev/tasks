const sequences = (arr) => {
  let maxOccurrence = {
    number: 0,
    element: null,
    startIndex: null,
  };
  let lastOccurrenceElement = null;
  let lastOccurrenceNumber = null;
  let lastOccurrenceStartIndex = null;

  const checkMax = () => {
    if (lastOccurrenceNumber > maxOccurrence.number) {
      maxOccurrence = {
        number: lastOccurrenceNumber,
        element: lastOccurrenceElement,
        startIndex: lastOccurrenceStartIndex,
      };
    }
  };

  const checkArray = () =>
    arr?.forEach((element, index) => {
      if (lastOccurrenceElement === element) {
        lastOccurrenceNumber++;
      } else {
        checkMax();
        lastOccurrenceStartIndex = index;
        lastOccurrenceNumber = 1;
        lastOccurrenceElement = element;
      }
    });

  checkArray();
  checkMax();

  return maxOccurrence;
};

exports.sequences = sequences;
