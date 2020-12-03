const generateHeaders = () => ({
  'Content-Type': 'application/json',
});

const call = async (url, request) => {
  const headers = generateHeaders();

  const response = await fetch(url, { ...request, headers })
    .catch(err => {
      const message = `An error has occured: ${err.message}`;
      throw new Error(message);
    });

  return response.json();
};

const httpUtils = { call };

export default httpUtils;
