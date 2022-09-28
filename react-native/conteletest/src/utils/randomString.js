const randomString = () => {
  let randomStr = '';
  let caracters =
    'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz1234567890';
  for (let i = 0; i < 10; i++) {
    randomStr += caracters.charAt(Math.floor(Math.random() * caracters.length));
  }

  return randomStr;
};

export {randomString};
