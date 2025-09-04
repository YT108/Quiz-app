import { useLocation, useNavigate } from "react-router-dom";


export default function Results() {
const { state } = useLocation();
const navigate = useNavigate();


if (!state) return <p>No data found.</p>;


const { answers, questions } = state;
const score = answers.filter((a, i) => a === questions[i].answer).length;


return (
<div>
<h1>Results</h1>
<p>Score: {score} / {questions.length}</p>
<ul>
{questions.map((q, i) => (
<li key={q.id}>
{q.question} - <strong>{answers[i] === q.answer ? "✅ Correct" : "❌ Wrong"}</strong>
</li>
))}
</ul>
<button onClick={() => navigate("/")}>Restart</button>
</div>
);
}