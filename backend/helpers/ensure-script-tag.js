import { Shopify } from "@shopify/shopify-api";

export default async function ensureScriptTag(session, scriptTagSettings) {
  console.log('--- ensureScriptTag');
  const client = new Shopify.Clients.Graphql(session.shop, session.accessToken);

  // fetch initial list
  let listRes = await client.query({
    data: SCRIPTTAGS_QUERY,
  });

  if(scriptTagSettings.purge) {
    // delete script tag
    await deleteAllScriptTagByScr(client, listRes.body.data, scriptTagSettings.src);

    // re-fetch list
    listRes = await client.query({
      data: SCRIPTTAGS_QUERY,
    });
  }

  const pos = findIndexBySrc(listRes.body.data, scriptTagSettings.src);
  console.log('pos:', pos);
  if(pos===-1) {
    const createRes = await client.query({
      data: {
        query: CREATE_SCRIPT_TAG_MUTATION,
        variables: {
          input: {
            src: scriptTagSettings.src,
            displayScope: scriptTagSettings.scope,
          }
        }
      }
    });
    console.log('createRes:', createRes);
  }
}

function findIndexBySrc(data, src) {
  if(!data || !data.scriptTags || !data.scriptTags.edges) {
    return -1;
  }

  const list = data.scriptTags.edges;
  for(let i = 0; i < list.length; i++) {
    if(list[i].node.src === src) {
      return i;
    }
  }

  return -1;
}

async function deleteAllScriptTagByScr(client, data, src) {
  if(!data || !data.scriptTags || !data.scriptTags.edges) {
    return;
  }

  const list = data.scriptTags.edges;
  for(let i = 0; i < list.length; i++) {
    if(list[i].node.src === src) {
      console.log('--- deleting node:', list[i].node.id);
      const deleteRes = await client.query({
        data: {
          query: DELETE_SCRIPTTAG_MUTATION,
          variables: {
            id: list[i].node.id,
          }
        }
      });
      console.log('--- deleteRes:', deleteRes);
    }
  }
}

const CREATE_SCRIPT_TAG_MUTATION = `
    mutation scriptTagCreate($input: ScriptTagInput!) {
        scriptTagCreate(input: $input) {
            scriptTag {
                id
            }
            userErrors {
                field
                message
            }
        }
    }
`;

const SCRIPTTAGS_QUERY = `
    query {
        scriptTags(first: 100) {
            edges {
                node {
                    id
                    src
                    displayScope
                }
            }
        }
    }
`;

const DELETE_SCRIPTTAG_MUTATION = `
    mutation scriptTagDelete($id: ID!) {
        scriptTagDelete(id: $id) {
            deletedScriptTagId
            userErrors {
                field
                message
            }
        }
    }
`;
