import { useEffect, useState } from "react";
import { getAllGuests, getGuestById } from "./api/guest";
import GuestList from "./components/GuestList";
import GuestDetails from "./components/GuestDetails";

export default function App() {
  const [guests, setGuests] = useState([]);
  const [selectedGuest, setSelectedGuest] = useState(null);
  const [selectedId, setSelectedId] = useState(null);
  const [loading, setLoading] = useState(false);

  //Fetch all Guests on mount

  useEffect(() => {
    async function loadGuests() {
      try {
        const data = await getAllGuests();
        setGuests(data);
      } catch (error) {
        console.error(error);
      }
    }
    loadGuests();
  }, []);
  //Fetch a single Guest
  useEffect(() => {
    if (!selectedId) return;
    async function loadSingleGuest() {
      setLoading(true);
      try {
        const data = await getGuestById(selectedId);
        setSelectedGuest(data);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    }
    loadSingleGuest();
  }, [selectedId]);

  return (
    <main className="container">
      {selectedId ? (
        <GuestDetails
          guest={selectedGuest}
          loading={loading}
          onBack={() => {
            setSelectedId(null);
            setSelectedGuest(null);
          }}
        />
      ) : (
        <GuestList guests={guests} setSelectedId={setSelectedId} />
      )}
    </main>
  );
}
