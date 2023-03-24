import bcrypt from 'bcryptjs';

const passwordHash = async (password) => {
    const salt = bcrypt.genSaltSync(13);
    return bcrypt.hashSync(password, salt);
};
const verifyPassword = (password, passwordHash) => bcrypt.compareSync(password, passwordHash);
export {
    passwordHash,
    verifyPassword,
};

