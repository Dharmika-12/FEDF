function Details({ details }) {
  return (
    <div>
      <h2>Details</h2>

      <p>User Name : {details.username}</p>
      <p>Mobile : {details.mobile}</p>
      <p>Email : {details.email}</p>
      <p>Address : {details.address}</p>
    </div>
  );
}

export default Details;