import React from 'react';
import { Pagination } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';

/**
 * Generates a pagination component based on the given parameters.
 *
 * @param {Object} props - The props object containing the following properties:
 *   - pages {number}: The total number of pages.
 *   - page {number}: The current page.
 *   - isAdmin {boolean}: Indicates if the user is an admin. (default: false)
 *   - keyword {string}: The search keyword. (default: '')
 * @return {JSX.Element|null} The pagination component if there are more than 1 page, otherwise null.
 */
const Paginate = ({ pages, page, isAdmin = false, keyword = '' }) => {
  console.log(' page ', pages, page, keyword);
  return (
    pages > 1 && (
      <Pagination>
        {[...Array(pages).keys()].map((x) => (
          <LinkContainer
            key={x + 1}
            to={
              !isAdmin
                ? keyword
                  ? `/search/${keyword}/page/${x + 1}`
                  : `/page/${x + 1}`
                : `/admin/productlist/${x + 1}`
            }
          >
            <Pagination.Item active={x + 1 === page}>{x + 1}</Pagination.Item>
          </LinkContainer>
        ))}
      </Pagination>
    )
  );
};

export default Paginate;
