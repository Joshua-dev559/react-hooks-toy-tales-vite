import React from "react";

function ToyCard({ toy, deleteToy, updateToy }) {
  const { id, name, image, likes } = toy;

  function handleLike() {
    fetch(`http://localhost:3001/toys/${id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        likes: likes + 1,
      }),
    })
      .then((r) => r.json())
      .then((updatedToy) => updateToy(updatedToy));
  }

  function handleDelete() {
    fetch(`http://localhost:3001/toys/${id}`, {
      method: "DELETE",
    }).then(() => deleteToy(id));
  }

  return (
    <div className="card" data-testid="toy-card">
      <h2>{name}</h2>

      <img
        src={image}
        alt={name}
        className="toy-avatar"
      />

      {/* IMPORTANT: trailing space after Likes */}
      <p>{likes} Likes </p>

      <button onClick={handleLike}>
        Like {"<3"}
      </button>

      <button onClick={handleDelete}>
        Donate to GoodWill
      </button>
    </div>
  );
}

export default ToyCard;