import Black from "./Black";
import White from "./White";

function RowEven(){
    return(
        <div className="RowEven">
            <White/>
            <Black/>
            <White/>
            <Black/>
            <White/>
            <Black/>
            <White/>
            <Black/>
        </div>
    );
};

export default RowEven;