import { useState, useEffect } from "react";

function UserProfile() {
  const [userId, setUserId] = useState(1); // Default user
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    fetch(`https://jsonplaceholder.typicode.com/users/${userId}`)
      .then((response) => response.json())
      .then((data) => {
        setUser(data);
        setLoading(false);
      });
  }, [userId]); // Runs when userId changes

  return (
    <div>
      <h2>User Profile</h2>
      <select value={userId} onChange={(e) => setUserId(Number(e.target.value))}>
       {console.log(userId)}
       
        {[1, 2, 3, 4, 5].map((id) => (
          <option key={id} value={id}>
            User {id}
          </option>
        ))}
      </select>

      {loading ? (
        <p>Loading user data...</p>
      ) : user ? (
        <div>
          <p><strong>Name:</strong> {user.name}</p>
          <p><strong>Email:</strong> {user.email}</p>
          <p><strong>Company:</strong> {user.company.name}</p>
        </div>
      ) : (
        <p>No user found.</p>
      )}
    </div>
  );
}

export default UserProfile;
