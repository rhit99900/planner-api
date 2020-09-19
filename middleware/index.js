module.exports = {
  handleErrors: (fn) =>
    (request, response, next) => {
      Promise.resolve(fn(request, response))
             .catch((error) => {
               response.status(500).json(error);
             });
    }  
}