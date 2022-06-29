const API_BASE = "/api";

export default {
  // Client routes
  RTE_INDEX: '/',

  // API routes
  // products API
  API_PRODUCTS_COUNT: API_BASE + "/products-count",

  // HTTP
  GET_METHOD: 'GET',
  POST_METHOD: 'POST',
  PUT_METHOD: 'PUT',
  DELETE_METHOD: 'DELETE',

  CONTENT_TYPE_JSON: 'application/json',

  HTTP_STATUS_OK: 200,
  HTTP_STATUS_UNAUTHORIZED: 403,  
}
