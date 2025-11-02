import React, { useState, useEffect } from "react";
import TeamMemberCard from "./TeamMemberCard";
import "./styles.css";

export default function App() {
  const [team, setTeam] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchTeamData = async () => {
      try {
        const response = await fetch(
          "https://jsonplaceholder.typicode.com/users"
        );
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        setTeam(data);
      } catch (e) {
        setError(e);
      } finally {
        setIsLoading(false);
      }
    };

    fetchTeamData();
  }); // Пустой массив зависимостей

  if (isLoading) {
    return (
      <div className="app-container">
        <h1>Загрузка сотрудников...</h1>
      </div>
    );
  }

  if (error) {
    return (
      <div className="app-container">
        <h1>Ошибка: {error.message}</h1>
      </div>
    );
  }

  return (
    <div className="app-container">
      <h1>Наша команда</h1>
      <div className="team-grid">
        {/* --- ЭТОТ БЛОК ИЗМЕНИЛСЯ --- */}
        {team.map((member) => (
          <TeamMemberCard
            key={member.id}
            avatarUrl={`https://avatar.iran.liara.run/public/boy?username=${member.username}`}
            name={member.name}
            position={member.company.name} // Используем название компании в качестве должности
            email={member.email}
          />
        ))}
      </div>
    </div>
  );
}
