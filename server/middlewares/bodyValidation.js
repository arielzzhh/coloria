
const bodyValidationMiddleware = (validateSchema) => async (req, res, next) => {
  const body = req.body;
  try {
    await validateSchema(body);
    next()
  } catch (err) {
    res.json('stucked in body validation'); 
  }
};

export default bodyValidationMiddleware;
