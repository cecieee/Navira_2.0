import toast from "react-hot-toast";

export const useRegistration = () => {
  const handleRegisterClick = (e) => {
    const registrationOpenDate = new Date("2025-12-03T21:58:00");
    const now = new Date();

    if (now < registrationOpenDate) {
      if (e) e.preventDefault();
      toast.error("Registrations will open soon!", {
        position: "top-right",
      });
      return false;
    }
    return true;
  };

  const handleRedirect = (e) => {
    if (handleRegisterClick(e)) {
      window.open(
        "https://snaptiqz.com/event/navira/",
        "_blank",
        "noopener,noreferrer"
      );
    }
  };

  return { handleRegisterClick, handleRedirect };
};
