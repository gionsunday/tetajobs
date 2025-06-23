const ContactForm = () => (
  <aside className="posts single-left-inner">
    <h5 className="card-title">Contact Me</h5>
    <form action="#" method="post" className="employer-contact">
      <input type="text" name="name" placeholder="Your name" />
      <input type="email" name="email" placeholder="Your email" />
      <input type="subject" name="subject" placeholder="Enter subject" />
      <textarea placeholder="Your message"></textarea>
      <button className="btn">Send</button>
    </form>
  </aside>
);

export default ContactForm;
