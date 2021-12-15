
// import crypto from 'crypto';

// const algorithm = 'aes-256-ctr';
// const secretKey =  process.env.ENC_KEY || 'vOVH6sdmpNWjRRIqCc7rdxs01lwHzfr3';
// const iv = crypto.randomBytes(16);

// const encrypt = (text)=>{

//   const cipher = crypto.createCipheriv(algorithm, Buffer.from(secretKey), iv);

//   const encrypted = Buffer.concat([cipher.update(text),cipher.final()]);
//   return {
//       iv: iv.toString('hex'), 
//       content: encrypted.toString('hex')
//   };

// };

// const decrypt = (hash)=>{
//     const decipher = crypto.createDecipheriv(algorithm,secretKey, Buffer.from(hash.iv, 'hex'))

//     const decrypted = Buffer.concat([decipher.update(Buffer.from(hash.numberHashed,'hex')),decipher.final()]);
//     return decrypted.toString();
// }

// const hashPassword = async (password) => {
//     let config = {
//       salt:process.env.SALT,
//       iterations:1000
//     }
//     return new Promise( (resolve, reject) => {
//       crypto.pbkdf2(
//        password,
//        config.salt,
//        config.iterations,
//        32,
//        'sha512',
//        (err, derivedKey) => (err ? reject(err) : resolve(derivedKey.toString('hex')))
//       )
//      })
//   };
// const comparePassword = async (userPassword,password) => {
//     return userPassword === await hashPassword(password);
// }
// export {
//     encrypt,
//     decrypt,
//     hashPassword,
//     comparePassword
// }