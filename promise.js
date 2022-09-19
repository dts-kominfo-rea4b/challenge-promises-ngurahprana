const { promiseTheaterIXX, promiseTheaterVGC } = require("./external.js");

// TODO: Buat fungsi promiseOutput sesuai ketentuan readme
const promiseOutput = async () => {
  await new Promise((output) => setTimeout(output, 200));

  return new Promise((resolve) => {
    const emosi = [
      {
        hasil: 'marah',
      },
      {
        hasil: 'tidak marah',
      },
    ];

    return resolve(emosi);
  });
};



module.exports = {
  promiseOutput,
};
