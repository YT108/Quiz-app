import React from "react";
import { fadeIn } from "../styles";
import styled from "styled-components";

const Card = styled.div`
  animation: ${fadeIn} 0.4s ease-in-out;
  margin-bottom: 1rem;
`;

export default function QuestionCard({ data, selected, onSelect }) {
  return (
    <Card>
      <h2>{data.question}</h2>
      {data.options.map((opt, idx) => (
        <div key={idx} style={{ marginBottom: "0.5rem" }}>
          <label>
            <input
              type="radio"
              name={`q-${data.question}`}
              value={idx}
              checked={selected === idx}
              onChange={() => onSelect(idx)}
            />
            {" "}{opt}
          </label>
        </div>
      ))}
    </Card>
  );
}
