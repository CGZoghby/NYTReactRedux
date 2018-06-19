import React from "react";
import { Input, FormBtn } from "../../components/Form";

const SearchForm = props => (
  <form>
    <Input
      value={props.topic}
      onChange={props.handleInputChange}
      name="topic"
      placeholder="Topic"
    />
    <Input
      value={props.startYear}
      onChange={props.handleInputChange}
      name="startYear"
      placeholder="Start Year"
    />
    <Input
      value={props.endYear}
      onChange={props.handleInputChange}
      name="endYear"
      placeholder="End Year"
    />
    <FormBtn onClick={props.handleFormSubmit}>Search</FormBtn>
  </form>
);
export default SearchForm;
