import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Phone, Mail, MapPin, CheckCircle, Send, Clock, MessageCircle } from "lucide-react";

const contactInfo = [
  {
    icon: Phone,
    label: "Phone",
    value: "+91 98765 43210",
    subtext: "Mon-Sat, 9am-7pm",
  },
  {
    icon: Mail,
    label: "Email",
    value: "hello@nexarealty.com",
    subtext: "We reply within 24hrs",
  },
  {
    icon: MapPin,
    label: "Office",
    value: "Sector 18, Noida",
    subtext: "Uttar Pradesh, India",
  },
];

const ContactSection = () => {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <section id="contact" className="section-padding bg-gradient-to-b from-muted/30 via-muted/50 to-muted/30 relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-1/2 left-0 w-72 h-72 bg-primary/5 rounded-full blur-3xl -translate-y-1/2 -translate-x-1/2" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl translate-y-1/2 translate-x-1/2" />

      <div className="section-container relative">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full text-primary font-medium text-base mb-6 animate-fade-up">
            <MessageCircle className="w-4 h-4" />
            Get in Touch
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold text-foreground mb-6 animate-fade-up" style={{ animationDelay: "0.1s" }}>
            Let's Start the
            <span className="text-primary"> Conversation</span>
          </h2>
          <p className="text-lg text-muted-foreground animate-fade-up" style={{ animationDelay: "0.2s" }}>
            Ready to find your dream property? We'd love to hear from you. Reach out and let's discuss how we can help.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 lg:gap-12">
          {/* Contact Info */}
          <div className="lg:col-span-2 space-y-6 animate-fade-up" style={{ animationDelay: "0.3s" }}>
            {/* Contact Cards */}
            {contactInfo.map((item, index) => (
              <div
                key={item.label}
                className="group flex items-start gap-4 p-5 rounded-2xl bg-background border border-border hover:border-primary/30 hover:shadow-lg transition-all duration-300"
              >
                <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary group-hover:scale-110 transition-all duration-300">
                  <item.icon className="w-6 h-6 text-primary group-hover:text-primary-foreground transition-colors" />
                </div>
                <div>
                  <div className="text-base text-muted-foreground mb-1">{item.label}</div>
                  <div className="text-foreground font-semibold text-lg">{item.value}</div>
                  <div className="text-sm text-muted-foreground mt-1">{item.subtext}</div>
                </div>
              </div>
            ))}

            {/* Response Time Card */}
            <div className="p-5 rounded-2xl bg-primary/5 border border-primary/20">
              <div className="flex items-center gap-3 mb-3">
                <Clock className="w-5 h-5 text-primary" />
                <span className="text-lg font-semibold text-foreground">Quick Response Guaranteed</span>
              </div>
              <p className="text-base text-muted-foreground">
                We typically respond within 2-4 hours during business hours. For urgent inquiries, give us a call!
              </p>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-3 animate-fade-up" style={{ animationDelay: "0.4s" }}>
            <div className="bg-background rounded-3xl p-6 sm:p-8 shadow-xl border border-border relative overflow-hidden">
              {/* Form Background Decoration */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-full blur-2xl" />

              {submitted ? (
                <div className="flex flex-col items-center justify-center h-full text-center py-16 relative">
                  <div className="w-20 h-20 rounded-full bg-primary/10 flex items-center justify-center mb-6 animate-fade-up">
                    <CheckCircle className="w-10 h-10 text-primary" />
                  </div>
                  <h3 className="text-3xl font-semibold text-foreground mb-3 animate-fade-up" style={{ animationDelay: "0.1s" }}>
                    Thank You!
                  </h3>
                  <p className="text-lg text-muted-foreground max-w-sm animate-fade-up" style={{ animationDelay: "0.2s" }}>
                    We've received your message and will get back to you within 24 hours. Keep an eye on your inbox!
                  </p>
                  <Button
                    variant="outline"
                    className="mt-6 animate-fade-up"
                    style={{ animationDelay: "0.3s" }}
                    onClick={() => setSubmitted(false)}
                  >
                    Send Another Message
                  </Button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5 relative">
                  <div className="grid sm:grid-cols-2 gap-5">
                    <div>
                      <label htmlFor="fullName" className="block text-base font-medium text-foreground mb-2">
                        Full Name <span className="text-primary">*</span>
                      </label>
                      <Input
                        id="fullName"
                        name="fullName"
                        type="text"
                        placeholder="Your full name"
                        value={formData.fullName}
                        onChange={handleChange}
                        required
                        className="h-12 rounded-xl bg-muted/50 border-border focus:border-primary focus:ring-primary"
                      />
                    </div>

                    <div>
                      <label htmlFor="phone" className="block text-base font-medium text-foreground mb-2">
                        Phone Number
                      </label>
                      <Input
                        id="phone"
                        name="phone"
                        type="tel"
                        placeholder="+91 98765 43210"
                        value={formData.phone}
                        onChange={handleChange}
                        className="h-12 rounded-xl bg-muted/50 border-border focus:border-primary focus:ring-primary"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-base font-medium text-foreground mb-2">
                      Email Address <span className="text-primary">*</span>
                    </label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      placeholder="your.email@example.com"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="h-12 rounded-xl bg-muted/50 border-border focus:border-primary focus:ring-primary"
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-base font-medium text-foreground mb-2">
                      Your Message <span className="text-primary">*</span>
                    </label>
                    <Textarea
                      id="message"
                      name="message"
                      placeholder="Tell us about what you're looking for... (property type, location, budget, etc.)"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={5}
                      className="resize-none rounded-xl bg-muted/50 border-border focus:border-primary focus:ring-primary"
                    />
                  </div>

                  <Button type="submit" size="xl" className="w-full rounded-xl group">
                    <span>Send Message</span>
                    <Send className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                  </Button>

                  <p className="text-sm text-muted-foreground text-center">
                    By submitting this form, you agree to our privacy policy. We'll never share your information.
                  </p>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
