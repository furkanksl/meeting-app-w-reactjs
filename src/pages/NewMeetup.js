import { MEETUPS_URL, METHOD_POST, CONTENT_TYPE_JSON } from "../base/Base";
import NewMeetupForm from "../components/new-meetup/NewMeetupForm";
import { useNavigate } from "react-router-dom";

function NewMeetupPage() {
  const navigation = useNavigate();
  async function addNewMeetupHandler(meetupData) {
    try {
      await fetch(MEETUPS_URL, {
        method: METHOD_POST,
        body: JSON.stringify(meetupData),
        headers: CONTENT_TYPE_JSON,
      });

      // console.log("SUCCESSFUL!");

      navigation("/");
    } catch (error) {
      console.log("FAILED TO ADDING NEW MEETING TO SERVER!");

      console.log(error);
    }
  }

  return (
    <section>
      <h1>New Meetup Page</h1>
      <NewMeetupForm onAddNewMeetup={addNewMeetupHandler} />
    </section>
  );
}

export default NewMeetupPage;
