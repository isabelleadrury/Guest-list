function GuestList({ guests, setSelectedId }) {
  return (
    <>
      <h1 className="title">Guest List</h1>
      {guests.length === 0 ? (
        <p>No Guests yet.....</p>
      ) : (
        <ul className="list">
          {guests.map((guest) => {
            return (
              <li
                key={guest.id}
                className="list-item"
                onClick={() => setSelectedId(guest.id)}
              >
                <p className="name">{guest.name}</p>
                <p className="email">{guest.email}</p>
                <p className="phone">{guest.phone}</p>
              </li>
            );
          })}
        </ul>
      )}
    </>
  );
}
export default GuestList;
