export function getBuffer() {
  const data = '{"data":{"user":{"id":1,"name":"Hitman","level":10}}}';
  return ((input) => {
    const buffer = new ArrayBuffer(data.length * 2);
    const bufferView = new Uint16Array(buffer);
    for (let i = 0; i < input.length; i += 1) {
      bufferView[i] = input.charCodeAt(i);
    }
    return buffer;
  })(data);
}

export class ArrayBufferConverter {
  constructor() {
    this.variableForConvert = [];
  }

  load(funBuffer) {
    const funBufferView = new Uint16Array(funBuffer);
    for (let i = 0; i < funBufferView.length; i += 1) {
      this.variableForConvert[i] = String.fromCharCode(funBufferView[i]);
    }
  }

  toString() {
    const resultStr = this.variableForConvert.join('');
    return resultStr;
  }
}

// const test = new ArrayBufferConverter();
// test.load(getBuffer());
// test.toString();
