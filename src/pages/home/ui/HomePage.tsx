import { useEndOfPage } from "shared/lib";
import { DotLoader, EndOfPage } from "shared/ui";
import { Shelf } from "widgets/Shelf";
import { homepageConfig } from "../lib/homepageConfig";

export const HomePage = () => {
  const { categoriesLimit } = useEndOfPage();

  return (
    <section>
      {homepageConfig.slice(0, categoriesLimit).map((shelf) => (
        <Shelf key={shelf.title} shelfTitle={shelf.title} api={shelf.api} />
      ))}

      {homepageConfig.length >= categoriesLimit && <DotLoader />}
      {homepageConfig.length < categoriesLimit && <EndOfPage />}
    </section>
  );
};
