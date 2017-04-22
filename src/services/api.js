import camelcaseKeysDeep from 'camelcase-keys-deep';
import qs from 'qs';
import { normalize } from 'normalizr';
import { headers } from '../constants/config';
import 'isomorphic-fetch';
import * as schemas from '../schemas';

const API_ROOT = process.env.NODE_ENV === 'test' ? 'http://localhost:3000' : '';

function callApi(endpoint, schema, request) {
  if (request && request.body) {
    request.body = JSON.stringify(request.body);
  }

  const requestWithHeaders = {
    ...{ headers },
    ...request,
  };

  return fetch(API_ROOT + endpoint, requestWithHeaders)
    .then(response => response.json().then(body => ({ response, body })))
    .then(({ response, body }) => {
      if (!response.ok) {
        return Promise.reject(body);
      }

      const camelized = camelcaseKeysDeep(body.result || {});
      const receivedAt = Date.now();
      const { notification } = body;

      if (schema) {
        return {
          ...normalize(camelized, schema),
          notification,
          receivedAt,
        };
      }

      return {
        result: camelized,
        notification,
        receivedAt,
      };
    });
}

export default {
  signIn(formData) {
    return callApi('/api/access_tokens', null, {
      method: 'POST',
      body: formData,
    });
  },
  signUp(formData) {
    return callApi('/api/users', null, {
      method: 'POST',
      body: formData,
    });
  },
  signOut() {
    return callApi('/api/access_tokens', null, {
      method: 'DELETE',
    });
  },
};
