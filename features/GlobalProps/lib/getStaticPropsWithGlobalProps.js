import { fetchGlobalProps } from "./fetchGlobalProps";

export function getStaticPropsWithGlobalProps(getStaticProps) {
  return async (ctx) => {
    const globalProps = await fetchGlobalProps();
    const result = await getStaticProps(ctx, globalProps);

    if ("redirect" in result || "notFound" in result) {
      return result;
    }

    return {
      props: {
        ...result.props,
        ...globalProps,
      },
      revalidate: result.revalidate,
    };
  }
}