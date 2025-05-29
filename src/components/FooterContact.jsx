const FooterContact = ({icon}) => {
  return (
    <div >
        <span className="block mb-2">{icon}</span>
        <h2 className="uppercase font-bold text-[20px]">contact info</h2>
        <a href="tel:9134737000" className="block text-gray-500">913-345-7000</a>
        <a href="mailto:contact@cakeshop.com" className="block">contact@cakeshop.com</a>
    </div>
  );
};  
export default FooterContact;
