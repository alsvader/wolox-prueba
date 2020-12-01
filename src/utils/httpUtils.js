const generateHeaders = () => ({
  'Content-Type': 'application/json',
});

const call = async (url, request) => {
  const headers = generateHeaders();

  const response = await fetch(url, { ...request, headers });

  if (!response.ok) {
    const message = `An error has occured: ${response.status}`;
    throw new Error(message);
  }

  return await response.json();
};

const httpUtils = { call };

export default httpUtils;
