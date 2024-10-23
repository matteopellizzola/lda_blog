// import { useNavigate } from "react-router-dom";
import classnames from "classnames";
import classNames from "classnames";

function TextAndImageComponent(props) {
  // const navigate = useNavigate();
  return (
    <>
      <div
        className={classnames(
          "text-and-image-component",
          props.reverse ? "reverse" : "",
          props.outer ? "outer-image" : ""
        )}
      >
        <div className="image-container">
          {/* eslint-disable-next-line jsx-a11y/img-redundant-alt */}
          <img
            src={props.image}
            className={props.link ? "cursor-pointer" : ""}
            alt="image"
            onClick={() => props.handleClick(props.link)}
          />
        </div>
        <div className="text-container">
          <div className="text-container-inner">
            {props.ish1 ? (
              <h1
                className={classNames(
                  "title",
                  props.link ? "cursor-pointer" : ""
                )}
                onClick={() => props.handleClick(props.link)}
              >
                {props.title}
              </h1>
            ) : (
              <div
                className={classNames(
                  "title",
                  props.link ? "cursor-pointer" : ""
                )}
                onClick={() => props.handleClick(props.link)}
              >
                {props.title}
              </div>
            )}
            <div className="description">{props.description}</div>
          </div>
        </div>
      </div>
    </>
  );
}

export default TextAndImageComponent;
