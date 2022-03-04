import { PAGINATION_QUERY } from "../components/Pagination";

export default function paginationField() {
  return {
    keyArgs: false, //tells apollo that we will take care of everything
    read(existing = [], { args, cache }) {
      // args: first & skip values, cache is apollo cache
      const { skip, first } = args;
      // read number of items on the page from cache
      const data = cache.readQuery({ query: PAGINATION_QUERY });
      const count = data?._allProductsMeta?.count;
      const page = skip / first + 1;
      const pages = Math.ceil(count / first);

      // check if we have existing items
      const items = existing.slice(skip, skip + first).filter((x) => x); // filters if item is undefined

      // check if we do not have existing items

      // if there are items AND there are not enough items requested per page (default 2) AND we are on last page, then send it
      if (items.length && items.length !== first && page === pages) {
        return items;
      }
      if (items.length !== first) {
        // we do not have any items, go to network
        return false;
      }

      // if there are items, return them from the cache, do not go to network
      if (items.length) {
        console.log(
          `There are ${items.length} items in the cache! Gonna send them to apollo.`
        );
      }
      return items;
    },

    merge(existing, incoming, { args }) {
      // runs when apollo client comes back from the network with our product

      // when apollo tries to query for all products:
      // first thing: read function for those items
      // two things possible: return items bc they are in cache OR return false from here (makes a network request)
      console.log(`Merging items from the network ${incoming.length}`);
      const { skip, first } = args;
      const merged = existing ? existing.slice(0) : [];
      for (let i = skip; i < skip + incoming.length; ++i) {
        merged[i] = incoming[i - skip];
      }
      console.log(merged);
      // return merged items from cache
      return merged;
    },
  };
}
