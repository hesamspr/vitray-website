import { useEffect } from 'react';

const BASE_TITLE = 'راهکارهای ویترای';

export function usePageTitle(page?: string) {
  useEffect(() => {
    document.title = page ? `${BASE_TITLE} - ${page}` : BASE_TITLE;
    return () => {
      document.title = BASE_TITLE;
    };
  }, [page]);
}
