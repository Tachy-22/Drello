const EmailSignUp = () => {
  return (
    <form className="flex gap-2 lg:w-[90%] pt-[1rem] h-fit">
      <input
        type="email"
        className="w-[70%] bg-white outline-none rounded-md py-2 px-2 h-fit text-black"
        placeholder="Email"
      />
      <button
        type="submit"
        className="w-[10rem] bg-blue-500 hover:bg-blue-700 p-2 rounded-md h-fit"
      >
        Sign up-it&apos;s free!
      </button>
    </form>
  );
};

export default EmailSignUp;
