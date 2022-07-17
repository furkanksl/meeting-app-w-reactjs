import { BASE_URL } from "../base/Base";
import NewMeetupForm from "../components/new-meetup/NewMeetupForm";

function NewMeetupPage() {
  function addNewMeetupHandler() {
    console.log(BASE_URL);
  }

  return (
    <section>
      <h1>New Meetup Page</h1>
      <NewMeetupForm onAddNewMeetup={addNewMeetupHandler} />
    </section>
  );
}

export default NewMeetupPage;
