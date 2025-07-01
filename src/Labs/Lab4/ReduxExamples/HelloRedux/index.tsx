import { useSelector, useDispatch } from "react-redux";
var is_divisible_by_seventeen = require("is-divisible-by-seventeen");
export default function HelloRedux() {
    const { message } = useSelector((state: any) => state.helloReducer);
    const num = 21318;
    const result = is_divisible_by_seventeen(num);
    return (
        <div id="wd-hello-redux">
            <h3>Hello Redux</h3>
            <h4>{result ? message : "not divisible by seventeen"}</h4>
        </div>
    );
}

