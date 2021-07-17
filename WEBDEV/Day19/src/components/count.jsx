import {useState} from "react";

const Count = () => {
    let [count, CountFn] = useState(0);
    return(
        <span>
            <button onClick={() => {
                CountFn(count + 1)
            }}
            >{count}
            </button>
        </span>
    )
}

export default Count;