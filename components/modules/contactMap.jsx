export default function ContactMap({ companyName, address, email, phone, schedule }) {
  return (
    <div className="relative">
      <iframe width="100%" src="https://www.google.com/maps/embed?pb=!1m23!1m12!1m3!1d7661.0896035023625!2d12.700640220035146!3d56.03858338428215!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m8!3e6!4m0!4m5!1s0x465233b3b976ea35%3A0x157f672a440c21e!2zU8O2ZGVyZ2F0YW4gNzYsIDI1MiAyNSBIZWxzaW5nYm9yZywg0KjQstC10YbQuNGP!3m2!1d56.037454999999994!2d12.704105799999999!5e0!3m2!1sru!2sru!4v1675246979576!5m2!1sru!2sru"  className="h-60 rounded-3xl lg:h-100" allowFullScreen="true" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
      <div className="mt-5 lg:absolute lg:right-0 lg:bottom-0 lg:rounded-tl-3xl lg:bg-silver lg:p-8 lg:w-112.5">
        {companyName && <p className="t-h2">{companyName}</p>}
        <div className="t-24 space-y-3 mt-4 lg:mt-3">
          {address && <p>{address}</p>}
          {phone && <p><a href={`tel:${phone}`}>{phone}</a></p>}
          {email && <p><a href={`mailto:${email}`}>{email}</a></p>}
          {schedule && <p>{schedule}</p>}
        </div>
      </div>
    </div>
  );
}