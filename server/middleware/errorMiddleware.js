const notFound = (req, res, next) => {
  const error = new Error(`Not Found - ${req.originalUrl}`)
}

const errorHandler = (err, req, res, next) => {
  res.status(res.statusCode)
  res.json({
    message: err.message,
    stack: process.env.NODE_ENV === 'production' ? null : err.stack,
  })
}

export { notFound, errorHandler }
