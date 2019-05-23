import React, { useContext }  from "react";
import { Context, initialState } from "../../store";
import JSONInput from "react-json-editor-ajrm";
import locale from "react-json-editor-ajrm/locale/en";
import Pdf from './PDF'
import "./styles.css";

const JSONPdf = () => {
  const { store, dispatch } = useContext(Context);
  const getJosonFromEditor = (data) => {
    dispatch({ type: "update", payload: data })
  }
  return (
    <div className="jsonpdf-wrapper">
      <div style={{ maxWidth: "100%", maxHeight: "100%" }}>
        <JSONInput
          placeholder={store}
          onChange={d => getJosonFromEditor(d.jsObject)}
          theme="light_mitsuketa_tribute"
          locale={locale}
          height="93vh"
          theme="dark_vscode_tribute"
          width="100%"
        />
      </div>
      <div>
        <Pdf
          width="100%"
          height="100%"
          info={store}
        />
      </div>
    </div>
  );
}

export default JSONPdf