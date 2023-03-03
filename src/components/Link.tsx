import { Dispatch, SetStateAction } from "react";
import AnchorLink from "react-anchor-link-smooth-scroll";
import { PagesMap, pagesMap, Sections } from "../enums/SectionsEnum";

const Link = ({
  page,
  selectedPage,
  setSelectedPage,
}: {
  page: string;
  selectedPage: Sections;
  setSelectedPage: Dispatch<SetStateAction<Sections>>;
}) => {
  const upperCasePage = page!.toUpperCase() as Sections;

  return (
    <AnchorLink
      className={`${
        selectedPage === upperCasePage ? "text-yellow" : ""
      } hover:text-yellow transition duration-500`}
      href={`#${page === "Skills & Experience" ? "Skills" : page}`}
      onClick={() => setSelectedPage(upperCasePage)}
    >
      {pagesMap[page as keyof PagesMap]}
    </AnchorLink>
  );
};

export default Link;
