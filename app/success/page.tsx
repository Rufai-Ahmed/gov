"use client";

export default function SuccessPage() {
  const handleShare = () => {
    if (navigator.share) {
      navigator
        .share({
          title: "Join WePay Waitlist",
          text: "I just joined the WePay waitlist for early access! Check it out:",
          url: window.location.origin,
        })
        .catch((error) => console.log("Error sharing:", error));
    } else {
      alert("Sharing link copied to clipboard!");
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center text-white text-center px-4 py-12 bg-gradient-to-t from-[#002211] via-[#004422] to-[#00663a]">
      <div className="max-w-3xl">
        <h1 className="text-5xl md:text-7xl font-bold mb-8">
          Thanks for joining!
        </h1>
        <h2 className="text-3xl md:text-5xl font-bold mb-16">
          We&apos;ll notify you when WePay launches.
        </h2>

        <button
          onClick={handleShare}
          className="bg-[#00d959] hover:bg-[#00e060] text-white font-medium px-12 py-4 rounded-full cursor-pointer transition-all shadow-md text-xl"
        >
          Share with Friends
        </button>
      </div>
    </div>
  );
}
