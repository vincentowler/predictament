// via https://stackoverflow.com/questions/8648892/convert-url-parameters-to-a-javascript-object
export function getQuerystring() {
  const search = location.search.substring(1);
  if (!search) return {};
  return JSON.parse(
    '{"' +
      decodeURI(search)
        .replace(/"/g, '\\"')
        .replace(/&/g, '","')
        .replace(/=/g, '":"') +
      '"}'
  );
}
