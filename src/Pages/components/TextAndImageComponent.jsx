import { useNavigate } from "react-router-dom";
import classnames from "classnames";

function TextAndImageComponent (props) {
    const navigate = useNavigate();
    return <>
        <div className={classnames('text-and-image-component', props.reverse ? 'reverse' : '')}>
            <div className="image-container">
                <img src={props.image} alt="image" onClick={() => props.handleClick(props.link)}/>
            </div>
            <div className="text-container">
                <div className="text-container-inner">
                    <div className="title" onClick={() => props.handleClick(props.link)}>
                        {props.title}
                    </div>
                    <div className="description">
                        {props.description}
                    </div>
                </div>
            </div>
        </div>
    </>;
}

export default TextAndImageComponent;