import Form from "@/components/sections/waitlist/Form";
import Waitlist from "@/components/sections/waitlist/Waitlist";

const Page = () => {
  return (
    <div className="scroll-smooth">
      <Waitlist />
      <div id="waitlist-form">
        <Form />
      </div>
    </div>
  );
};

export default Page;
