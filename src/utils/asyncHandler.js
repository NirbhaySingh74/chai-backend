// const asyncHandler = () => {};

export { asyncHandler };

const asyncHandler = (fn) => async (req, res, next) => {
  try {
    await fn(req, res, next);
  } catch (error) {
    res.status(err.code || 5000).json({
      success: false,
      message: err.message,
    });
  }
};