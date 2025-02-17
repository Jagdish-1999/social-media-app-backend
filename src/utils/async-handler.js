//? Common asyncHandler function also handling errors if thrown
const asyncHandler = requestHandler => async (req, res, next) => Promise.resolve(requestHandler(req, res, next)).catch(next);

export { asyncHandler };
