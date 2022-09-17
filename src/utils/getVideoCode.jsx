export const getVideoCode = url => {
    const regExp = /(?<=shorts\/).+(?=\?)/g;
    const code = url.match(regExp);
    return getVideoCode(code[0])
  }
    