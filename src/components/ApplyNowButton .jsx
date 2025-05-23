import React from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { toast } from "@/components/ui/use-toast";

const ApplyNowButton = ({ 
  label = "Apply Now", 
  className = "" 
}) => {
  const handleClick = () => {
    console.log("Apply now clicked");

    // Show a toast notification when button is clicked
    toast({
      title: "Application Submitted",
      description: "Thank you for your interest. Our team will contact you soon.",
    });

    // You can also redirect or trigger form submission here if needed
    // Example: window.location.href = "/apply";
  };

  return (
    <div className="flex justify-center">
      <Button 
        onClick={handleClick}
        className={`bg-[#0074d9] hover:bg-[#0062b5] text-white font-medium py-1 px-3 rounded-md flex items-center justify-center gap-2 ${className}`}
        size="sm"
      >
        {label}
        <ArrowRight size={14} />
      </Button>
    </div>
  );
};

export default ApplyNowButton;
