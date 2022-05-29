import React from "react";
import emailjs from "emailjs-com";
const Mailer = () => {
  function sendEmail(e) {
    alert("You message has been send successfully");
    e.preventDefault();
    emailjs
      .sendForm(
        "service_lvztg42",
        "template_l8g0ln8",
        e.target,
        "Ps0owUJKhtm6NmLsl"
      )
      .then((res) => {
        console.log(res);
      })
      .catch((err) => console.log(err));
  }
  return (
    <div
      className="container border mailerBackground"
      style={{
        marginTop: "50px",
        width: "100%",
        backgroundImage: `url("https://thumbs.dreamstime.com/z/beautiful-autumn-foliage-background-brunches-falling-tree-leaves-sky-bokeh-98280795.jpg")`,
        backgroundPosition: "center",
        backgroundSize: "cover",
      }}
    >
      <h1 style={{ marginTop: "30px" }}>Contact Us</h1>
      <form
        className="row"
        style={{ margin: "25px 85px 75px 100px" }}
        onSubmit={sendEmail}
      >
        <label>Name</label>
        <input type="text" name="name" className="form-control"></input>

        <label>Email</label>
        <input type="email" name="user_email" className="form-control"></input>

        <label>Message</label>
        <textarea name="message" rows="4" className="form-control"></textarea>
        <input
          type="submit"
          value="Send"
          className="form-control btn btn-primary"
          style={{ marginTop: "30px" }}
        ></input>
      </form>
    </div>
  );
};

export default Mailer;
