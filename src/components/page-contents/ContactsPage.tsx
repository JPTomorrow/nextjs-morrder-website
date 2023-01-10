import { useState } from "react";
import { trpc } from "@/utils/trpc";
import StarHeader from "@/components/StarHeader";

const Email = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const send = trpc.useMutation(["email.sendEmail"]);

  const sendMail = async () => {
    const body = {
      senderName: name,
      fromEmail: email,
      message: message,
    };

    await send.mutateAsync(body).then((res) => {
      console.log(res);
    });

    setName("");
    setEmail("");
    setMessage("");
  };

  return (
    <>
      <StarHeader className="std-hdr-t-pad">Contact Me</StarHeader>
      <div className="flex flex-col mt-[75px]">
        <input
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Name"
          className="contact-input"
        />
        <input
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Email"
          className="mt-[25px] contact-input"
        />
        <textarea
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Message"
          className="mt-[25px] contact-input"
        />
        <div className="mt-[5px] w-[400px] mx-auto">
          <button
            className="custom-button float-left rounded-md px-4 py-2 text-white mt-2 hover:bg-purple2 transition-all duration-75"
            onClick={() => sendMail()}
          >
            Submit
          </button>
        </div>
      </div>
    </>
  );
};

export default Email;
