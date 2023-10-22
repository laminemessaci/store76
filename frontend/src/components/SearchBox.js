import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

/**
 * Renders a search box component.
 *
 * @return {JSX.Element} The rendered search box component.
 */
const SearchBox = () => {
  const [keyword, setKeyword] = useState('');
  const navigate = useNavigate();

  /**
   * Submit handler function for form submission.
   *
   * @param {Event} e - The event object.
   * @return {void} This function does not return a value.
   */
  const submitHandler = (e) => {
    e.preventDefault();
    if (keyword.trim()) {
      navigate(`/search/${keyword}`);
    } else {
      navigate('/');
    }
  };

  return (
    <Form
      onSubmit={submitHandler}
      className="mr-sm-2 ml-sm-5   d-flex flex-row"
    >
      <Form.Control
        type="text"
        name="q"
        onChange={(e) => setKeyword(e.target.value)}
        placeholder="Search Products..."
        className="mr-sm-2 ml-sm-5 "
      />
      <Button type="submit" variant="outline-success" className="p-2 mx-2 ">
        Search
      </Button>
    </Form>
  );
};

export default SearchBox;
