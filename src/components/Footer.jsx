import "../scss/footer.scss";
const Footer = () => {
  return (
    <footer>
      <div>
        <a href="">
          <i className="fa-brands fa-facebook-f"></i>
        </a>
        <a href="">
          <i className="fa-brands fa-youtube"></i>
        </a>
        <a href="">
          <i className="fa-brands fa-linkedin"></i>
        </a>
        <a href="">
          <i className="fa-brands fa-instagram"></i>
        </a>
      </div>
      <p>Copyright by Clarusway {new Date().getFullYear()}</p>
    </footer>
  );
};

export default Footer;
