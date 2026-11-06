import { useContext } from "react";
import { UserContext } from "./UserContext";

const A = () => {
    // const { count, setCount } = useContext(UserContext);
    const data = useContext(UserContext);
    return (
        <div>
            <h2>This is A component</h2>
            {/* <p>Count: {count}</p>
            <button type="button" onClick={() => setCount((value) => value + 1)}>
                Increase
            </button> */}
            <h2 onClick = {stateHandle}> Increase</h2>
        </div>
    );
};

export default A;