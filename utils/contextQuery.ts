export function parseFromContextQuery(query: string | string[] | undefined) {
  if (!query || Array.isArray(query)) return undefined;
  return parseInt(query);
}
