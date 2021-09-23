function validateRequest(obj) {
  const methods = ['GET', 'POST', 'DELETE', 'CONNECT'];
  if (!obj.hasOwnProperty('method') || !methods.includes(obj.method)) {
    throw new Error('Invalid request header: Invalid Method');
  }

  if (!obj.hasOwnProperty('uri') || !/^[A-Za-z0-9.]+$/g.test(obj.uri)) {
    throw new Error('Invalid request header: Invalid URI');
  }

  const versions = ['HTTP/0.9', 'HTTP/1.0', 'HTTP/1.1', 'HTTP/2.0'];
  if (!obj.hasOwnProperty('version') || !versions.includes(obj.version)) {
    throw new Error('Invalid request header: Invalid Version');
  }

  if (!obj.hasOwnProperty('message')) {
    throw new Error('Invalid request header: Invalid Message');
  }

  if (/[<>&'"\\]/g.test(obj.message)) {
    throw new Error('Invalid request header: Invalid Message');
  }

  return obj;
}

console.log(validateRequest({
  method: 'GET',
  uri: 'svn.public.catalog',
  version: 'HTTP/1.1',
  message: ''
}));

console.log(validateRequest({
  method: 'OPTIONS',
  uri: 'git.master',
  version: 'HTTP/1.1',
  message: '-recursive'
}));