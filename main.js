// API Key: c86ba179640ade3c2fa8346ff63f5dc6

// Shared Secret: -


const getToken = async () => {
  let url = new URL('http://www.last.fm/api/auth/');

  let headers = new Headers({
    'api_key': 'c86ba179640ade3c2fa8346ff63f5dc6'
  });

  let response = await fetch(url, {
    headers: header
  });

  let data = await response.json();

  console.log(data);
}
getToken()