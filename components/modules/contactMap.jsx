export default function ContactMap({ companyName, address, email, phone, schedule }) {
  return (
    <div className="relative">
      <div className="h-60 rounded-3xl bg-grey lg:h-100"></div>
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