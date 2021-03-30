exports.handler = async (event, context) => {

  const data = { name: 'mario', age: 35, job: 'plumber' } 

  // return response to browser
  return {
    statusCode: 200,
    body: JSON.stringify(data)
  }

}