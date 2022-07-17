import NewMeetupForm from "../components/new-meetup/NewMeetupForm";

function NewMeetupPage() {
  function addNewMeetupHandler() {}

  return (
    <section>
      <h1>New Meetup Page</h1>
      <NewMeetupForm onAddNewMeetup={addNewMeetupHandler} />
    </section>
  );
}

export default NewMeetupPage;
