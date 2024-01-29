import { useToast } from "@/app/context/toast";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";

export default function Toast({ message }: { message: string }) {
  const { isVisible, setIsVisible } = useToast();

  function handleClick() {
    setIsVisible(false);
  }

  if (!isVisible) return null;

  return (
    <div className="absolute bottom-0 left-0 bg-green-300 text-black p-4">
      <button onClick={handleClick}>
        <FontAwesomeIcon icon={faXmark} />
      </button>
      <p>{message}</p>
    </div>
  );
}
