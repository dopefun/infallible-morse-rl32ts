import React, { useState } from "react";

function TeamMemberCard({ avatarUrl, name, position, email }) {
  // Локальное состояние для управления видимостью деталей
  const [detailsVisible, setDetailsVisible] = useState(false);

  // Функция-обработчик для переключения состояния
  const handleToggleDetails = () => {
    setDetailsVisible(!detailsVisible);
  };

  return (
    <div className="card">
      <img src={avatarUrl} alt={`Аватар ${name}`} className="avatar" />
      <h2>{name}</h2>
      <p>{position}</p>

      {/* Условный рендеринг блока с деталями */}
      {detailsVisible && (
        <div className="details">
          <p>Email: {email}</p>
        </div>
      )}

      {/* Кнопка с привязкой обработчика onClick */}
      <button onClick={handleToggleDetails}>
        {detailsVisible ? "Скрыть" : "Подробнее"}
      </button>
    </div>
  );
}

export default TeamMemberCard;
