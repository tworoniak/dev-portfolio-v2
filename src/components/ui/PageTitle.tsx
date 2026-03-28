import { useEffect } from 'react';

const BASE_TITLE = 'Woroniak.dev';

type PageTitleProps = {
  title?: string;
};

const PageTitle = ({ title }: PageTitleProps) => {
  useEffect(() => {
    document.title = title ? `${title} | ${BASE_TITLE}` : BASE_TITLE;
    return () => {
      document.title = BASE_TITLE;
    };
  }, [title]);

  return null;
};

export default PageTitle;
