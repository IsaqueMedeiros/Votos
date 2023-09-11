import { Link } from "react-router-dom";

function LinkComponent({ title, href }) {
  return (
    <Link
      to={href}
      className="rounded-2xl shadow-md bg-votosRed  text-white text-lg w-full max-w-[200px] py-0.5 flex items-center justify-center group hover:brightness-90 duration-500"
    >
      {title}
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="16"
        height="16"
        fill="currentColor"
        className="ml-2 group-hover:ml-3 duration-500"
        viewBox="0 0 16 16"
      >
        <path
          fillRule="evenodd"
          d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"
        />
      </svg>
    </Link>
  );
}

export default LinkComponent;
