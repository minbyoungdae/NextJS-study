import Head from "next/head";

const HeadInfo = ({ title, keyword, content }) => {
  return (
    <Head>
      <title>{title}</title>
      <meta keyword={keyword} />
      <meta content={content} />
    </Head>
  );
};

HeadInfo.defaultProps = {
  title: "My Blog",
  keyword: "Blog powered by Next js",
  content: "Blog powered by Next js",
};

export default HeadInfo;
