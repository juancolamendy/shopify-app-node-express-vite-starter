const printEnvVars = () => {
  console.log('--- Environment variables');
  console.log('--- SHOPIFY_API_KEY:', process.env.SHOPIFY_API_KEY);
  console.log('--- SHOPIFY_API_SECRET:', process.env.SHOPIFY_API_SECRET);
  console.log('--- SCOPES:', process.env.SCOPES);
  console.log('--- HOST:', process.env.HOST);
  console.log('--- SCRIPT_TAG_URL:', process.env.SCRIPT_TAG_URL);
  console.log('--- SCRIPT_TAG_SCOPE:', process.env.SCRIPT_TAG_SCOPE);
}

export default printEnvVars;
