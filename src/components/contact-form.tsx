import { useState } from "react";
import { ArrowUpRight, Check } from "lucide-react";
import { products } from "@/data/site";

export function ContactForm() {
  const [sent, setSent] = useState(false);

  return (
    <form
      className="contact-form"
      onSubmit={(event) => {
        event.preventDefault();
        setSent(true);
      }}
    >
      <div className="form-grid">
        <label>
          <span>Your name</span>
          <input required name="name" autoComplete="name" placeholder="Your name" />
        </label>
        <label>
          <span>Clinic name</span>
          <input required name="clinic" autoComplete="organization" placeholder="Your clinic or company" />
        </label>
        <label>
          <span>Email address</span>
          <input required name="email" type="email" autoComplete="email" placeholder="name@practice.com" />
        </label>
        <label>
          <span>Country</span>
          <input required name="country" autoComplete="country-name" placeholder="Country" />
        </label>
        <label className="form-wide">
          <span>Product of interest</span>
          <select name="product" defaultValue="">
            <option value="" disabled>Choose the product</option>
            {products.map((product) => <option key={product.key}>{product.name}</option>)}
          </select>
        </label>
        <label className="form-wide">
          <span>How can we help?</span>
          <textarea name="message" rows={4} placeholder="Ask a question, request details, or tell us you want a demo." />
        </label>
      </div>
      <button className="submit-button" type="submit">
        <span>{sent ? "Message received" : "Send message"}</span>
        {sent ? <Check size={18} /> : <ArrowUpRight size={18} />}
      </button>
      <p className="form-note">
        We will use these details to reply with the right product information.
      </p>
    </form>
  );
}
