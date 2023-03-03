const SocialMediaIcons = () => {
  return (
    <div className="flex justify-center md:justify-start my-10 gap-7">
      <a
        className="hover:opacity-50 transition duration-500"
        href="https://www.linkedin.com/in/leslie-garces98/"
        target="_blank"
        rel="noreferrer"
      >
        <img src="../assets/linkedin.png" alt="linkedin-link" />
      </a>
      <a
        className="hover:opacity-50 transition duration-500"
        href="https://twitter.com/LeslieGarces15"
        target="_blank"
        rel="noreferrer"
      >
        <img src="../assets/twitter.png" alt="twitter-link" />
      </a>
      <a
        className="hover:opacity-50 transition duration-500 w-[30px] h-[30px]"
        href="https://www.instagram.com/les15g/"
        target="_blank"
        rel="noreferrer"
      >
        <img src="../assets/instagram.png" alt="github-link" />
      </a>
    </div>
  );
};

export default SocialMediaIcons;
