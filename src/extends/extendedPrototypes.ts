String.prototype.replaceAt = function (index, replacement) {
  return (
    this.substr(0, index) +
    replacement +
    this.substr(index + (replacement.length > 0 ? replacement.length : 1))
  );
};

String.prototype.withCommas = function () {
  const splitArray = this.split(".");
  if (splitArray.length === 1)
    return parseFloat(splitArray[0]).toLocaleString();
  return parseFloat(splitArray[0]).toLocaleString() + "." + splitArray[1];
};

Number.prototype.withCommas = function () {
  const splitArray = this.toString().split(".");
  if (splitArray.length === 1)
    return parseFloat(splitArray[0]).toLocaleString();
  return parseFloat(splitArray[0]).toLocaleString() + "." + splitArray[1];
};

String.prototype.withPriceUnit = function (price: string = "تومان") {
  return this + " " + price;
};

Number.prototype.withPriceUnit = function (price: string = "تومان") {
  return this.toString() + " " + price;
};

Number.prototype.inTimeFormat = function (hasHour: boolean = false) {
  if (hasHour)
    return new Date((this as number) * 1000).toISOString().substr(11, 8);
  else return new Date((this as number) * 1000).toISOString().substr(14, 5);
};

export {};
