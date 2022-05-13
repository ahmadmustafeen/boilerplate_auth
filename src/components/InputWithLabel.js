import React from "react";
import { FormControl, InputGroup } from "react-bootstrap";

const InputWithLabel = props => {
    const {
        label
    } = props
  return (
    <div className="form-group">
      <InputGroup size="sm" className="mb-3">
        <InputGroup.Text id="inputGroup-sizing-sm" style={{minWidth:"120px"}}>{label}</InputGroup.Text>
        <FormControl
        className="shadow-none"
          aria-label="Small"
          aria-describedby="inputGroup-sizing-sm"
        />
      </InputGroup>
    </div>
  );
};

export {InputWithLabel};
