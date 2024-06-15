import { useNavigate } from "react-router-dom";

export default function HomePage() {
    const navigate = useNavigate();


    return (
        <div>
            <h2>Home Page</h2>
            <button className="button button-primary button-small" type="button"
                onClick={() => navigate(`/examples/`)}
            >Go to examples</button>
        </div>
    );
}
