export default function firstMiddleware(req, res, next) {
  console.log("First middleware");
  next();
}
