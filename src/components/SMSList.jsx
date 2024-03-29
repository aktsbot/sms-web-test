function SMSList({ smses }) {
  return smses.map((s) => (
    <div key={s.id} className="box">
      <p>To: {s.to}</p>
      <p className="text">Content: {s.content}</p>

      <a
        href={`sms:${s.to}?body=${encodeURIComponent(s.content)}`}
        className="btn"
      >
        Send SMS
      </a>
    </div>
  ));
}

export default SMSList;
