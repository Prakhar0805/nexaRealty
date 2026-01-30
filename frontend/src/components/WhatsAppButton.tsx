import { MessageCircle } from "lucide-react";

const WhatsAppButton = () => {
    // Replace with actual phone number later
    const phoneNumber = "+919876543210";
    const whatsappUrl = `https://wa.me/${phoneNumber}`;

    return (
        <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="whatsapp-float group text-white"
            aria-label="Contact us on WhatsApp"
        >
            <MessageCircle className="w-8 h-8 fill-current" />

            {/* Optional: Tooltip or label that appears on hover */}
            <span className="absolute right-full mr-4 px-3 py-1.5 bg-background border border-border rounded-lg text-sm font-medium text-foreground shadow-sm opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap hidden md:block">
                Chat with us
            </span>
        </a>
    );
};

export default WhatsAppButton;
