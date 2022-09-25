export async function fetchGlobalProps() {
  const pageResponse = await fetcher(
    `${process.env.NEXT_PUBLIC_STRAPI_URL}/contact-page`
  );

  return {
    contacts: pageResponse.data.attributes,
  };
}