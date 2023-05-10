function solve(obj) {
   let methods = ['GET', 'POST', 'DELETE', "CONNECT"];
   let versions = ['HTTP/0.9', 'HTTP/1.0', 'HTTP/1.1', 'HTTP/2.0'];
   let uriPattern = /^[\w.]+$/;
   let messagePattern = /^[^<>\\&\'\"]*$/g;
   if(!(obj.method && methods.includes(obj.method))) {
    throw new Error('Invalid request header: Invalid Method')
   }

   if(!(obj.uri && (obj.uri == '*' || uriPattern.test(obj.uri)))) {
    throw new Error('Invalid request header: Invalid URI')
   }

   if(!(obj.version && versions.includes(obj.version))) {
    throw new Error('Invalid request header: Invalid Version')
   }

   if(!(obj.hasOwnProperty('message') && (obj.message == '' || messagePattern.test(obj.message)))) {
    throw new Error('Invalid request header: Invalid Message');
   }

   return obj;
}

// solve({
//     method: 'POST',
//     uri: 'home.bash',
//     message: 'rm -rf /*'
//     })

console.log(solve({
      method: 'GET',
      uri: 'svn.public.catalog',
      version: 'HTTP/1.1',
      message: ''
  }));