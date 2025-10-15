import { useEndOfPage } from "shared/lib";
import { DotLoader, EndOfPage } from "shared/ui";
import { Shelf } from "widgets/Shelf";
import { shelvesConfig } from "../lib/shelvesConfig";

export const Categories = () => {
  const { categoriesLimit } = useEndOfPage();

  return (
    <section>
      {shelvesConfig.slice(0, categoriesLimit).map((shelf) => (
        <Shelf key={shelf.title} shelfTitle={shelf.title} api={shelf.api} />
      ))}
      {shelvesConfig.length >= categoriesLimit && <DotLoader />}
      {shelvesConfig.length < categoriesLimit && <EndOfPage />}
    </section>
  );
};
