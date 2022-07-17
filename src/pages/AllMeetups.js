import { MEETUPS_URL } from "../base/Base";
import { useState, useEffect } from "react";
import MeetupList from "../components/meetups/MeetupList";

function AllMeetupsPage() {
  const [isLoading, setIsLoading] = useState(true);
  const [loadedMeetups, setLoadedMeetups] = useState([]);

  useEffect(() => {
    getAllMeetings();
  }, []);

  async function getAllMeetings() {
    const response = await fetch(MEETUPS_URL);
    const data = await response.json();
    setIsLoading(false);

    const meetups = [];

    for (const key in data) {
      const meetup = {
        id: key,
        ...data[key],
      };

      meetups.push(meetup);
    }
    setLoadedMeetups(meetups);
    // console.log(meetups);
  }

  if (isLoading) {
    return (
      <section>
        <p>Loading...</p>
      </section>
    );
  }

  return (
    <section>
      <h1>All Meetups Page</h1>
      <MeetupList meetups={loadedMeetups} />
    </section>
  );
}

export default AllMeetupsPage;
