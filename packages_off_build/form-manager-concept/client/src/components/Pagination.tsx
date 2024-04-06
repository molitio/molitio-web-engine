import React from "react";
import {
  StyledPagination,
  StyledPaginationButton,
  StyledPaginationContainer,
  StyledPaginationText,
} from "../styled";

interface PaginationProps {
  pageSizeCollection: number[];
  totalNumberOfSurveys: number;
  handlePageChange: (skip: number, limit: number) => void;
}

const Pagination: React.FC<PaginationProps> = (props) => {
  const { pageSizeCollection, handlePageChange, totalNumberOfSurveys } = props;

  const [pageSizeIndex, setPageSizeIndex] = React.useState(0);
  const [selectedPage, setSelectedPage] = React.useState(0);
  const [pages, setPages] = React.useState([0]);

  React.useEffect(() => {
    const handle = () => {
      /* const pageSize = pageSizeCollection[pageSizeIndex]; */
      console.log("page size", pageSizeCollection[pageSizeIndex]);
      if (pageSizeCollection[pageSizeIndex] === 0) {
        handlePageChange(totalNumberOfSurveys, 10000);
        return;
      }
      const totalNumberOfPages =
        Math.ceil(totalNumberOfSurveys / pageSizeCollection[pageSizeIndex]) + 1;

      console.log("total pages", totalNumberOfPages);
      const pagesArray: number[] = [];
      pagesArray.push(0);

      for (let index = 1; index <= totalNumberOfPages; index++) {
        pagesArray.push(index);
      }

      console.log("pages array", pagesArray);
      const pages = pagesArray.map((page) => (page = page++));

      setPages(pages);
      console.log("pages", pages);
      console.log(
        totalNumberOfSurveys,
        pageSizeCollection[pageSizeIndex],
        pages
      );

      handlePageChange(
        selectedPage * pageSizeCollection[pageSizeIndex],
        pageSizeCollection[pageSizeIndex]
      );
    };
    handle();
  }, [pageSizeIndex]);

  React.useEffect(() => {
    handlePageChange(
      selectedPage * pageSizeCollection[pageSizeIndex],
      pageSizeCollection[pageSizeIndex]
    );
  }, [selectedPage]);

  const handlePageSizeChange = (selectedPageSizeIndex: number) => {
    setPageSizeIndex(selectedPageSizeIndex);
    setSelectedPage(0);
    handlePageChange(
      selectedPage * pageSizeCollection[pageSizeIndex],
      pageSizeCollection[pageSizeIndex]
    );
  };

  const handleSelectedPageChange = (page: number) => {
    setSelectedPage(page);
  };

  return (
    <StyledPagination>
      <StyledPaginationContainer>
        <StyledPaginationText>Page Size</StyledPaginationText>
        {pageSizeCollection?.map((page, i) => (
          <StyledPaginationButton
            key={page}
            onClick={() => handlePageSizeChange(i)}
          >
            {page === 0 ? "All" : page}
          </StyledPaginationButton>
        ))}
      </StyledPaginationContainer>
      <StyledPaginationContainer>
        <StyledPaginationText>Page</StyledPaginationText>
        {pages.map((page) => (
          <StyledPaginationButton
            key={page}
            disabled={selectedPage === page}
            onClick={() => handleSelectedPageChange(page)}
          >
            {page + 1}
          </StyledPaginationButton>
        ))}
      </StyledPaginationContainer>
    </StyledPagination>
  );
};

export default Pagination;
