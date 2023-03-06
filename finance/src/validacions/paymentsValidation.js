import Joi from 'joi';

const validate = {
validateBody: (payload) =>{
    const schema = Joi.object().keys({
        valor: Joi.number().min(1).required(),
        nomeCartao: Joi.string().required(),
        numeroCartao: Joi.number().required(),
        dataExpiracao: Joi.number().required(),
        cvv: Joi.number().required(),
        status: Joi.string().required(),
    });

    const result = schema.validate(payload);
    return result;
}
}