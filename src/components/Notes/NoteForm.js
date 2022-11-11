import React from "react";

function NoteForm(props) {
  const {
    formTitle,
    title,
    content,
    titleChanged,
    contentChanged,
    submitClicked,
    submitText,
  } = props;

  return (
    <div>
      <h2>{formTitle}</h2>
      <div>
        <input
          type="text"
          name="title"
          className="form-input mb-30"
          placeholder="العنوان"
          value={title}
          onChange={titleChanged}
        />

        <textarea
          name="content"
          id=""
          cols="30"
          rows="10"
          className="form-input"
          placeholder="النص"
          value={content}
          onChange={contentChanged}
        />

        <a href="#" className="button green" onClick={submitClicked}>
          {submitText}
        </a>
      </div>
    </div>
  );
}

export default NoteForm;
