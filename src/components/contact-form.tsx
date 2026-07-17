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
          <span>Full name</span>
          <input required name="name" autoComplete="name" placeholder="Your name" />
        </label>
        <label>
          <span>Clinic name</span>
          <input required name="clinic" autoComplete="organization" placeholder="Clinic or practice" />
        </label>
        <label>
          <span>Work email</span>
          <input required name="email" type="email" autoComplete="email" placeholder="name@clinic.com" />
        </label>
        <label>
          <span>Country</span>
          <input required name="country" autoComplete="country-name" placeholder="Country" />
        </label>
        <label className="form-wide">
          <span>Product of interest</span>
          <select name="product" defaultValue="">
            <option value="" disabled>Select a product</option>
            {products.map((product) => <option key={product.key}>{product.name}</option>)}
            <option>Full collection</option>
          </select>
        </label>
        <label className="form-wide">
          <span>Message</span>
          <textarea name="message" rows={4} placeholder="Tell us about your practice and requirements." />
        </label>
      </div>
      <button className="submit-button" type="submit">
        <span>{sent ? "Request recorded" : "Submit demonstration request"}</span>
        {sent ? <Check size={18} /> : <ArrowUpRight size={18} />}
      </button>
      <p className="form-note">
        Demo form only. Connect this form to your CRM or form provider before launch.
      </p>
    </form>
  );
}
