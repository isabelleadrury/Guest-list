function GuestDetails({ guest, onBack, loading }) {
  if (loading) {
    return <p>Loading Guest.....</p>;
  }
  if (!guest) {
    return <p>Couldn't find Guest</p>;
  }
  return (
    <article className="card">
      <button className="btn" onClick={onBack}>
        Back
      </button>
      <h2>{guest.name}</h2>
      <p>{guest.job}</p>
      <p>{guest.bio}</p>
    </article>
  );
}
export default GuestDetails;
