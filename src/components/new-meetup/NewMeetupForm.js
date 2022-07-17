import Card from "../ui/Card";
import styles from "./NewMeetupForm.module.css";
import { useRef } from "react";

function NewMeetupForm(props) {
  const titleInputRef = useRef();
  const imageInputRef = useRef();
  const addressInputRef = useRef();
  const descriptionInputRef = useRef();

  var isFormSubmitting = false;

  async function submitHandler(event) {
    if (isFormSubmitting) {
      return null;
    }

    event.preventDefault();

    const enteredTitle = titleInputRef.current.value;
    const enteredImageUrl = imageInputRef.current.value;
    const enteredAddress = addressInputRef.current.value;
    const enteredDescription = descriptionInputRef.current.value;

    const meetupData = {
      title: enteredTitle,
      image: enteredImageUrl,
      address: enteredAddress,
      description: enteredDescription,
    };

    isFormSubmitting = true;
    await props.onAddNewMeetup(meetupData);

    isFormSubmitting = false;
    // clearForm();
  }

  //   function clearForm() {
  //     titleInputRef.current.value = "";
  //     imageInputRef.current.value = "";
  //     addressInputRef.current.value = "";
  //     descriptionInputRef.current.value = "";
  //   }

  return (
    <Card>
      <form className={styles.form} onSubmit={submitHandler}>
        <div className={styles.control}>
          <label htmlFor="title">Meetup Title</label>
          <input type="text" required id="title" ref={titleInputRef} />
        </div>
        <div className={styles.control}>
          <label htmlFor="url">Meetup Image</label>
          <input type="text" required id="url" ref={imageInputRef} />
        </div>
        <div className={styles.control}>
          <label htmlFor="address">Meetup Address</label>
          <input type="text" required id="address" ref={addressInputRef} />
        </div>
        <div className={styles.control}>
          <label htmlFor="desc">Meetup Description</label>
          <textarea
            type="text"
            required
            id="desc"
            rows="5"
            ref={descriptionInputRef}
          ></textarea>
        </div>

        <div className={styles.actions}>
          <button>Add Meetup</button>
        </div>
      </form>
    </Card>
  );
}

export default NewMeetupForm;
