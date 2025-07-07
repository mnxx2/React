import { useRef } from "react";

export default function ExampleUseRef() {
    const inputEl = useRef(null);

    const onButtonClick = () => {
        inputEl.current.focus();
    };

    return (
        <div>
            <input type="text" ref={inputEl} />
            <button onClick={onButtonClick}>포커스</button>
        </div>
    )
}