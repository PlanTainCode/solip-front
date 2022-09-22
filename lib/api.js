export async function fetcher(url, option = {}) {
  let response;
  // let requestOption = {
  //   headers: {
  //     Authorization: `bearer ${process.env.API_TOKEN_SALT}`,
  //   }
  // };
  if (!option) {
    response = fetch(url);
  } else {
    response = fetch(url, option);
  }
  const data = (await response).json();

  return data;
}